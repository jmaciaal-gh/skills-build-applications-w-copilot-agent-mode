import ResourcePage from './ResourcePage.jsx'

const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${localhostApiUrl.replace(/\/$/, '')}/api/leaderboard/`

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