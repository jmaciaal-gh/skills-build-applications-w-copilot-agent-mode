import { buildApiEndpoint } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = buildApiEndpoint('leaderboard')

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      apiEndpoint={apiEndpoint}
      columns={[
        { key: 'rank', label: 'Rank', render: (entry) => entry.rank },
        { key: 'user', label: 'User', render: (entry) => entry.user },
        { key: 'team', label: 'Team', render: (entry) => entry.team },
        { key: 'score', label: 'Score', render: (entry) => entry.score },
      ]}
    />
  )
}