# vsg-scaler

SIP-Jibri (aka video-sip-gateway) scaler.

Tested with `Jitsi` installed in Debian 11 Bullseye server.

## Release

Update the offline files before releasing a new version.

```bash
bash release.sh

git status
git add -A
git commit -m 'chore: update offline files'
git push
```

Create a new release in
[Releases](https://github.com/nordeck/vsg-scaler/releases) page.

## Installation

Assumed that you have already a working standalone `Jitsi` setup with
`jitsi-component-selector`. Apply the following steps on this server as `root`:

### Download

Check the available version
[here](https://github.com/nordeck/vsg-scaler/releases).

```bash
VERSION="v20240513"

wget https://github.com/nordeck/vsg-scaler/archive/refs/tags/$VERSION.tar.gz
tar zxf $VERSION.tar.gz

cd vsg-scaler-$(echo $VERSION | tr -d v)
```

### Install

```bash
bash install.sh
```

### Configuration

Set `LCM_URL`, `LCM_USERNAME` and `LCM_TOKEN` in `/home/scaler/app/config.ts`
according to the environment. These values are related with the lifecycle
management system.

Customize `addHost` and `deleteHost` methods in `/home/scaler/app/lifecycle.ts`
according to your API if needed. For now, the request data is empty.

Copy `sidecar` ASAP key as `/home/scaler/app/asap.key`. The file provided by
installer is only a sample. It will not work since it is not valid for your
deployment.

### Start services

```bash
systemctl start scaler.service
systemctl start scale-up.service
```
