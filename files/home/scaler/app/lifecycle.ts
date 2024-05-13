// -----------------------------------------------------------------------------
// lifecycle.ts
//
// Methods for the lifecycle management API
// -----------------------------------------------------------------------------
import { encodeBase64 } from "https://deno.land/std@0.211.0/encoding/base64.ts";
import {
  DEBUG,
  LCM_NODES,
  LCM_TOKEN,
  LCM_URL,
  LCM_USERNAME,
} from "./config.ts";

// -----------------------------------------------------------------------------
// removeHost
// -----------------------------------------------------------------------------
export async function removeHost(host: string): Promise<void> {
  try {
    const endpoint = `${LCM_URL}/api/hosts/${host}`;
    const data = {
      "host": {},
    };
    const credential = encodeBase64(`${LCM_USERNAME}:${LCM_TOKEN}`);
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${credential}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();

    if (DEBUG) console.log("remove request succeeded for %s", host);
  } catch {
    if (DEBUG) console.log("remove request failed for %s", host);
  }
}

// -----------------------------------------------------------------------------
// addHost
//
// what is the correct place to put the selected node?
// -----------------------------------------------------------------------------
export async function addHost(instanceType: string): Promise<void> {
  try {
    const numberOfNodes = LCM_NODES.length;
    const selectedNode = Math.floor(Math.random() * numberOfNodes);
    const endpoint = `${LCM_URL}/api/hosts`;
    const data = {
      "node": LCM_NODES[selectedNode],
      "host": {},
    };
    const credential = encodeBase64(`${LCM_USERNAME}:${LCM_TOKEN}`);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${credential}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();

    if (DEBUG) console.log("add request succeeded for %s", instanceType);
  } catch {
    if (DEBUG) console.log("add request failed for %s", instanceType);
  }
}
