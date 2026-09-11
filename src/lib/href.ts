/** True for absolute http(s) URLs — these should open in a new tab. */
export function isExternal(href: unknown): href is string {
  return typeof href === "string" && /^https?:\/\//.test(href);
}
