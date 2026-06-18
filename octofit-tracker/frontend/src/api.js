const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export const apiBaseUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : `${localhostApiUrl.replace(/\/$/, '')}/api`

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

export async function fetchCollection(resourceName) {
  const response = await fetch(`${apiBaseUrl}/${resourceName}/`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return getCollection(await response.json())
}