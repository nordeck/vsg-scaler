// -----------------------------------------------------------------------------
// scaler.ts
//
// This service gets "remove me" and "add instance" requests from "scale-down"
// and "scale-up" services and transfers them to the lifecycle management API if
// all conditions are OK.
//
// Usage:
//     deno run --allow-net scaler.ts
//
// Testing:
//     curl http://127.0.0.1:9000/scaler/min
//     curl http://127.0.0.1:9000/scaler/max
//     curl http://127.0.0.1:9000/scaler/bulk-max
// -----------------------------------------------------------------------------
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { STATUS_CODE } from "https://deno.land/std@0.224.0/http/status.ts";
import { DEBUG, HOSTNAME, JICOFO, PORT, PRE } from "./config.ts";
import { addHost, removeHost } from "./lifecycle.ts";

// The minimum number of available instances. Scaler doesn't accept `remove me`
// request if the number of available instances is less than this value.
export let MIN_REQUIRED = 2;

// The maximum number of total instances. Scaler doesn't accept `add instance`
// request if the number of total instances is more than this value.
export let MAX_ALLOWED = 80;

// The maximum number of requests in one bulk (such as addHost requests at a
// time). Scaler doesn't send more requests than this limit to not overload the
// lifecycle manager.
export let BULK_MAX = 5;

// -----------------------------------------------------------------------------
// HTTP response for NotFound
// -----------------------------------------------------------------------------
function notFound(): Response {
  return new Response(
    null,
    { status: STATUS_CODE.NotFound },
  );
}

// -----------------------------------------------------------------------------
// HTTP response for MethodNotAllowed
// -----------------------------------------------------------------------------
function methodNotAllowed(): Response {
  return new Response(
    null,
    { status: STATUS_CODE.MethodNotAllowed },
  );
}

// -----------------------------------------------------------------------------
// HTTP response for BadRequest
// -----------------------------------------------------------------------------
function badRequest(): Response {
  return new Response(
    null,
    { status: STATUS_CODE.BadRequest },
  );
}

// -----------------------------------------------------------------------------
// HTTP response for Conflict
// -----------------------------------------------------------------------------
function conflict(): Response {
  return new Response(
    null,
    { status: STATUS_CODE.Conflict },
  );
}

// -----------------------------------------------------------------------------
// HTTP response for Succeeded (NoContent, OK without a body)
// -----------------------------------------------------------------------------
function succeeded(): Response {
  return new Response(
    null,
    { status: STATUS_CODE.NoContent },
  );
}

// -----------------------------------------------------------------------------
// HTTP response for OK (OK with a body)
// -----------------------------------------------------------------------------
function ok(body: string): Response {
  return new Response(
    body,
    { status: STATUS_CODE.OK },
  );
}

// -----------------------------------------------------------------------------
// totalInstance, get the number of total instances from Jicofo
// -----------------------------------------------------------------------------
async function totalInstance(): Promise<number | undefined> {
  try {
    const res = await fetch(JICOFO, {
      headers: {
        "Accept": "application/json",
      },
    });

    const stats = await res.json();

    return Number(stats.sip_jibri_detector.count);
  } catch {
    return undefined;
  }
}

// -----------------------------------------------------------------------------
// availableInstance, get the number of available instances from Jicofo
// -----------------------------------------------------------------------------
async function availableInstance(): Promise<number | undefined> {
  try {
    const res = await fetch(JICOFO, {
      headers: {
        "Accept": "application/json",
      },
    });

    const stats = await res.json();

    return Number(stats.sip_jibri_detector.available);
  } catch {
    return undefined;
  }
}

// -----------------------------------------------------------------------------
// remove
// -----------------------------------------------------------------------------
function remove(host: string): Response {
  // dont wait for the result of this async function
  removeHost(host);

  return ok("accepted");
}

// -----------------------------------------------------------------------------
// removeHandler
// -----------------------------------------------------------------------------
async function removeHandler(req: Request): Promise<Response> {
  try {
    const pl = await req.json();
    const host = pl.host;
    const reason = pl.reason;

    if (DEBUG) {
      console.log(`remove request is received from ${host} for ${reason}`);
    }

    // if the instance is unhealty or expired, remove it immediately.
    if (reason != "idle") return remove(host);

    // if the number of available instances is less than MIN_REQUIRED then don't
    // accept `remove me` requests. this is only valid for idle instances.
    const currentAvailable = await availableInstance();
    if (currentAvailable !== undefined && currentAvailable <= MIN_REQUIRED) {
      if (DEBUG) console.log(`minimum limit, rejected`);
      return ok("keep");
    }

    return remove(host);
  } catch {
    if (DEBUG) console.log(`bad request`);
    return badRequest();
  }
}

