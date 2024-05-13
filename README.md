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
