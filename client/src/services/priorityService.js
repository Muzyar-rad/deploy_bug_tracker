import http from "./httpService";

export function getPriorities() {
  return http.get("http://18.223.33.161/api/priorities");
}
