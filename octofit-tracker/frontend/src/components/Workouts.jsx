import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      resourceName="workouts"
      columns={[
        { key: 'name', label: 'Workout', render: (workout) => workout.name },
        { key: 'difficulty', label: 'Difficulty', render: (workout) => workout.difficulty },
        { key: 'durationMinutes', label: 'Minutes', render: (workout) => workout.durationMinutes },
        { key: 'exercises', label: 'Exercises', render: (workout) => workout.exercises },
      ]}
    />
  )
}