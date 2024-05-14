// -----------------------------------------------------------------------------
// config,ts
//
// Config file for scaler.ts
// -----------------------------------------------------------------------------

// Scaler
export const HOSTNAME = "127.0.0.1";
export const PORT = 9000;
export const PRE = "/scaler";
export const DEBUG = true;

// Jicofo stats endpoint
export const JICOFO = "http://127.0.0.1:8888/stats";

// Lifecycle management
// Scaler selects a random node for each request but uses the same username and
// token for all.
export const LCM_USERNAME = "username";
export const LCM_TOKEN = "token-content";
export const LCM_NODES = [
  "http://127.0.0.1:9101",
  "http://127.0.0.1:9102",
  "http://127.0.0.1:9103",
  "http://127.0.0.1:9104",
];
