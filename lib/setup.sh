#!/usr/bin/env bash
set -e
set -x

apt update && apt upgrade -y
apt install -y sudo libcap2-bin git tree mosh jq

# install & configure ufw & fail2ban
apt install -y ufw
ufw allow ssh
ufw allow mosh
ufw allow http
ufw allow https
ufw enable
apt install -y fail2ban
# put /etc/fail2ban/jail.local, adapt to server
fail2ban-client reload
fail2ban-client restart
fail2ban-client status

# configure multiple IPv6 addresses
apt install -y netplan.io
echo 'network: {config: disabled}' >/etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
# adapt /etc/netplan/50-cloud-init.yaml to include more addreses
netplan apply
netplan try
# test using curl 'https://wtfismyip.com/text' --interface $ipv6_addr

# install Node, npm
curl -sL https://deb.nodesource.com/setup_16.x | bash -
apt install -y nodejs
npm config set progress false

# install Caddy & set up systemd service
wget -O /tmp/caddy.deb 'https://github.com/caddyserver/caddy/releases/download/v2.4.6/caddy_2.4.6_linux_amd64.deb'
dpkg --install /tmp/caddy.deb
wget -O /usr/bin/caddy 'https://caddyserver.com/api/download?os=linux&arch=amd64&p=github.com%2FRussellLuo%2Fcaddy-ext%2Fratelimit'
chown root:caddy /usr/bin/caddy
chmod +x /usr/bin/caddy
mkdir /var/www
chown www-data:www-data /var/www
chmod 555 /var/www
# /lib/systemd/system/caddy.service:
# - put StandardOutput=null in the [Service] section to disable logging
systemctl daemon-reload
systemctl restart caddy
systemctl status caddy

# install Redis
apt install -y redis
# add these to /etc/redis/redis.conf
# maxmemory 300mb
# maxmemory-policy allkeys-lfu
systemctl restart redis
systemctl status redis

# install & start APIs
git clone https://github.com/derhuerst/vbb-rest.git ~/a.v5.vbb.transport.rest
cd ~/a.v5.vbb.transport.rest
git checkout 5
npm i
npm run build
# put /etc/systemd/system/a.v5.vbb.transport.rest.service
systemctl enable a.v5.vbb.transport.rest
systemctl restart a.v5.vbb.transport.rest
systemctl status a.v5.vbb.transport.rest

git clone https://github.com/derhuerst/db-rest.git ~/a.v5.db.transport.rest
cd ~/a.v5.db.transport.rest
git checkout 5
npm i
npm run build
# put /etc/systemd/system/a.v5.db.transport.rest.service
systemctl enable a.v5.db.transport.rest
systemctl restart a.v5.db.transport.rest
systemctl status a.v5.db.transport.rest

git clone https://github.com/derhuerst/bvg-rest.git ~/a.v5.bvg.transport.rest
cd ~/a.v5.bvg.transport.rest
git checkout 5
npm i
npm run build
# put /etc/systemd/system/a.v5.bvg.transport.rest.service
systemctl enable a.v5.bvg.transport.rest
systemctl restart a.v5.bvg.transport.rest
systemctl status a.v5.bvg.transport.rest

git clone https://github.com/derhuerst/hvv-rest.git ~/a.v5.hvv.transport.rest
cd ~/a.v5.hvv.transport.rest
git checkout 5
npm i
npm run build
# put /etc/systemd/system/a.v5.hvv.transport.rest.service
systemctl enable a.v5.hvv.transport.rest
systemctl restart a.v5.hvv.transport.rest
systemctl status a.v5.hvv.transport.rest

# set up PostgreSQL
apt install postgresql-12-postgis-3 -y
sudo -i -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'password'"
nano /etc/postgresql/12/main/pg_hba.conf
# replace "local all postgres peer" line with "local all postgres md5"
systemctl restart postgresql
systemctl status postgresql

## set up NATS Streaming server
wget -O /tmp/nats-streaming-server.deb 'https://github.com/nats-io/nats-streaming-server/releases/download/v0.23.1/nats-streaming-server-v0.23.1-amd64.deb'
dpkg --install /tmp/nats-streaming-server.deb
mkdir /nats-data
# put /etc/systemd/system/nats-streaming-server.service
systemctl daemon-reload
systemctl restart nats-streaming-server
systemctl status nats-streaming-server

# v0.berlin-gtfs-rt.transport.rest
export PGUSER=postgres
export PGPASSWORD=password
PGDATABASE=postgres psql -c 'create database berlin'
export PGDATABASE=berlin

