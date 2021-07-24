export function parseQueryStringToJson(query: any) {
  if (!query) {
    return {}
  }

  const pairs = query.split('&')
  return pairs.reduce((c, p) => {
    const [key, value] = p.split('=')
    c[key] = value
    return c
  }, {})
}
