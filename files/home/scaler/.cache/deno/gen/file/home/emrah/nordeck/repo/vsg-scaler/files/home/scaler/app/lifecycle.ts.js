import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { DEBUG, LCM_NODES, LCM_TOKEN, LCM_USERNAME } from "./config.ts";
export async function removeHost(host) {
  try {
    const numberOfNodes = LCM_NODES.length;
    const randomIndex = Math.floor(Math.random() * numberOfNodes);
    const node = LCM_NODES[randomIndex];
    const endpoint = `${node}/api/hosts/${host}`;
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
    const randomIndex = Math.floor(Math.random() * numberOfNodes);
    const node = LCM_NODES[randomIndex];
    const endpoint = `${node}/api/hosts`;
    const data = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9lbXJhaC9ub3JkZWNrL3JlcG8vdnNnLXNjYWxlci9maWxlcy9ob21lL3NjYWxlci9hcHAvbGlmZWN5Y2xlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBsaWZlY3ljbGUudHNcbi8vXG4vLyBNZXRob2RzIGZvciB0aGUgbGlmZWN5Y2xlIG1hbmFnZW1lbnQgQVBJXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IHsgZW5jb2RlQmFzZTY0IH0gZnJvbSBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIyNC4wL2VuY29kaW5nL2Jhc2U2NC50c1wiO1xuaW1wb3J0IHsgREVCVUcsIExDTV9OT0RFUywgTENNX1RPS0VOLCBMQ01fVVNFUk5BTUUgfSBmcm9tIFwiLi9jb25maWcudHNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHJlbW92ZUhvc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlSG9zdChob3N0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBudW1iZXJPZk5vZGVzID0gTENNX05PREVTLmxlbmd0aDtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlck9mTm9kZXMpO1xuICAgIGNvbnN0IG5vZGUgPSBMQ01fTk9ERVNbcmFuZG9tSW5kZXhdO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7bm9kZX0vYXBpL2hvc3RzLyR7aG9zdH1gO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBcImhvc3RcIjoge30sXG4gICAgfTtcbiAgICBjb25zdCBjcmVkZW50aWFsID0gZW5jb2RlQmFzZTY0KGAke0xDTV9VU0VSTkFNRX06JHtMQ01fVE9LRU59YCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmFzaWMgJHtjcmVkZW50aWFsfWAsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKERFQlVHKSBjb25zb2xlLmxvZyhcInJlbW92ZSByZXF1ZXN0IHN1Y2NlZWRlZCBmb3IgJXNcIiwgaG9zdCk7XG4gIH0gY2F0Y2gge1xuICAgIGlmIChERUJVRykgY29uc29sZS5sb2coXCJyZW1vdmUgcmVxdWVzdCBmYWlsZWQgZm9yICVzXCIsIGhvc3QpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhZGRIb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEhvc3QoaW5zdGFuY2VUeXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBudW1iZXJPZk5vZGVzID0gTENNX05PREVTLmxlbmd0aDtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bWJlck9mTm9kZXMpO1xuICAgIGNvbnN0IG5vZGUgPSBMQ01fTk9ERVNbcmFuZG9tSW5kZXhdO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7bm9kZX0vYXBpL2hvc3RzYDtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgXCJob3N0XCI6IHt9LFxuICAgIH07XG4gICAgY29uc3QgY3JlZGVudGlhbCA9IGVuY29kZUJhc2U2NChgJHtMQ01fVVNFUk5BTUV9OiR7TENNX1RPS0VOfWApO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCYXNpYyAke2NyZWRlbnRpYWx9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KTtcbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiYWRkIHJlcXVlc3Qgc3VjY2VlZGVkIGZvciAlc1wiLCBpbnN0YW5jZVR5cGUpO1xuICB9IGNhdGNoIHtcbiAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKFwiYWRkIHJlcXVlc3QgZmFpbGVkIGZvciAlc1wiLCBpbnN0YW5jZVR5cGUpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsU0FBUyxZQUFZLFFBQVEsbURBQW1EO0FBQ2hGLFNBQVMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxRQUFRLGNBQWM7QUFLeEUsT0FBTyxlQUFlLFdBQVcsSUFBWTtFQUMzQyxJQUFJO0lBQ0YsTUFBTSxnQkFBZ0IsVUFBVSxNQUFNO0lBQ3RDLE1BQU0sY0FBYyxLQUFLLEtBQUssQ0FBQyxLQUFLLE1BQU0sS0FBSztJQUMvQyxNQUFNLE9BQU8sU0FBUyxDQUFDLFlBQVk7SUFDbkMsTUFBTSxXQUFXLENBQUMsRUFBRSxLQUFLLFdBQVcsRUFBRSxLQUFLLENBQUM7SUFDNUMsTUFBTSxPQUFPO01BQ1gsUUFBUSxDQUFDO0lBQ1g7SUFDQSxNQUFNLGFBQWEsYUFBYSxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsVUFBVSxDQUFDO0lBQzlELE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVTtNQUNoQyxRQUFRO01BQ1IsU0FBUztRQUNQLFVBQVU7UUFDVixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO01BQ3hDO01BQ0EsTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUN2QjtJQUNBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLElBQUk7SUFFdkIsSUFBSSxPQUFPLFFBQVEsR0FBRyxDQUFDLG1DQUFtQztFQUM1RCxFQUFFLE9BQU07SUFDTixJQUFJLE9BQU8sUUFBUSxHQUFHLENBQUMsZ0NBQWdDO0VBQ3pEO0FBQ0Y7QUFLQSxPQUFPLGVBQWUsUUFBUSxZQUFvQjtFQUNoRCxJQUFJO0lBQ0YsTUFBTSxnQkFBZ0IsVUFBVSxNQUFNO0lBQ3RDLE1BQU0sY0FBYyxLQUFLLEtBQUssQ0FBQyxLQUFLLE1BQU0sS0FBSztJQUMvQyxNQUFNLE9BQU8sU0FBUyxDQUFDLFlBQVk7SUFDbkMsTUFBTSxXQUFXLENBQUMsRUFBRSxLQUFLLFVBQVUsQ0FBQztJQUNwQyxNQUFNLE9BQU87TUFDWCxRQUFRLENBQUM7SUFDWDtJQUNBLE1BQU0sYUFBYSxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUM7SUFDOUQsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVO01BQ2hDLFFBQVE7TUFDUixTQUFTO1FBQ1AsVUFBVTtRQUNWLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7TUFDeEM7TUFDQSxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSTtJQUV2QixJQUFJLE9BQU8sUUFBUSxHQUFHLENBQUMsZ0NBQWdDO0VBQ3pELEVBQUUsT0FBTTtJQUNOLElBQUksT0FBTyxRQUFRLEdBQUcsQ0FBQyw2QkFBNkI7RUFDdEQ7QUFDRiJ9