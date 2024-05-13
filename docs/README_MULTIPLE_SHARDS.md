# SCALER NOTES

## Multiple shards config

### Jitsi Meet Server

Assumed that all JMS are completely the same except their IP addresses. There
may be a second DNS A record for each JMS but Nginx should be configured for the
same domain.

### Jitsi Component Selector

Each JMS should contain `jitsi-component-selector` service but these services
run in `active-passive` mode. `jitsi-component-sidecar` services always connect
to the active `jitsi-component-selector` by using the following URLs:

- `https://jitsi-domain/jitsi-component-selector/`
- `wss://jitsi-domain/jitsi-component-selector/ws/`

### Scaler

The scaler service should run on each JMS. They work in `active-active` mode but
since `scale-down` services send requests to the same endpoint, the requests
will go to the same JMS because of Haproxy. Haproxy selects the backend
depending on the path.

- `https://jitsi-domain/scaler/remove`

### Jibri config for multiple shards

`jibri.api.xmpp.environments` in `/etc/jitsi/jibri/jibri/jibri.conf` should
contains all XMPP data.

```conf
    xmpp {
      environments = [
      {
        name = "nordeck-environment-1"
        xmpp-server-hosts = ["jitsi.nordeck.corp"]
        xmpp-domain = "jitsi.nordeck.corp"

        control-muc {
          domain = "internal.auth.jitsi.nordeck.corp"
          room-name = "SipBreweryDummy"
          nickname = "fa1fa27a-7fa6-4783-b15d-13c453a551c4"
        }

        sip-control-muc {
          domain = "internal.auth.jitsi.nordeck.corp"
          room-name = "SipBrewery"
          nickname = "fa1fa27a-7fa6-4783-b15d-13c453a551c4"
        }

        control-login {
          domain = "auth.jitsi.nordeck.corp"
          username = "jibri"
          password = "06382a720cbcda40db151f8f8b0390184274eabf"
        }

        call-login {
          domain = "sip.jitsi.nordeck.corp"
          username = "sip"
          password = "83a57e687f26719d8253207045b6b4329768c1c9"
        }

        strip-from-room-domain = "conference."
        usage-timeout = 0
        trust-all-xmpp-certs = true
      },
      {
        name = "nordeck-environment-2"
        xmpp-server-hosts = ["jitsi-2.nordeck.corp"]
        xmpp-domain = "jitsi.nordeck.corp"

        control-muc {
          domain = "internal.auth.jitsi.nordeck.corp"
          room-name = "SipBreweryDummy"
          nickname = "fa1fa27a-7fa6-4783-b15d-13c453a551c4"
        }

        sip-control-muc {
          domain = "internal.auth.jitsi.nordeck.corp"
          room-name = "SipBrewery"
          nickname = "fa1fa27a-7fa6-4783-b15d-13c453a551c4"
        }

        control-login {
          domain = "auth.jitsi.nordeck.corp"
          username = "jibri"
          password = "06382a720cbcda40db151f8f8b0390184274eabf"
        }

        call-login {
          domain = "sip.jitsi.nordeck.corp"
          username = "sip"
          password = "83a57e687f26719d8253207045b6b4329768c1c9"
        }

        strip-from-room-domain = "conference."
        usage-timeout = 0
        trust-all-xmpp-certs = true
      }
      ]
```
