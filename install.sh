#!/bin/bash
set -e

# ------------------------------------------------------------------------------
# trap on exit
# ------------------------------------------------------------------------------
function on_exit {
    echo

    if [[ "$COMPLETED" != true ]]; then
        echo "Something went wrong. Not completed!"
        echo

        exit 1
    else
        echo "Completed successfully!"
        echo
    fi
}

COMPLETED=false
trap on_exit EXIT

# ------------------------------------------------------------------------------
# packages
# ------------------------------------------------------------------------------
apt-get update
apt-get -y install curl unzip
apt-get -y install libnginx-mod-http-lua
apt-get -y install lua-cjson lua-basexx lua-luaossl

# ------------------------------------------------------------------------------
# checking
# ------------------------------------------------------------------------------
# fail if there is no jicofo
echo "testing Jicofo..."
curl http://127.0.0.1:8888/stats

# ------------------------------------------------------------------------------
# deno
# ------------------------------------------------------------------------------
# deno
unzip -o files/usr/local/bin/deno.zip -d /tmp
mv /tmp/deno /usr/local/bin/

deno --version

# ------------------------------------------------------------------------------
# scaler
# ------------------------------------------------------------------------------
# add user
if ! id "scaler" > /dev/null; then
    adduser scaler --system --group --disabled-password --shell /usr/bin/bash \
        --home /home/scaler
fi

# scaler app
if [[ -d "/home/scaler/app" ]]; then
    mv /home/scaler/app /home/scaler/app-old-$(date +"%y%m%d%H%M%S")
fi

cp -arp files/home/scaler/app /home/scaler/
chown root:root /home/scaler/app -R

# deno cache
rm -rf /home/scaler/.cache/deno
mkdir -p /home/scaler/.cache

cp -arp files/home/scaler/.cache/deno /home/scaler/.cache/
chown scaler:scaler /home/scaler/.cache -R

# scaler systemd unit
cp files/etc/systemd/system/scaler.service /etc/systemd/system/

# ------------------------------------------------------------------------------
# nginx-jwt-auth
# ------------------------------------------------------------------------------
# lua script
cp files/usr/local/share/nginx-jwt-auth.lua /usr/local/share/

# scaler PEM
rm -f /var/www/asap/server/scaler.pem
ln -s /var/www/asap/server/*.pem /var/www/asap/server/scaler.pem

# config
cp files/etc/jitsi/meet/jaas/scaler-nginx.conf /etc/jitsi/meet/jaas/

# restart nginx
systemctl restart nginx

# ------------------------------------------------------------------------------
# scale-up
# ------------------------------------------------------------------------------
# ASAP key. This is only a sample. It should be updated.
chown scaler:scaler /home/scaler/app/asap.key

# systemd unit
cp files/etc/systemd/system/scale-up.service /etc/systemd/system/

# ------------------------------------------------------------------------------
# services
# ------------------------------------------------------------------------------
systemctl daemon-reload
systemctl enable scaler.service
systemctl enable scale-up.service

# ------------------------------------------------------------------------------
# completed
# ------------------------------------------------------------------------------
COMPLETED=true
