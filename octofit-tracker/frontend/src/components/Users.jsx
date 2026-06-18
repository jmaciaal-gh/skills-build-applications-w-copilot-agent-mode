import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      resourceName="users"
      columns={[
        { key: 'displayName', label: 'Name', render: (user) => user.displayName },
        { key: 'username', label: 'Username', render: (user) => user.username },
        { key: 'email', label: 'Email', render: (user) => user.email },
      ]}
    />
  )
}