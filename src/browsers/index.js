import { get as chromeGet, set as chromeSet } from './chrome'

export function get(key) {
  return chromeGet(key)
}

export function set(key, value) {
  return chromeSet(key, value)
}
