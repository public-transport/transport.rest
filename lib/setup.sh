#!/usr/bin/env bash
set -e
set -x

apt update && apt upgrade -y
apt install -y sudo libcap2-bin git tree

# install & configure ufw & fail2ban
ufw allow ssh
ufw allow mosh
ufw allow https
ufw enable
apt install -y fail2ban
# put /etc/fail2ban/jail.local
fail2ban-client start
fail2ban-client status

# install Node, npm, add-to-systemd
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt install -y nodejs
npm config set progress false
npm i -g npm@latest add-to-systemd

# install Caddy
curl https://getcaddy.com | bash -s personal http.cors,http.ratelimit
chown root:root /usr/local/bin/caddy
chmod 755 /usr/local/bin/caddy
setcap 'cap_net_bind_service=+ep' /usr/local/bin/caddy
groupadd -g 33 www-data
useradd -g www-data --no-user-group   --home-dir /var/www --no-create-home   --shell /usr/sbin/nologin   --system --uid 33 www-data
mkdir /etc/caddy
chown -R root:root /etc/caddy
mkdir /etc/ssl/caddy
chown -R root:www-data /etc/ssl/caddy
chmod 0770 /etc/ssl/caddy
mkdir /var/www
chown www-data:www-data /var/www
chmod 555 /var/www

# install Redis
apt install -y redis
# add these to /etc/redis/redis.conf
# maxmemory 100mb
# maxmemory-policy allkeys-lfu

# set up Caddy systemd service
wget https://raw.githubusercontent.com/caddyserver/caddy/v1.0.4/dist/init/linux-systemd/caddy.service -O /etc/systemd/system/caddy.service
chown root:root /etc/systemd/system/caddy.service
chmod 644 /etc/systemd/system/caddy.service
systemctl daemon-reload
# put StandardOutput=null in the [Service] section to disable logging

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
systemctl start a.v5.hvv.transport.rest

# print status of all APIs
systemctl list-units | grep transport.rest

# configure & start Caddy
wget 'todo-link-to-Caddyfile-from-gist' -O /etc/caddy/Caddyfile
chown root:root /etc/caddy/Caddyfile
chmod 644 /etc/caddy/Caddyfile
systemctl start caddy.service
systemctl enable caddy.service
sleep 5 && journalctl --boot -u caddy.service
