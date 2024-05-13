# APIs

## The lifecycle management

https://apidocs.theforeman.org/foreman/latest/apidoc/v2/hosts.html

### DELETE /api/hosts/:id

```bash
curl -X DELETE https://lifecycle.nordeck.corp/api/hosts/$IP \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json"
```

### POST /api/hosts

```bash
REQUEST_DATA=$(cat <<EOF
{
  "host": {
  }
}
EOF
)

curl -X POST https://lifecycle.nordeck.corp/api/hosts \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  -d @- <<< $REQUEST_DATA
```

## Scaler

### GET /scaler/min

#### Return codes

- 200 (ok)

#### Return data

An integer value

#### Example

```bash
curl -X GET https://jitsi.nordeck.corp/scaler/min \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json"
2
```

### GET /scaler/max

#### Return codes

- 200 (ok)

#### Return data

An integer value

#### Example

```bash
curl -X GET https://jitsi.nordeck.corp/scaler/max \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json"
80
```

### GET /scaler/bulk-max

#### Return codes

- 200 (ok)

#### Return data

An integer value

#### Example

```bash
curl -X GET https://jitsi.nordeck.corp/scaler/bulk-max \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json"
80
```

### POST /scaler/min

#### Request data

An integer value

#### Return codes

- 204 (ok without a body)
- 400 (bad request)

#### Return data

No body, empty content.

#### Example

```bash
curl -X POST https://jitsi.nordeck.corp/scaler/min \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  -d 4
```

### POST /scaler/max

#### Request data

An integer value

#### Return codes

- 204 (ok without a body)
- 400 (bad request)

#### Return data

No body, empty content.

#### Example

```bash
curl -X POST https://jitsi.nordeck.corp/scaler/max \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  -d 100
```

### POST /scaler/bulk-max

#### Request data

An integer value

#### Return codes

- 204 (ok without a body)
- 400 (bad request)

#### Return data

No body, empty content.

#### Example

```bash
curl -X POST https://jitsi.nordeck.corp/scaler/bulk-max \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  -d 10
```

### POST /scaler/instance

#### Request data

```json
{
  "instance_type": "video-sip-gateway"
}
```

"video-sip-gateway" is the only possible `instance_type` option for now.

#### Return codes

- 204 (ok without a body)
- 400 (bad request)
- 409 (conflict)

#### Return data

No body, empty content.

#### Example

```bash
REQUEST_DATA=$(cat <<EOF
{
  "instance_type": "video-sip-gateway"
}
EOF
)

curl -X POST https://jitsi.nordeck.corp/scaler/instance \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  --data @- <<< $REQUEST_DATA
```

### DELETE /scaler/instance

#### Request data

```json
{
  "host": "$HOST_NAME",
  "reason": "$REASON"
}
```

Possible reasons:

- expired
- unhealty
- idle

#### Return codes

- 200 (ok)
- 400 (bad request)
- 409 (conflict)

#### Return data (if 200)

- accepted
- keep

#### Example

```bash
REQUEST_DATA=$(cat <<EOF
{
  "host": "$HOST_NAME",
  "reason": "$REASON"
}
EOF
)

curl -X DELETE https://jitsi.nordeck.corp/scaler/instance \
  -H "Authorization: Bearer eyJhbG..." \
  -H "Content-Type: application/json" \
  --data @- <<< $REQUEST_DATA
accepted
```
