import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(MONGODB_URI);

  await Promise.all([
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Team.deleteMany({}),
    User.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    {
      username: 'maya_runner',
      email: 'maya.runner@example.com',
      passwordHash: 'sample-hash-maya',
      displayName: 'Maya Rivera',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      username: 'leo_lifter',
      email: 'leo.lifter@example.com',
      passwordHash: 'sample-hash-leo',
      displayName: 'Leo Chen',
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      username: 'sofia_cycles',
      email: 'sofia.cycles@example.com',
      passwordHash: 'sample-hash-sofia',
      displayName: 'Sofia Patel',
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
    {
      username: 'noah_swims',
      email: 'noah.swims@example.com',
      passwordHash: 'sample-hash-noah',
      displayName: 'Noah Brooks',
      profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    },
  ]);

  const teams = await Team.insertMany([
    {
      name: 'Cardio Crew',
      description: 'Runners, cyclists, and endurance fans chasing weekly mileage goals.',
      members: [users[0]._id, users[2]._id],
    },
    {
      name: 'Strength Squad',
      description: 'Lifters and functional fitness athletes building consistent strength habits.',
      members: [users[1]._id, users[3]._id],
    },
  ]);

  await Activity.insertMany([
    {
      user: users[0]._id,
      activityType: 'Outdoor Run',
      durationMinutes: 48,
      caloriesBurned: 520,
      activityDate: new Date('2026-06-14T07:30:00Z'),
    },
    {
      user: users[1]._id,
      activityType: 'Strength Training',
      durationMinutes: 60,
      caloriesBurned: 430,
      activityDate: new Date('2026-06-15T18:00:00Z'),
    },
    {
      user: users[2]._id,
      activityType: 'Road Cycling',
      durationMinutes: 75,
      caloriesBurned: 690,
      activityDate: new Date('2026-06-16T06:45:00Z'),
    },
    {
      user: users[3]._id,
      activityType: 'Lap Swimming',
      durationMinutes: 40,
      caloriesBurned: 380,
      activityDate: new Date('2026-06-17T12:15:00Z'),
    },
  ]);

  await Leaderboard.insertMany([
    { user: users[2]._id, team: teams[0]._id, score: 1460, rank: 1 },
    { user: users[0]._id, team: teams[0]._id, score: 1325, rank: 2 },
    { user: users[1]._id, team: teams[1]._id, score: 1180, rank: 3 },
    { user: users[3]._id, team: teams[1]._id, score: 1040, rank: 4 },
  ]);

  await Workout.insertMany([
    {
      name: 'Morning Mobility Reset',
      description: 'A short flexibility session for recovery days and desk breaks.',
      difficulty: 'beginner',
      durationMinutes: 20,
      exercises: ['Cat-cow stretch', 'World greatest stretch', 'Hip openers', 'Thoracic rotations'],
    },
    {
      name: 'Tempo Run Builder',
      description: 'Progressive intervals to improve running pace and aerobic threshold.',
      difficulty: 'intermediate',
      durationMinutes: 45,
      exercises: ['Warm-up jog', 'Tempo intervals', 'Easy recovery jog', 'Cooldown walk'],
    },
    {
      name: 'Full Body Power Circuit',
      description: 'Compound strength circuit for athletes with lifting experience.',
      difficulty: 'advanced',
      durationMinutes: 55,
      exercises: ['Deadlifts', 'Push press', 'Walking lunges', 'Pull-ups', 'Plank rows'],
    },
  ]);

  console.log('Created users, teams, activities, leaderboard entries, and workouts.');
}

seedDatabase()
  .then(async () => {
    await mongoose.disconnect();
  })
  .catch(async (error) => {
    console.error('Failed to seed octofit_db:', error);
    await mongoose.disconnect();
    process.exit(1);
  });