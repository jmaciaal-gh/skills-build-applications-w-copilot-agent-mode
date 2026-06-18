export function getCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const candidates = [payload.results, payload.data, payload.items, payload.docs]
  const collection = candidates.find(Array.isArray)

  return collection ?? []
}

export async function fetchCollection(apiEndpoint) {
  const response = await fetch(apiEndpoint)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json())
}