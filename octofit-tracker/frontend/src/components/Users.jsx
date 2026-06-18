import { buildApiEndpoint } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = buildApiEndpoint('users')

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