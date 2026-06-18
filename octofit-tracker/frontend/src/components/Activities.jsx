import { buildApiEndpoint } from '../api.js'
import ResourcePage from './ResourcePage.jsx'

const apiEndpoint = buildApiEndpoint('activities')

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