# SCALER INSTALLATION

This guide is for a single shard Jitsi. Tested on `Debian 11 Bullseye` servers.

## Scaler service

This service should run on `Jitsi/Jicofo` server.

### Install Deno

```bash
wget -T 30 -O /tmp/deno.zip \
  https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip
unzip /tmp/deno.zip -d /tmp
mv /tmp/deno /usr/local/bin/

deno --version
```

### scaler user

Add `scaler` user:

```bash
adduser scaler --system --group --disabled-password --shell /usr/bin/bash \
  --home /home/scaler
```

### scaler app

```bash
mkdir -p /home/scaler/app
cp config.ts lifecycle.ts scaler.ts /home/scaler/app/
```

- Set `LCM_URL`, `LCM_USERNAME` and `LCM_TOKEN` in `/home/scaler/app/config.ts`
  according to the environment. These values are related with the lifecycle
  management system.

- Customize `addHost` and `deleteHost` methods in
  `/home/scaler/app/lifecycle.ts` according to your API if needed. For now, the
  request data is empty.

### Deno cache

If the Jitsi instance will run on an offline system, create Deno's cache on a
machine which can access Internet and copy the cache to the Jitsi instance.

On an online machine:

```bash
rm -rf ~/.cache/deno

cd scaler
deno cache scaler.ts

cd ~/.cache
tar czf /tmp/deno-cache.tar.gz deno

scp /tmp/deno-cache.tar.gz JITSI_INSTANCE_IP:/tmp/
```

On the Jitsi instance:

```bash
cd /tmp
tar zxf deno-cache.tar.gz

mkdir -p /home/scaler/.cache
mv deno /home/scaler/.cache/
chown scaler: /home/scaler/.cache/ -R
```

### scaler systemd unit

```bash
cp scaler.service /etc/systemd/system/

systemctl daemon-reload
systemctl enable scaler.service
systemctl start scaler.service
```

### Nginx config for scaler

#### nginx-jwt-auth

```bash
apt-get install libnginx-mod-http-lua
apt-get install lua-cjson lua-basexx lua-luaossl

wget -O /usr/local/share/nginx-jwt-auth.lua \
  https://raw.githubusercontent.com/nordeck/nginx-jwt-auth/main/nginx-jwt-auth.lua
```

#### scaler.pem

There should be only one PEM file in `/var/www/asap/server/` which is the public
key of `jitsi-component-sidecar`. `scaler` will use the same key for tokens.

```bash
rm -f /var/www/asap/server/scaler.pem
ln -s /var/www/asap/server/*.pem /var/www/asap/server/scaler.pem

cat /var/www/asap/server/scaler.pem
```

#### Location config

```bash
cp scaler-nginx.conf /etc/jitsi/meet/jaas/
systemctl restart nginx.service
```

## scale-up service

This service should run on `Jitsi/Jicofo` server.

### scaler user

Already added while installing the `scaler` service.

```bash
id scaler
```

### scale-up app

```bash
mkdir -p /home/scaler/app
cp scale-up /home/scaler/app/
cp asap.key /home/scaler/app/
chown scaler: /home/scaler/app/asap.key
```

### scale-up systemd unit

```bash
cp scale-up.service /etc/systemd/system/

systemctl daemon-reload
systemctl enable scale-up.service
systemctl start scale-up.service
```

## scale-down service

This service should run on each `video-sip-gateway` instance.

### jitsi-sidecar user

This service will be run by `jitsi-sidecar`. This user should be already added
to the system while installing `video-sip-gateway`.

```bash
id jitsi-sidecar
```

### scale-down app

```bash
cp scale-down /usr/local/bin/
```

Update `SCALER_URL` inside `/usr/local/bin/scale-down` according to your domain.

```bash
DOMAIN=$(egrep "^WS_SERVER_URL" /etc/jitsi/sidecar/env | \
  tr -d "'" | cut -d/ -f3)
echo $DOMAIN

sed -i "s~^SCALER_URL=.*~SCALER_URL=\"https://$DOMAIN/scaler\"~" \
  /usr/local/bin/scale-down
```

### scale-down systemd unit

```bash
cp scale-down.service /etc/systemd/system/

systemctl daemon-reload
systemctl enable scale-down.service
systemctl start scale-down.service
```
