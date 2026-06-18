import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      resourceName="teams"
      columns={[
        { key: 'name', label: 'Team', render: (team) => team.name },
        { key: 'description', label: 'Description', render: (team) => team.description },
        { key: 'members', label: 'Members', render: (team) => team.members },
      ]}
    />
  )
}