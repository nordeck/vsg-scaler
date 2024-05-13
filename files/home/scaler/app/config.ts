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
export const LCM_URL = "http://172.17.17.101";
export const LCM_USERNAME = "username";
export const LCM_TOKEN = "token-content";
export const LCM_NODES = [
  "node1",
  "node2",
  "node3",
  "node4",
];
