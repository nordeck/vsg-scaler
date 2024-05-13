import { encodeBase64 } from "https://deno.land/std@0.211.0/encoding/base64.ts";
import { DEBUG, LCM_NODES, LCM_TOKEN, LCM_URL, LCM_USERNAME } from "./config.ts";
export async function removeHost(host) {
  try {
    const endpoint = `${LCM_URL}/api/hosts/${host}`;
    const data = {
      "host": {}
    };
    const credential = encodeBase64(`${LCM_USERNAME}:${LCM_TOKEN}`);
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${credential}`
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error();
    if (DEBUG) console.log("remove request succeeded for %s", host);
  } catch  {
    if (DEBUG) console.log("remove request failed for %s", host);
  }
}
export async function addHost(instanceType) {
  try {
    const numberOfNodes = LCM_NODES.length;
    const selectedNode = Math.floor(Math.random() * numberOfNodes);
    const endpoint = `${LCM_URL}/api/hosts`;
    const data = {
      "node": LCM_NODES[selectedNode],
      "host": {}
    };
    const credential = encodeBase64(`${LCM_USERNAME}:${LCM_TOKEN}`);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Basic ${credential}`
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error();
    if (DEBUG) console.log("add request succeeded for %s", instanceType);
  } catch  {
    if (DEBUG) console.log("add request failed for %s", instanceType);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9lbXJhaC9ub3JkZWNrL3JlcG8vdnNnLXNjYWxlci9maWxlcy9ob21lL3NjYWxlci9hcHAvbGlmZWN5Y2xlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBsaWZlY3ljbGUudHNcbi8vXG4vLyBNZXRob2RzIGZvciB0aGUgbGlmZWN5Y2xlIG1hbmFnZW1lbnQgQVBJXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgZW5jb2RlQmFzZTY0IH0gZnJvbSBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIxMS4wL2VuY29kaW5nL2Jhc2U2NC50c1wiO1xuaW1wb3J0IHtcbiAgREVCVUcsXG4gIExDTV9OT0RFUyxcbiAgTENNX1RPS0VOLFxuICBMQ01fVVJMLFxuICBMQ01fVVNFUk5BTUUsXG59IGZyb20gXCIuL2NvbmZpZy50c1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVtb3ZlSG9zdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVIb3N0KGhvc3Q6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7TENNX1VSTH0vYXBpL2hvc3RzLyR7aG9zdH1gO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBcImhvc3RcIjoge30sXG4gICAgfTtcbiAgICBjb25zdCBjcmVkZW50aWFsID0gZW5jb2RlQmFzZTY0KGAke0xDTV9VU0VSTkFNRX06JHtMQ01fVE9LRU59YCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmFzaWMgJHtjcmVkZW50aWFsfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcInJlbW92ZSByZXF1ZXN0IHN1Y2NlZWRlZCBmb3IgJXNcIiwgaG9zdCk7XG4gIH0gY2F0Y2gge1xuICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJyZW1vdmUgcmVxdWVzdCBmYWlsZWQgZm9yICVzXCIsIGhvc3QpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhZGRIb3N0XG4vL1xuLy8gd2hhdCBpcyB0aGUgY29ycmVjdCBwbGFjZSB0byBwdXQgdGhlIHNlbGVjdGVkIG5vZGU/XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhvc3QoaW5zdGFuY2VUeXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBudW1iZXJPZk5vZGVzID0gTENNX05PREVTLmxlbmd0aDtcbiAgICBjb25zdCBzZWxlY3RlZE5vZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1iZXJPZk5vZGVzKTtcbiAgICBjb25zdCBlbmRwb2ludCA9IGAke0xDTV9VUkx9L2FwaS9ob3N0c2A7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIFwibm9kZVwiOiBMQ01fTk9ERVNbc2VsZWN0ZWROb2RlXSxcbiAgICAgIFwiaG9zdFwiOiB7fSxcbiAgICB9O1xuICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBlbmNvZGVCYXNlNjQoYCR7TENNX1VTRVJOQU1FfToke0xDTV9UT0tFTn1gKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmFzaWMgJHtjcmVkZW50aWFsfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImFkZCByZXF1ZXN0IHN1Y2NlZWRlZCBmb3IgJXNcIiwgaW5zdGFuY2VUeXBlKTtcbiAgfSBjYXRjaCB7XG4gICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcImFkZCByZXF1ZXN0IGZhaWxlZCBmb3IgJXNcIiwgaW5zdGFuY2VUeXBlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLFNBQVMsWUFBWSxRQUFRLG1EQUFtRDtBQUNoRixTQUNFLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULE9BQU8sRUFDUCxZQUFZLFFBQ1AsY0FBYztBQUtyQixPQUFPLGVBQWUsV0FBVyxJQUFZO0VBQzNDLElBQUk7SUFDRixNQUFNLFdBQVcsQ0FBQyxFQUFFLFFBQVEsV0FBVyxFQUFFLEtBQUssQ0FBQztJQUMvQyxNQUFNLE9BQU87TUFDWCxRQUFRLENBQUM7SUFDWDtJQUNBLE1BQU0sYUFBYSxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDOUQsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVO01BQ2hDLFFBQVE7TUFDUixTQUFTO1FBQ1AsVUFBVTtRQUNWLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7TUFDeEM7TUFDQSxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSTtJQUV2QixJQUFJLE9BQU8sUUFBUSxHQUFHLENBQUMsbUNBQW1DO0VBQzVELEVBQUUsT0FBTTtJQUNOLElBQUksT0FBTyxRQUFRLEdBQUcsQ0FBQyxnQ0FBZ0M7RUFDekQ7QUFDRjtBQU9BLE9BQU8sZUFBZSxRQUFRLFlBQW9CO0VBQ2hELElBQUk7SUFDRixNQUFNLGdCQUFnQixVQUFVLE1BQU07SUFDdEMsTUFBTSxlQUFlLEtBQUssS0FBSyxDQUFDLEtBQUssTUFBTSxLQUFLO0lBQ2hELE1BQU0sV0FBVyxDQUFDLEVBQUUsUUFBUSxVQUFVLENBQUM7SUFDdkMsTUFBTSxPQUFPO01BQ1gsUUFBUSxTQUFTLENBQUMsYUFBYTtNQUMvQixRQUFRLENBQUM7SUFDWDtJQUNBLE1BQU0sYUFBYSxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDOUQsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVO01BQ2hDLFFBQVE7TUFDUixTQUFTO1FBQ1AsVUFBVTtRQUNWLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7TUFDeEM7TUFDQSxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSTtJQUV2QixJQUFJLE9BQU8sUUFBUSxHQUFHLENBQUMsZ0NBQWdDO0VBQ3pELEVBQUUsT0FBTTtJQUNOLElBQUksT0FBTyxRQUFRLEdBQUcsQ0FBQyw2QkFBNkI7RUFDdEQ7QUFDRiJ9