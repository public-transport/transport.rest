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

# install Node, npm, add-to-systemd
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt install -y nodejs
npm config set progress false
npm i -g npm@latest add-to-systemd

# install Caddy & set up systemd service
wget -O /tmp/caddy.deb 'https://github.com/caddyserver/caddy/releases/download/v2.3.0/caddy_2.3.0_linux_amd64.deb'
dpkg --install /tmp/caddy.dep
wget -O /usr/local/bin/caddy 'https://caddyserver.com/api/download?os=linux&arch=amd64&p=github.com%2FRussellLuo%2Fcaddy-ext%2Fratelimit'
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
# maxmemory 200mb
# maxmemory-policy allkeys-lfu
systemctl restart redis
systemctl status redis

# install & start APIs
git clone https://github.com/derhuerst/vbb-rest.git ~/a.v5.vbb.transport.rest
cd ~/a.v5.vbb.transport.rest
git checkout 5
npm i
npm run build
add-to-systemd a.v5.vbb.transport.rest -e NODE_ENV=production -e HOSTNAME=a.v5.vbb.transport.rest -e PORT=3009 -e REDIS_URL='redis:///4' -e TIMEZONE=Europe/Berlin -e LOCALE=de-DE --cwd ~/a.v5.vbb.transport.rest "$(which node) index.js"
systemctl enable a.v5.vbb.transport.rest
systemctl start a.v5.vbb.transport.rest

git clone https://github.com/derhuerst/db-rest.git ~/a.v5.db.transport.rest
cd ~/a.v5.db.transport.rest
git checkout 5
npm i
npm run build
add-to-systemd a.v5.db.transport.rest -e NODE_ENV=production -e HOSTNAME=a.v5.db.transport.rest -e PORT=3008 -e REDIS_URL='redis:///3' -e TIMEZONE=Europe/Berlin -e LOCALE=de-DE --cwd ~/a.v5.db.transport.rest "$(which node) index.js"
systemctl enable a.v5.db.transport.rest
systemctl start a.v5.db.transport.rest

git clone https://github.com/derhuerst/bvg-rest.git ~/a.v5.bvg.transport.rest
cd ~/a.v5.bvg.transport.rest
git checkout 5
npm i
npm run build
add-to-systemd a.v5.bvg.transport.rest -e NODE_ENV=production -e HOSTNAME=a.v5.bvg.transport.rest -e PORT=3007 -e REDIS_URL='redis:///2' -e TIMEZONE=Europe/Berlin -e LOCALE=de-DE --cwd ~/a.v5.bvg.transport.rest "$(which node) index.js"
systemctl enable a.v5.bvg.transport.rest
systemctl start a.v5.bvg.transport.rest

git clone https://github.com/derhuerst/hvv-rest.git ~/a.v5.hvv.transport.rest
cd ~/a.v5.hvv.transport.rest
git checkout 5
npm i
npm run build
add-to-systemd a.v5.hvv.transport.rest -e NODE_ENV=production -e HOSTNAME=a.v5.hvv.transport.rest -e PORT=3006 -e REDIS_URL='redis:///1' -e TIMEZONE=Europe/Berlin -e LOCALE=de-DE --cwd ~/a.v5.hvv.transport.rest "$(which node) index.js"
systemctl enable a.v5.hvv.transport.rest
systemctl restart a.v5.hvv.transport.rest

# set up PostgreSQL
apt install postgresql-12-postgis-3 -y
nano /etc/postgresql/12/main/pg_hba.conf
# replace "local all postgres peer" line with "local all postgres md5"
systemctl restart postgresql

## set up NATS Streaming server
wget -O /tmp/nats-streaming-server.deb 'https://github.com/nats-io/nats-streaming-server/releases/download/v0.20.0/nats-streaming-server-v0.20.0-amd64.deb'
dpkg --install /tmp/nats-streaming-server.deb
# put /etc/systemd/system/nats-streaming-server.service
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
systemctl status v0.berlin-gtfs-rt.transport.rest

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
systemctl status v0.hamburg-gtfs-rt.transport.rest

# print status of all APIs
systemctl list-units | grep transport.rest

# configure & start Caddy
wget 'todo-link-to-Caddyfile-from-gist' -O /etc/caddy/Caddyfile
chown root:root /etc/caddy/Caddyfile
chmod 644 /etc/caddy/Caddyfile
systemctl restart caddy.service
systemctl enable caddy.service
sleep 5 && journalctl --boot -u caddy.service
