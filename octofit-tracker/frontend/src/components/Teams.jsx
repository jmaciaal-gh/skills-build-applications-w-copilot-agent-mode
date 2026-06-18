import ResourcePage from './ResourcePage.jsx'

const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : `${localhostApiUrl.replace(/\/$/, '')}/api/teams/`

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      apiEndpoint={apiEndpoint}
      columns={[
        { key: 'name', label: 'Team', render: (team) => team.name },
        { key: 'description', label: 'Description', render: (team) => team.description },
        { key: 'members', label: 'Members', render: (team) => team.members },
      ]}
    />
  )
}