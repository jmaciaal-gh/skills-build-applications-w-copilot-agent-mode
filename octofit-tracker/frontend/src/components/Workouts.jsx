import ResourcePage from './ResourcePage.jsx'

const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${localhostApiUrl.replace(/\/$/, '')}/api/workouts/`

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      apiEndpoint={apiEndpoint}
      columns={[
        { key: 'name', label: 'Workout', render: (workout) => workout.name },
        { key: 'difficulty', label: 'Difficulty', render: (workout) => workout.difficulty },
        { key: 'durationMinutes', label: 'Minutes', render: (workout) => workout.durationMinutes },
        { key: 'exercises', label: 'Exercises', render: (workout) => workout.exercises },
      ]}
    />
  )
}