import ResourcePage from './ResourcePage.jsx'

const localhostApiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${localhostApiUrl.replace(/\/$/, '')}/api/activities/`

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      apiEndpoint={apiEndpoint}
      columns={[
        { key: 'activityType', label: 'Activity', render: (activity) => activity.activityType },
        { key: 'durationMinutes', label: 'Minutes', render: (activity) => activity.durationMinutes },
        { key: 'caloriesBurned', label: 'Calories', render: (activity) => activity.caloriesBurned },
        { key: 'activityDate', label: 'Date', render: (activity) => activity.activityDate },
      ]}
    />
  )
}