git clone https://github.com/derhuerst/berlin-gtfs-rt-server.git /var/www/v0.berlin-gtfs-rt.transport.rest
cd /var/www/v0.berlin-gtfs-rt.transport.rest
npm i
apt install unzip -y
npm run build

# put /etc/systemd/system/v0.berlin-gtfs-rt.transport.rest.service
# put /etc/systemd/system/v0.berlin-gtfs-rt.transport.rest-monitor.service
# put /etc/systemd/system/v0.berlin-gtfs-rt.transport.rest-match.service
# put /etc/systemd/system/v0.berlin-gtfs-rt.transport.rest-serve.service
systemctl daemon-reload
systemctl enable v0.berlin-gtfs-rt.transport.rest
systemctl restart v0.berlin-gtfs-rt.transport.rest
systemctl status v0.berlin-gtfs-rt.transport.rest-*.rest

apt install -y miller moreutils
npm i extract-gtfs-shapes -g
mkdir shapes
cat gtfs/shapes.csv | mlr --csv sort -f shape_id -n shape_pt_sequence | sponge gtfs/shapes.csv
extract-gtfs-shapes gtfs/shapes.csv shapes
ls -l shapes

# v0.hamburg-gtfs-rt.transport.rest
export PGUSER=postgres
export PGPASSWORD=password
PGDATABASE=postgres psql -c 'create database hamburg'
export PGDATABASE=hamburg

git clone https://github.com/derhuerst/hamburg-gtfs-rt-server.git /var/www/v0.hamburg-gtfs-rt.transport.rest
cd /var/www/v0.hamburg-gtfs-rt.transport.rest
npm i
apt install unzip -y
npm run build

# put /etc/systemd/system/v0.hamburg-gtfs-rt.transport.rest.service
# put /etc/systemd/system/v0.hamburg-gtfs-rt.transport.rest-monitor.service
# put /etc/systemd/system/v0.hamburg-gtfs-rt.transport.rest-match.service
# put /etc/systemd/system/v0.hamburg-gtfs-rt.transport.rest-serve.service
systemctl daemon-reload
systemctl enable v0.hamburg-gtfs-rt.transport.rest
systemctl restart v0.hamburg-gtfs-rt.transport.rest
systemctl status v0.hamburg-gtfs-rt.transport.rest-*.rest

apt install -y miller moreutils
npm i extract-gtfs-shapes -g
mkdir shapes
cat gtfs/shapes.txt | mlr --csv sort -f shape_id -n shape_pt_sequence | sponge gtfs/shapes.txt
extract-gtfs-shapes gtfs/shapes.txt shapes
ls -l shapes

# bbnavi-gtfs-rt-feed.jannisr.de
export PGUSER=postgres
export PGPASSWORD=password
PGDATABASE=postgres psql -c 'create database bbnavi'
export PGDATABASE=bbnavi

git clone https://github.com/bbnavi/gtfs-rt-feed.git /var/www/bbnavi-gtfs-rt-feed.jannisr.de
cd /var/www/bbnavi-gtfs-rt-feed.jannisr.de
npm i
apt install unzip -y
npm run build

# put /etc/systemd/system/bbnavi-gtfs-rt-feed.jannisr.de.service
# put /etc/systemd/system/bbnavi-gtfs-rt-feed.jannisr.de-monitor.service
# put /etc/systemd/system/bbnavi-gtfs-rt-feed.jannisr.de-match.service
# put /etc/systemd/system/bbnavi-gtfs-rt-feed.jannisr.de-serve.service
systemctl daemon-reload
systemctl enable bbnavi-gtfs-rt-feed.jannisr.de
systemctl restart bbnavi-gtfs-rt-feed.jannisr.de
systemctl status bbnavi-gtfs-rt-feed.jannisr.de-*.rest

apt install -y miller moreutils
npm i extract-gtfs-shapes -g
mkdir shapes
cat gtfs/shapes.txt | mlr --csv sort -f shape_id -n shape_pt_sequence | sponge gtfs/shapes.txt
extract-gtfs-shapes gtfs/shapes.txt shapes
ls -l shapes

# print status of all APIs
systemctl list-units | grep transport.rest

# configure & start Caddy
# put /etc/caddy/Caddyfile
chown root:root /etc/caddy/Caddyfile
chmod 644 /etc/caddy/Caddyfile
systemctl restart caddy.service
systemctl status caddy.service
sleep 5 && journalctl --boot -u caddy.service
