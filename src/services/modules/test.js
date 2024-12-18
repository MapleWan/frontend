import mapleRequest from "../request"
export function getCityAll() {
  return mapleRequest.get({
    url: "/city/all"
  })
}