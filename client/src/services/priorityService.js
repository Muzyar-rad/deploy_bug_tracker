import http from "./httpService";

export function getPriorities() {
  return http.get("/api/priorities");
}
