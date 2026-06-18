import { buildApiEndpoint } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = buildApiEndpoint('teams')

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