export const STATUS_CODE = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInfo: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  IMUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  ContentTooLarge: 413,
  URITooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  Teapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HTTPVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
export const STATUS_TEXT = {
  [STATUS_CODE.Accepted]: "Accepted",
  [STATUS_CODE.AlreadyReported]: "Already Reported",
  [STATUS_CODE.BadGateway]: "Bad Gateway",
  [STATUS_CODE.BadRequest]: "Bad Request",
  [STATUS_CODE.Conflict]: "Conflict",
  [STATUS_CODE.Continue]: "Continue",
  [STATUS_CODE.Created]: "Created",
  [STATUS_CODE.EarlyHints]: "Early Hints",
  [STATUS_CODE.ExpectationFailed]: "Expectation Failed",
  [STATUS_CODE.FailedDependency]: "Failed Dependency",
  [STATUS_CODE.Forbidden]: "Forbidden",
  [STATUS_CODE.Found]: "Found",
  [STATUS_CODE.GatewayTimeout]: "Gateway Timeout",
  [STATUS_CODE.Gone]: "Gone",
  [STATUS_CODE.HTTPVersionNotSupported]: "HTTP Version Not Supported",
  [STATUS_CODE.IMUsed]: "IM Used",
  [STATUS_CODE.InsufficientStorage]: "Insufficient Storage",
  [STATUS_CODE.InternalServerError]: "Internal Server Error",
  [STATUS_CODE.LengthRequired]: "Length Required",
  [STATUS_CODE.Locked]: "Locked",
  [STATUS_CODE.LoopDetected]: "Loop Detected",
  [STATUS_CODE.MethodNotAllowed]: "Method Not Allowed",
  [STATUS_CODE.MisdirectedRequest]: "Misdirected Request",
  [STATUS_CODE.MovedPermanently]: "Moved Permanently",
  [STATUS_CODE.MultiStatus]: "Multi Status",
  [STATUS_CODE.MultipleChoices]: "Multiple Choices",
  [STATUS_CODE.NetworkAuthenticationRequired]: "Network Authentication Required",
  [STATUS_CODE.NoContent]: "No Content",
  [STATUS_CODE.NonAuthoritativeInfo]: "Non Authoritative Info",
  [STATUS_CODE.NotAcceptable]: "Not Acceptable",
  [STATUS_CODE.NotExtended]: "Not Extended",
  [STATUS_CODE.NotFound]: "Not Found",
  [STATUS_CODE.NotImplemented]: "Not Implemented",
  [STATUS_CODE.NotModified]: "Not Modified",
  [STATUS_CODE.OK]: "OK",
  [STATUS_CODE.PartialContent]: "Partial Content",
  [STATUS_CODE.PaymentRequired]: "Payment Required",
  [STATUS_CODE.PermanentRedirect]: "Permanent Redirect",
  [STATUS_CODE.PreconditionFailed]: "Precondition Failed",
  [STATUS_CODE.PreconditionRequired]: "Precondition Required",
  [STATUS_CODE.Processing]: "Processing",
  [STATUS_CODE.ProxyAuthRequired]: "Proxy Auth Required",
  [STATUS_CODE.ContentTooLarge]: "Content Too Large",
  [STATUS_CODE.RequestHeaderFieldsTooLarge]: "Request Header Fields Too Large",
  [STATUS_CODE.RequestTimeout]: "Request Timeout",
  [STATUS_CODE.URITooLong]: "URI Too Long",
  [STATUS_CODE.RangeNotSatisfiable]: "Range Not Satisfiable",
  [STATUS_CODE.ResetContent]: "Reset Content",
  [STATUS_CODE.SeeOther]: "See Other",
  [STATUS_CODE.ServiceUnavailable]: "Service Unavailable",
  [STATUS_CODE.SwitchingProtocols]: "Switching Protocols",
  [STATUS_CODE.Teapot]: "I'm a teapot",
  [STATUS_CODE.TemporaryRedirect]: "Temporary Redirect",
  [STATUS_CODE.TooEarly]: "Too Early",
  [STATUS_CODE.TooManyRequests]: "Too Many Requests",
  [STATUS_CODE.Unauthorized]: "Unauthorized",
  [STATUS_CODE.UnavailableForLegalReasons]: "Unavailable For Legal Reasons",
  [STATUS_CODE.UnprocessableEntity]: "Unprocessable Entity",
  [STATUS_CODE.UnsupportedMediaType]: "Unsupported Media Type",
  [STATUS_CODE.UpgradeRequired]: "Upgrade Required",
  [STATUS_CODE.UseProxy]: "Use Proxy",
  [STATUS_CODE.VariantAlsoNegotiates]: "Variant Also Negotiates"
};
export function isStatus(status) {
  return Object.values(STATUS_CODE).includes(status);
}
export function isInformationalStatus(status) {
  return isStatus(status) && status >= 100 && status < 200;
}
export function isSuccessfulStatus(status) {
  return isStatus(status) && status >= 200 && status < 300;
}
export function isRedirectStatus(status) {
  return isStatus(status) && status >= 300 && status < 400;
}
export function isClientErrorStatus(status) {
  return isStatus(status) && status >= 400 && status < 500;
}
export function isServerErrorStatus(status) {
  return isStatus(status) && status >= 500 && status < 600;
}
export function isErrorStatus(status) {
  return isStatus(status) && status >= 400 && status < 600;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIyNC4wL2h0dHAvc3RhdHVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjQgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG4vLyBUaGlzIG1vZHVsZSBpcyBicm93c2VyIGNvbXBhdGlibGUuXG5cbi8qKlxuICogQ29udGFpbnMgdGhlIHtAbGlua2NvZGUgU1RBVFVTX0NPREV9IG9iamVjdCB3aGljaCBjb250YWlucyBzdGFuZGFyZCBIVFRQXG4gKiBzdGF0dXMgY29kZXMgYW5kIHByb3ZpZGVzIHNldmVyYWwgdHlwZSBndWFyZHMgZm9yIGhhbmRsaW5nIHN0YXR1cyBjb2Rlc1xuICogd2l0aCB0eXBlIHNhZmV0eS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIGltcG9ydCB7XG4gKiAgIFNUQVRVU19DT0RFLFxuICogICBTVEFUVVNfVEVYVCxcbiAqIH0gZnJvbSBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAkU1REX1ZFUlNJT04vaHR0cC9zdGF0dXMudHNcIjtcbiAqXG4gKiBjb25zb2xlLmxvZyhTVEFUVVNfQ09ERS5Ob3RGb3VuZCk7IC8vIFJldHVybnMgNDA0XG4gKiBjb25zb2xlLmxvZyhTVEFUVVNfVEVYVFtTVEFUVVNfQ09ERS5Ob3RGb3VuZF0pOyAvLyBSZXR1cm5zIFwiTm90IEZvdW5kXCJcbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgaXNFcnJvclN0YXR1cyB9IGZyb20gXCJodHRwczovL2Rlbm8ubGFuZC9zdGRAJFNURF9WRVJTSU9OL2h0dHAvc3RhdHVzLnRzXCI7XG4gKlxuICogY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2V4YW1wbGUuY29tL1wiKTtcbiAqXG4gKiBpZiAoaXNFcnJvclN0YXR1cyhyZXMuc3RhdHVzKSkge1xuICogICAvLyBlcnJvciBoYW5kbGluZyBoZXJlLi4uXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlXG4gKi9cblxuZXhwb3J0IGNvbnN0IFNUQVRVU19DT0RFID0ge1xuICAvKiogUkZDIDcyMzEsIDYuMi4xICovXG4gIENvbnRpbnVlOiAxMDAsXG4gIC8qKiBSRkMgNzIzMSwgNi4yLjIgKi9cbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIC8qKiBSRkMgMjUxOCwgMTAuMSAqL1xuICBQcm9jZXNzaW5nOiAxMDIsXG4gIC8qKiBSRkMgODI5NyAqKi9cbiAgRWFybHlIaW50czogMTAzLFxuXG4gIC8qKiBSRkMgNzIzMSwgNi4zLjEgKi9cbiAgT0s6IDIwMCxcbiAgLyoqIFJGQyA3MjMxLCA2LjMuMiAqL1xuICBDcmVhdGVkOiAyMDEsXG4gIC8qKiBSRkMgNzIzMSwgNi4zLjMgKi9cbiAgQWNjZXB0ZWQ6IDIwMixcbiAgLyoqIFJGQyA3MjMxLCA2LjMuNCAqL1xuICBOb25BdXRob3JpdGF0aXZlSW5mbzogMjAzLFxuICAvKiogUkZDIDcyMzEsIDYuMy41ICovXG4gIE5vQ29udGVudDogMjA0LFxuICAvKiogUkZDIDcyMzEsIDYuMy42ICovXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICAvKiogUkZDIDcyMzMsIDQuMSAqL1xuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICAvKiogUkZDIDQ5MTgsIDExLjEgKi9cbiAgTXVsdGlTdGF0dXM6IDIwNyxcbiAgLyoqIFJGQyA1ODQyLCA3LjEgKi9cbiAgQWxyZWFkeVJlcG9ydGVkOiAyMDgsXG4gIC8qKiBSRkMgMzIyOSwgMTAuNC4xICovXG4gIElNVXNlZDogMjI2LFxuXG4gIC8qKiBSRkMgNzIzMSwgNi40LjEgKi9cbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIC8qKiBSRkMgNzIzMSwgNi40LjIgKi9cbiAgTW92ZWRQZXJtYW5lbnRseTogMzAxLFxuICAvKiogUkZDIDcyMzEsIDYuNC4zICovXG4gIEZvdW5kOiAzMDIsXG4gIC8qKiBSRkMgNzIzMSwgNi40LjQgKi9cbiAgU2VlT3RoZXI6IDMwMyxcbiAgLyoqIFJGQyA3MjMyLCA0LjEgKi9cbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgLyoqIFJGQyA3MjMxLCA2LjQuNSAqL1xuICBVc2VQcm94eTogMzA1LFxuICAvKiogUkZDIDcyMzEsIDYuNC43ICovXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIC8qKiBSRkMgNzUzOCwgMyAqL1xuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuXG4gIC8qKiBSRkMgNzIzMSwgNi41LjEgKi9cbiAgQmFkUmVxdWVzdDogNDAwLFxuICAvKiogUkZDIDcyMzUsIDMuMSAqL1xuICBVbmF1dGhvcml6ZWQ6IDQwMSxcbiAgLyoqIFJGQyA3MjMxLCA2LjUuMiAqL1xuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgLyoqIFJGQyA3MjMxLCA2LjUuMyAqL1xuICBGb3JiaWRkZW46IDQwMyxcbiAgLyoqIFJGQyA3MjMxLCA2LjUuNCAqL1xuICBOb3RGb3VuZDogNDA0LFxuICAvKiogUkZDIDcyMzEsIDYuNS41ICovXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgLyoqIFJGQyA3MjMxLCA2LjUuNiAqL1xuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIC8qKiBSRkMgNzIzNSwgMy4yICovXG4gIFByb3h5QXV0aFJlcXVpcmVkOiA0MDcsXG4gIC8qKiBSRkMgNzIzMSwgNi41LjcgKi9cbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgLyoqIFJGQyA3MjMxLCA2LjUuOCAqL1xuICBDb25mbGljdDogNDA5LFxuICAvKiogUkZDIDcyMzEsIDYuNS45ICovXG4gIEdvbmU6IDQxMCxcbiAgLyoqIFJGQyA3MjMxLCA2LjUuMTAgKi9cbiAgTGVuZ3RoUmVxdWlyZWQ6IDQxMSxcbiAgLyoqIFJGQyA3MjMyLCA0LjIgKi9cbiAgUHJlY29uZGl0aW9uRmFpbGVkOiA0MTIsXG4gIC8qKiBSRkMgNzIzMSwgNi41LjExICovXG4gIENvbnRlbnRUb29MYXJnZTogNDEzLFxuICAvKiogUkZDIDcyMzEsIDYuNS4xMiAqL1xuICBVUklUb29Mb25nOiA0MTQsXG4gIC8qKiBSRkMgNzIzMSwgNi41LjEzICovXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIC8qKiBSRkMgNzIzMywgNC40ICovXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgLyoqIFJGQyA3MjMxLCA2LjUuMTQgKi9cbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgLyoqIFJGQyA3MTY4LCAyLjMuMyAqL1xuICBUZWFwb3Q6IDQxOCxcbiAgLyoqIFJGQyA3NTQwLCA5LjEuMiAqL1xuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgLyoqIFJGQyA0OTE4LCAxMS4yICovXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgLyoqIFJGQyA0OTE4LCAxMS4zICovXG4gIExvY2tlZDogNDIzLFxuICAvKiogUkZDIDQ5MTgsIDExLjQgKi9cbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICAvKiogUkZDIDg0NzAsIDUuMiAqL1xuICBUb29FYXJseTogNDI1LFxuICAvKiogUkZDIDcyMzEsIDYuNS4xNSAqL1xuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgLyoqIFJGQyA2NTg1LCAzICovXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIC8qKiBSRkMgNjU4NSwgNCAqL1xuICBUb29NYW55UmVxdWVzdHM6IDQyOSxcbiAgLyoqIFJGQyA2NTg1LCA1ICovXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICAvKiogUkZDIDc3MjUsIDMgKi9cbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcblxuICAvKiogUkZDIDcyMzEsIDYuNi4xICovXG4gIEludGVybmFsU2VydmVyRXJyb3I6IDUwMCxcbiAgLyoqIFJGQyA3MjMxLCA2LjYuMiAqL1xuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICAvKiogUkZDIDcyMzEsIDYuNi4zICovXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgLyoqIFJGQyA3MjMxLCA2LjYuNCAqL1xuICBTZXJ2aWNlVW5hdmFpbGFibGU6IDUwMyxcbiAgLyoqIFJGQyA3MjMxLCA2LjYuNSAqL1xuICBHYXRld2F5VGltZW91dDogNTA0LFxuICAvKiogUkZDIDcyMzEsIDYuNi42ICovXG4gIEhUVFBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIC8qKiBSRkMgMjI5NSwgOC4xICovXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICAvKiogUkZDIDQ5MTgsIDExLjUgKi9cbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICAvKiogUkZDIDU4NDIsIDcuMiAqL1xuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgLyoqIFJGQyAyNzc0LCA3ICovXG4gIE5vdEV4dGVuZGVkOiA1MTAsXG4gIC8qKiBSRkMgNjU4NSwgNiAqL1xuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufSBhcyBjb25zdDtcblxuLyoqIEFuIEhUVFAgc3RhdHVzIGNvZGUuICovXG5leHBvcnQgdHlwZSBTdGF0dXNDb2RlID0gdHlwZW9mIFNUQVRVU19DT0RFW2tleW9mIHR5cGVvZiBTVEFUVVNfQ09ERV07XG5cbi8qKiBBIHJlY29yZCBvZiBhbGwgdGhlIHN0YXR1cyBjb2RlcyB0ZXh0LiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRVU19URVhUID0ge1xuICBbU1RBVFVTX0NPREUuQWNjZXB0ZWRdOiBcIkFjY2VwdGVkXCIsXG4gIFtTVEFUVVNfQ09ERS5BbHJlYWR5UmVwb3J0ZWRdOiBcIkFscmVhZHkgUmVwb3J0ZWRcIixcbiAgW1NUQVRVU19DT0RFLkJhZEdhdGV3YXldOiBcIkJhZCBHYXRld2F5XCIsXG4gIFtTVEFUVVNfQ09ERS5CYWRSZXF1ZXN0XTogXCJCYWQgUmVxdWVzdFwiLFxuICBbU1RBVFVTX0NPREUuQ29uZmxpY3RdOiBcIkNvbmZsaWN0XCIsXG4gIFtTVEFUVVNfQ09ERS5Db250aW51ZV06IFwiQ29udGludWVcIixcbiAgW1NUQVRVU19DT0RFLkNyZWF0ZWRdOiBcIkNyZWF0ZWRcIixcbiAgW1NUQVRVU19DT0RFLkVhcmx5SGludHNdOiBcIkVhcmx5IEhpbnRzXCIsXG4gIFtTVEFUVVNfQ09ERS5FeHBlY3RhdGlvbkZhaWxlZF06IFwiRXhwZWN0YXRpb24gRmFpbGVkXCIsXG4gIFtTVEFUVVNfQ09ERS5GYWlsZWREZXBlbmRlbmN5XTogXCJGYWlsZWQgRGVwZW5kZW5jeVwiLFxuICBbU1RBVFVTX0NPREUuRm9yYmlkZGVuXTogXCJGb3JiaWRkZW5cIixcbiAgW1NUQVRVU19DT0RFLkZvdW5kXTogXCJGb3VuZFwiLFxuICBbU1RBVFVTX0NPREUuR2F0ZXdheVRpbWVvdXRdOiBcIkdhdGV3YXkgVGltZW91dFwiLFxuICBbU1RBVFVTX0NPREUuR29uZV06IFwiR29uZVwiLFxuICBbU1RBVFVTX0NPREUuSFRUUFZlcnNpb25Ob3RTdXBwb3J0ZWRdOiBcIkhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkXCIsXG4gIFtTVEFUVVNfQ09ERS5JTVVzZWRdOiBcIklNIFVzZWRcIixcbiAgW1NUQVRVU19DT0RFLkluc3VmZmljaWVudFN0b3JhZ2VdOiBcIkluc3VmZmljaWVudCBTdG9yYWdlXCIsXG4gIFtTVEFUVVNfQ09ERS5JbnRlcm5hbFNlcnZlckVycm9yXTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgW1NUQVRVU19DT0RFLkxlbmd0aFJlcXVpcmVkXTogXCJMZW5ndGggUmVxdWlyZWRcIixcbiAgW1NUQVRVU19DT0RFLkxvY2tlZF06IFwiTG9ja2VkXCIsXG4gIFtTVEFUVVNfQ09ERS5Mb29wRGV0ZWN0ZWRdOiBcIkxvb3AgRGV0ZWN0ZWRcIixcbiAgW1NUQVRVU19DT0RFLk1ldGhvZE5vdEFsbG93ZWRdOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiLFxuICBbU1RBVFVTX0NPREUuTWlzZGlyZWN0ZWRSZXF1ZXN0XTogXCJNaXNkaXJlY3RlZCBSZXF1ZXN0XCIsXG4gIFtTVEFUVVNfQ09ERS5Nb3ZlZFBlcm1hbmVudGx5XTogXCJNb3ZlZCBQZXJtYW5lbnRseVwiLFxuICBbU1RBVFVTX0NPREUuTXVsdGlTdGF0dXNdOiBcIk11bHRpIFN0YXR1c1wiLFxuICBbU1RBVFVTX0NPREUuTXVsdGlwbGVDaG9pY2VzXTogXCJNdWx0aXBsZSBDaG9pY2VzXCIsXG4gIFtTVEFUVVNfQ09ERS5OZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZF06XG4gICAgXCJOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCIsXG4gIFtTVEFUVVNfQ09ERS5Ob0NvbnRlbnRdOiBcIk5vIENvbnRlbnRcIixcbiAgW1NUQVRVU19DT0RFLk5vbkF1dGhvcml0YXRpdmVJbmZvXTogXCJOb24gQXV0aG9yaXRhdGl2ZSBJbmZvXCIsXG4gIFtTVEFUVVNfQ09ERS5Ob3RBY2NlcHRhYmxlXTogXCJOb3QgQWNjZXB0YWJsZVwiLFxuICBbU1RBVFVTX0NPREUuTm90RXh0ZW5kZWRdOiBcIk5vdCBFeHRlbmRlZFwiLFxuICBbU1RBVFVTX0NPREUuTm90Rm91bmRdOiBcIk5vdCBGb3VuZFwiLFxuICBbU1RBVFVTX0NPREUuTm90SW1wbGVtZW50ZWRdOiBcIk5vdCBJbXBsZW1lbnRlZFwiLFxuICBbU1RBVFVTX0NPREUuTm90TW9kaWZpZWRdOiBcIk5vdCBNb2RpZmllZFwiLFxuICBbU1RBVFVTX0NPREUuT0tdOiBcIk9LXCIsXG4gIFtTVEFUVVNfQ09ERS5QYXJ0aWFsQ29udGVudF06IFwiUGFydGlhbCBDb250ZW50XCIsXG4gIFtTVEFUVVNfQ09ERS5QYXltZW50UmVxdWlyZWRdOiBcIlBheW1lbnQgUmVxdWlyZWRcIixcbiAgW1NUQVRVU19DT0RFLlBlcm1hbmVudFJlZGlyZWN0XTogXCJQZXJtYW5lbnQgUmVkaXJlY3RcIixcbiAgW1NUQVRVU19DT0RFLlByZWNvbmRpdGlvbkZhaWxlZF06IFwiUHJlY29uZGl0aW9uIEZhaWxlZFwiLFxuICBbU1RBVFVTX0NPREUuUHJlY29uZGl0aW9uUmVxdWlyZWRdOiBcIlByZWNvbmRpdGlvbiBSZXF1aXJlZFwiLFxuICBbU1RBVFVTX0NPREUuUHJvY2Vzc2luZ106IFwiUHJvY2Vzc2luZ1wiLFxuICBbU1RBVFVTX0NPREUuUHJveHlBdXRoUmVxdWlyZWRdOiBcIlByb3h5IEF1dGggUmVxdWlyZWRcIixcbiAgW1NUQVRVU19DT0RFLkNvbnRlbnRUb29MYXJnZV06IFwiQ29udGVudCBUb28gTGFyZ2VcIixcbiAgW1NUQVRVU19DT0RFLlJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZV06IFwiUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZVwiLFxuICBbU1RBVFVTX0NPREUuUmVxdWVzdFRpbWVvdXRdOiBcIlJlcXVlc3QgVGltZW91dFwiLFxuICBbU1RBVFVTX0NPREUuVVJJVG9vTG9uZ106IFwiVVJJIFRvbyBMb25nXCIsXG4gIFtTVEFUVVNfQ09ERS5SYW5nZU5vdFNhdGlzZmlhYmxlXTogXCJSYW5nZSBOb3QgU2F0aXNmaWFibGVcIixcbiAgW1NUQVRVU19DT0RFLlJlc2V0Q29udGVudF06IFwiUmVzZXQgQ29udGVudFwiLFxuICBbU1RBVFVTX0NPREUuU2VlT3RoZXJdOiBcIlNlZSBPdGhlclwiLFxuICBbU1RBVFVTX0NPREUuU2VydmljZVVuYXZhaWxhYmxlXTogXCJTZXJ2aWNlIFVuYXZhaWxhYmxlXCIsXG4gIFtTVEFUVVNfQ09ERS5Td2l0Y2hpbmdQcm90b2NvbHNdOiBcIlN3aXRjaGluZyBQcm90b2NvbHNcIixcbiAgW1NUQVRVU19DT0RFLlRlYXBvdF06IFwiSSdtIGEgdGVhcG90XCIsXG4gIFtTVEFUVVNfQ09ERS5UZW1wb3JhcnlSZWRpcmVjdF06IFwiVGVtcG9yYXJ5IFJlZGlyZWN0XCIsXG4gIFtTVEFUVVNfQ09ERS5Ub29FYXJseV06IFwiVG9vIEVhcmx5XCIsXG4gIFtTVEFUVVNfQ09ERS5Ub29NYW55UmVxdWVzdHNdOiBcIlRvbyBNYW55IFJlcXVlc3RzXCIsXG4gIFtTVEFUVVNfQ09ERS5VbmF1dGhvcml6ZWRdOiBcIlVuYXV0aG9yaXplZFwiLFxuICBbU1RBVFVTX0NPREUuVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnNdOiBcIlVuYXZhaWxhYmxlIEZvciBMZWdhbCBSZWFzb25zXCIsXG4gIFtTVEFUVVNfQ09ERS5VbnByb2Nlc3NhYmxlRW50aXR5XTogXCJVbnByb2Nlc3NhYmxlIEVudGl0eVwiLFxuICBbU1RBVFVTX0NPREUuVW5zdXBwb3J0ZWRNZWRpYVR5cGVdOiBcIlVuc3VwcG9ydGVkIE1lZGlhIFR5cGVcIixcbiAgW1NUQVRVU19DT0RFLlVwZ3JhZGVSZXF1aXJlZF06IFwiVXBncmFkZSBSZXF1aXJlZFwiLFxuICBbU1RBVFVTX0NPREUuVXNlUHJveHldOiBcIlVzZSBQcm94eVwiLFxuICBbU1RBVFVTX0NPREUuVmFyaWFudEFsc29OZWdvdGlhdGVzXTogXCJWYXJpYW50IEFsc28gTmVnb3RpYXRlc1wiLFxufSBhcyBjb25zdDtcblxuLyoqIEFuIEhUVFAgc3RhdHVzIHRleHQuICovXG5leHBvcnQgdHlwZSBTdGF0dXNUZXh0ID0gdHlwZW9mIFNUQVRVU19URVhUW2tleW9mIHR5cGVvZiBTVEFUVVNfVEVYVF07XG5cbi8qKiBBbiBIVFRQIHN0YXR1cyB0aGF0IGlzIGEgaW5mb3JtYXRpb25hbCAoMVhYKS4gKi9cbmV4cG9ydCB0eXBlIEluZm9ybWF0aW9uYWxTdGF0dXMgPVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Db250aW51ZVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Td2l0Y2hpbmdQcm90b2NvbHNcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuUHJvY2Vzc2luZ1xuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5FYXJseUhpbnRzO1xuXG4vKiogQW4gSFRUUCBzdGF0dXMgdGhhdCBpcyBhIHN1Y2Nlc3MgKDJYWCkuICovXG5leHBvcnQgdHlwZSBTdWNjZXNzZnVsU3RhdHVzID1cbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuT0tcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuQ3JlYXRlZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5BY2NlcHRlZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Ob25BdXRob3JpdGF0aXZlSW5mb1xuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Ob0NvbnRlbnRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuUmVzZXRDb250ZW50XG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlBhcnRpYWxDb250ZW50XG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk11bHRpU3RhdHVzXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLkFscmVhZHlSZXBvcnRlZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5JTVVzZWQ7XG5cbi8qKiBBbiBIVFRQIHN0YXR1cyB0aGF0IGlzIGEgcmVkaXJlY3QgKDNYWCkuICovXG5leHBvcnQgdHlwZSBSZWRpcmVjdFN0YXR1cyA9XG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk11bHRpcGxlQ2hvaWNlcyAvLyAzMDBcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuTW92ZWRQZXJtYW5lbnRseSAvLyAzMDFcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuRm91bmQgLy8gMzAyXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlNlZU90aGVyIC8vIDMwM1xuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Vc2VQcm94eSAvLyAzMDUgLSBERVBSRUNBVEVEXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlRlbXBvcmFyeVJlZGlyZWN0IC8vIDMwN1xuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5QZXJtYW5lbnRSZWRpcmVjdDsgLy8gMzA4XG5cbi8qKiBBbiBIVFRQIHN0YXR1cyB0aGF0IGlzIGEgY2xpZW50IGVycm9yICg0WFgpLiAqL1xuZXhwb3J0IHR5cGUgQ2xpZW50RXJyb3JTdGF0dXMgPVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5CYWRSZXF1ZXN0XG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlVuYXV0aG9yaXplZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5QYXltZW50UmVxdWlyZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuRm9yYmlkZGVuXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk5vdEZvdW5kXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk1ldGhvZE5vdEFsbG93ZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuTm90QWNjZXB0YWJsZVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Qcm94eUF1dGhSZXF1aXJlZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5SZXF1ZXN0VGltZW91dFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Db25mbGljdFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Hb25lXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLkxlbmd0aFJlcXVpcmVkXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlByZWNvbmRpdGlvbkZhaWxlZFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Db250ZW50VG9vTGFyZ2VcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuVVJJVG9vTG9uZ1xuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5VbnN1cHBvcnRlZE1lZGlhVHlwZVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5SYW5nZU5vdFNhdGlzZmlhYmxlXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLkV4cGVjdGF0aW9uRmFpbGVkXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlRlYXBvdFxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5NaXNkaXJlY3RlZFJlcXVlc3RcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuVW5wcm9jZXNzYWJsZUVudGl0eVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5Mb2NrZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuRmFpbGVkRGVwZW5kZW5jeVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5VcGdyYWRlUmVxdWlyZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuUHJlY29uZGl0aW9uUmVxdWlyZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuVG9vTWFueVJlcXVlc3RzXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLlJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5VbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29ucztcblxuLyoqIEFuIEhUVFAgc3RhdHVzIHRoYXQgaXMgYSBzZXJ2ZXIgZXJyb3IgKDVYWCkuICovXG5leHBvcnQgdHlwZSBTZXJ2ZXJFcnJvclN0YXR1cyA9XG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLkludGVybmFsU2VydmVyRXJyb3JcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuTm90SW1wbGVtZW50ZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuQmFkR2F0ZXdheVxuICB8IHR5cGVvZiBTVEFUVVNfQ09ERS5TZXJ2aWNlVW5hdmFpbGFibGVcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuR2F0ZXdheVRpbWVvdXRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuSFRUUFZlcnNpb25Ob3RTdXBwb3J0ZWRcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuVmFyaWFudEFsc29OZWdvdGlhdGVzXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLkluc3VmZmljaWVudFN0b3JhZ2VcbiAgfCB0eXBlb2YgU1RBVFVTX0NPREUuTG9vcERldGVjdGVkXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk5vdEV4dGVuZGVkXG4gIHwgdHlwZW9mIFNUQVRVU19DT0RFLk5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkO1xuXG4vKiogQW4gSFRUUCBzdGF0dXMgdGhhdCBpcyBhbiBlcnJvciAoNFhYIGFuZCA1WFgpLiAqL1xuZXhwb3J0IHR5cGUgRXJyb3JTdGF0dXMgPSBDbGllbnRFcnJvclN0YXR1cyB8IFNlcnZlckVycm9yU3RhdHVzO1xuXG4vKiogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBudW1iZXIgaXMgYSB2YWxpZCBIVFRQIHN0YXR1cyBjb2RlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhdHVzKHN0YXR1czogbnVtYmVyKTogc3RhdHVzIGlzIFN0YXR1c0NvZGUge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhTVEFUVVNfQ09ERSkuaW5jbHVkZXMoc3RhdHVzIGFzIFN0YXR1c0NvZGUpO1xufVxuXG4vKiogQSB0eXBlIGd1YXJkIHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgaW5mb3JtYXRpb25hbC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luZm9ybWF0aW9uYWxTdGF0dXMoXG4gIHN0YXR1czogbnVtYmVyLFxuKTogc3RhdHVzIGlzIEluZm9ybWF0aW9uYWxTdGF0dXMge1xuICByZXR1cm4gaXNTdGF0dXMoc3RhdHVzKSAmJiBzdGF0dXMgPj0gMTAwICYmIHN0YXR1cyA8IDIwMDtcbn1cblxuLyoqIEEgdHlwZSBndWFyZCB0aGF0IGRldGVybWluZXMgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIHN1Y2Nlc3NmdWwuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdWNjZXNzZnVsU3RhdHVzKFxuICBzdGF0dXM6IG51bWJlcixcbik6IHN0YXR1cyBpcyBTdWNjZXNzZnVsU3RhdHVzIHtcbiAgcmV0dXJuIGlzU3RhdHVzKHN0YXR1cykgJiYgc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG59XG5cbi8qKiBBIHR5cGUgZ3VhcmQgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBzdGF0dXMgY29kZSBpcyBhIHJlZGlyZWN0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVkaXJlY3RTdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBzdGF0dXMgaXMgUmVkaXJlY3RTdGF0dXMge1xuICByZXR1cm4gaXNTdGF0dXMoc3RhdHVzKSAmJiBzdGF0dXMgPj0gMzAwICYmIHN0YXR1cyA8IDQwMDtcbn1cblxuLyoqIEEgdHlwZSBndWFyZCB0aGF0IGRldGVybWluZXMgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIGEgY2xpZW50IGVycm9yLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xpZW50RXJyb3JTdGF0dXMoXG4gIHN0YXR1czogbnVtYmVyLFxuKTogc3RhdHVzIGlzIENsaWVudEVycm9yU3RhdHVzIHtcbiAgcmV0dXJuIGlzU3RhdHVzKHN0YXR1cykgJiYgc3RhdHVzID49IDQwMCAmJiBzdGF0dXMgPCA1MDA7XG59XG5cbi8qKiBBIHR5cGUgZ3VhcmQgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBzdGF0dXMgY29kZSBpcyBhIHNlcnZlciBlcnJvci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlcnZlckVycm9yU3RhdHVzKFxuICBzdGF0dXM6IG51bWJlcixcbik6IHN0YXR1cyBpcyBTZXJ2ZXJFcnJvclN0YXR1cyB7XG4gIHJldHVybiBpc1N0YXR1cyhzdGF0dXMpICYmIHN0YXR1cyA+PSA1MDAgJiYgc3RhdHVzIDwgNjAwO1xufVxuXG4vKiogQSB0eXBlIGd1YXJkIHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgc3RhdHVzIGNvZGUgaXMgYW4gZXJyb3IuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvclN0YXR1cyhzdGF0dXM6IG51bWJlcik6IHN0YXR1cyBpcyBFcnJvclN0YXR1cyB7XG4gIHJldHVybiBpc1N0YXR1cyhzdGF0dXMpICYmIHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNjAwO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQSxPQUFPLE1BQU0sY0FBYztFQUV6QixVQUFVO0VBRVYsb0JBQW9CO0VBRXBCLFlBQVk7RUFFWixZQUFZO0VBR1osSUFBSTtFQUVKLFNBQVM7RUFFVCxVQUFVO0VBRVYsc0JBQXNCO0VBRXRCLFdBQVc7RUFFWCxjQUFjO0VBRWQsZ0JBQWdCO0VBRWhCLGFBQWE7RUFFYixpQkFBaUI7RUFFakIsUUFBUTtFQUdSLGlCQUFpQjtFQUVqQixrQkFBa0I7RUFFbEIsT0FBTztFQUVQLFVBQVU7RUFFVixhQUFhO0VBRWIsVUFBVTtFQUVWLG1CQUFtQjtFQUVuQixtQkFBbUI7RUFHbkIsWUFBWTtFQUVaLGNBQWM7RUFFZCxpQkFBaUI7RUFFakIsV0FBVztFQUVYLFVBQVU7RUFFVixrQkFBa0I7RUFFbEIsZUFBZTtFQUVmLG1CQUFtQjtFQUVuQixnQkFBZ0I7RUFFaEIsVUFBVTtFQUVWLE1B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