// -----------------------------------------------------------------------------
// add
// -----------------------------------------------------------------------------
function add(instanceType: string): Response {
  // dont wait for the result of this async function
  addHost(instanceType);

  return succeeded();
}

// -----------------------------------------------------------------------------
// addHandler
// -----------------------------------------------------------------------------
async function addHandler(req: Request): Promise<Response> {
  try {
    const pl = await req.json();
    const instanceType = pl.instance_type;

    if (DEBUG) console.log(`add request is received for ${instanceType}`);

    // if there is no response from Jicofo, don't accept `add instance` requests
    const currentTotal = await totalInstance();
    if (currentTotal === undefined) {
      if (DEBUG) console.log(`no jicofo, rejected`);
      return conflict();
    }

    // if the number of total instances is more than MAX_ALLOWED then don't
    // accept `add instance` requests
    if (currentTotal >= MAX_ALLOWED) {
      if (DEBUG) console.log(`no space for a new instance, rejected`);
      return conflict();
    }

    return add(instanceType);
  } catch {
    if (DEBUG) console.log(`bad request`);
    return badRequest();
  }
}

// -----------------------------------------------------------------------------
// updateMin
// -----------------------------------------------------------------------------
async function updateMin(req: Request): Promise<Response> {
  try {
    const pl = await req.json();
    const min = parseInt(pl);

    if (DEBUG) console.log(`update request is received to set min as ${min}`);

    if (!min) throw new Error();
    if (min < 1 || min > 100) throw new Error();

    MIN_REQUIRED = min;
    if (DEBUG) console.log(`min is updated`);

    return succeeded();
  } catch {
    if (DEBUG) console.log(`bad request`);
    return badRequest();
  }
}

// -----------------------------------------------------------------------------
// updateMax
// -----------------------------------------------------------------------------
async function updateMax(req: Request): Promise<Response> {
  try {
    const pl = await req.json();
    const max = parseInt(pl);

    if (DEBUG) console.log(`update request is received to set max as ${max}`);

    if (!max) throw new Error();
    if (max < 1 || max > 1000) throw new Error();

    MAX_ALLOWED = max;
    if (DEBUG) console.log(`max is updated`);

    return succeeded();
  } catch {
    if (DEBUG) console.log(`bad request`);
    return badRequest();
  }
}

// -----------------------------------------------------------------------------
// updateBulkMax
// -----------------------------------------------------------------------------
async function updateBulkMax(req: Request): Promise<Response> {
  try {
    const pl = await req.json();
    const max = parseInt(pl);

    if (DEBUG) {
      console.log(`update request is received to set bulk-max as ${max}`);
    }

    if (!max) throw new Error();
    if (max < 1 || max > 100) throw new Error();

    BULK_MAX = max;
    if (DEBUG) console.log(`bulk-max is updated`);

    return succeeded();
  } catch {
    if (DEBUG) console.log(`bad request`);
    return badRequest();
  }
}

// -----------------------------------------------------------------------------
// getMin
// -----------------------------------------------------------------------------
function getMin(): Response {
  return ok(JSON.stringify(MIN_REQUIRED));
}

// -----------------------------------------------------------------------------
// getMax
// -----------------------------------------------------------------------------
function getMax(): Response {
  return ok(JSON.stringify(MAX_ALLOWED));
}

// -----------------------------------------------------------------------------
// getBulkMax
// -----------------------------------------------------------------------------
function getBulkMax(): Response {
  return ok(JSON.stringify(BULK_MAX));
}

// -----------------------------------------------------------------------------
// handler
// -----------------------------------------------------------------------------
async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  if (req.method === "POST") {
    if (path === `${PRE}/instance`) {
      return await addHandler(req);
    } else if (path === `${PRE}/min`) {
      return await updateMin(req);
    } else if (path === `${PRE}/max`) {
      return await updateMax(req);
    } else if (path === `${PRE}/bulk-max`) {
      return await updateBulkMax(req);
    } else {
      return notFound();
    }
  } else if (req.method === "DELETE") {
    if (path === `${PRE}/instance`) {
      return await removeHandler(req);
    } else {
      return notFound();
    }
  } else if (req.method === "GET") {
    if (path === `${PRE}/min`) {
      return getMin();
    } else if (path === `${PRE}/max`) {
      return getMax();
    } else if (path === `${PRE}/bulk-max`) {
      return getBulkMax();
    } else {
      return notFound();
    }
  } else if (req.method === "OPTIONS") {
    return succeeded();
  } else {
    return methodNotAllowed();
  }
}

// -----------------------------------------------------------------------------
// main
// -----------------------------------------------------------------------------
function main() {
  serve(handler, {
    hostname: HOSTNAME,
    port: PORT,
  });
}

// -----------------------------------------------------------------------------
main();
