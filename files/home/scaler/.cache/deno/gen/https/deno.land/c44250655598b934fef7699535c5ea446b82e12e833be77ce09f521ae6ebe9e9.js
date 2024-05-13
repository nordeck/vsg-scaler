export function delay(ms, options = {}) {
  const { signal, persistent } = options;
  if (signal?.aborted) return Promise.reject(signal.reason);
  return new Promise((resolve, reject)=>{
    const abort = ()=>{
      clearTimeout(i);
      reject(signal?.reason);
    };
    const done = ()=>{
      signal?.removeEventListener("abort", abort);
      resolve();
    };
    const i = setTimeout(done, ms);
    signal?.addEventListener("abort", abort, {
      once: true
    });
    if (persistent === false) {
      try {
        Deno.unrefTimer(i);
      } catch (error) {
        if (!(error instanceof ReferenceError)) {
          throw error;
        }
        console.error("`persistent` option is only available in Deno");
      }
    }
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIxMS4wL2FzeW5jL2RlbGF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjQgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG4vLyBUaGlzIG1vZHVsZSBpcyBicm93c2VyIGNvbXBhdGlibGUuXG5cbi8qKiBPcHRpb25zIGZvciB7QGxpbmtjb2RlIGRlbGF5fS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVsYXlPcHRpb25zIHtcbiAgLyoqIFNpZ25hbCB1c2VkIHRvIGFib3J0IHRoZSBkZWxheS4gKi9cbiAgc2lnbmFsPzogQWJvcnRTaWduYWw7XG4gIC8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcHJvY2VzcyBzaG91bGQgY29udGludWUgdG8gcnVuIGFzIGxvbmcgYXMgdGhlIHRpbWVyIGV4aXN0cy5cbiAgICpcbiAgICogQGRlZmF1bHQge3RydWV9XG4gICAqL1xuICBwZXJzaXN0ZW50PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEge0BsaW5rY29kZSBQcm9taXNlfSBhZnRlciBhIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBkZWxheSB9IGZyb20gXCJodHRwczovL2Rlbm8ubGFuZC9zdGRAJFNURF9WRVJTSU9OL2FzeW5jL2RlbGF5LnRzXCI7XG4gKlxuICogLy8gLi4uXG4gKiBjb25zdCBkZWxheWVkUHJvbWlzZSA9IGRlbGF5KDEwMCk7XG4gKiBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxheWVkUHJvbWlzZTtcbiAqIC8vIC4uLlxuICogYGBgXG4gKlxuICogVG8gYWxsb3cgdGhlIHByb2Nlc3MgdG8gY29udGludWUgdG8gcnVuIGFzIGxvbmcgYXMgdGhlIHRpbWVyIGV4aXN0cy4gUmVxdWlyZXNcbiAqIGAtLXVuc3RhYmxlYCBmbGFnLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBkZWxheSB9IGZyb20gXCJodHRwczovL2Rlbm8ubGFuZC9zdGRAJFNURF9WRVJTSU9OL2FzeW5jL2RlbGF5LnRzXCI7XG4gKlxuICogLy8gLi4uXG4gKiBhd2FpdCBkZWxheSgxMDAsIHsgcGVyc2lzdGVudDogZmFsc2UgfSk7XG4gKiAvLyAuLi5cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlciwgb3B0aW9uczogRGVsYXlPcHRpb25zID0ge30pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBzaWduYWwsIHBlcnNpc3RlbnQgfSA9IG9wdGlvbnM7XG4gIGlmIChzaWduYWw/LmFib3J0ZWQpIHJldHVybiBQcm9taXNlLnJlamVjdChzaWduYWwucmVhc29uKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBhYm9ydCA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChpKTtcbiAgICAgIHJlamVjdChzaWduYWw/LnJlYXNvbik7XG4gICAgfTtcbiAgICBjb25zdCBkb25lID0gKCkgPT4ge1xuICAgICAgc2lnbmFsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnQpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgY29uc3QgaSA9IHNldFRpbWVvdXQoZG9uZSwgbXMpO1xuICAgIHNpZ25hbD8uYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKHBlcnNpc3RlbnQgPT09IGZhbHNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlIEZvciBicm93c2VyIGNvbXBhdGliaWxpdHlcbiAgICAgICAgRGVuby51bnJlZlRpbWVyKGkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKFwiYHBlcnNpc3RlbnRgIG9wdGlvbiBpcyBvbmx5IGF2YWlsYWJsZSBpbiBEZW5vXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NBLE9BQU8sU0FBUyxNQUFNLEVBQVUsRUFBRSxVQUF3QixDQUFDLENBQUM7RUFDMUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRztFQUMvQixJQUFJLFFBQVEsU0FBUyxPQUFPLFFBQVEsTUFBTSxDQUFDLE9BQU8sTUFBTTtFQUN4RCxPQUFPLElBQUksUUFBUSxDQUFDLFNBQVM7SUFDM0IsTUFBTSxRQUFRO01BQ1osYUFBYTtNQUNiLE9BQU8sUUFBUTtJQUNqQjtJQUNBLE1BQU0sT0FBTztNQUNYLFFBQVEsb0JBQW9CLFNBQVM7TUFDckM7SUFDRjtJQUNBLE1BQU0sSUFBSSxXQUFXLE1BQU07SUFDM0IsUUFBUSxpQkFBaUIsU0FBUyxPQUFPO01BQUUsTUFBTTtJQUFLO0lBQ3RELElBQUksZUFBZSxPQUFPO01BQ3hCLElBQUk7UUFFRixLQUFLLFVBQVUsQ0FBQztNQUNsQixFQUFFLE9BQU8sT0FBTztRQUNkLElBQUksQ0FBQyxDQUFDLGlCQUFpQixjQUFjLEdBQUc7VUFDdEMsTUFBTTtRQUNSO1FBQ0EsUUFBUSxLQUFLLENBQUM7TUFDaEI7SUFDRjtFQUNGO0FBQ0YifQ==