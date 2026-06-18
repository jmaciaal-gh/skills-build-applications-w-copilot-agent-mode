import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      resourceName="leaderboard"
      columns={[
        { key: 'rank', label: 'Rank', render: (entry) => entry.rank },
        { key: 'user', label: 'User', render: (entry) => entry.user },
        { key: 'team', label: 'Team', render: (entry) => entry.team },
        { key: 'score', label: 'Score', render: (entry) => entry.score },
      ]}
    />
  )
}