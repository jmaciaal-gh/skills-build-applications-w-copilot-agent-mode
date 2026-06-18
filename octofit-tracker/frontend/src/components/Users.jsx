import ResourcePage from './ResourcePage.jsx'

const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${localhostApiUrl.replace(/\/$/, '')}/api/users/`

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      apiEndpoint={apiEndpoint}
      columns={[
        { key: 'displayName', label: 'Name', render: (user) => user.displayName },
        { key: 'username', label: 'Username', render: (user) => user.username },
        { key: 'email', label: 'Email', render: (user) => user.email },
      ]}
    />
  )
}