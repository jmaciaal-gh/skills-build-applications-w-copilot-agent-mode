import express, { Express } from 'express';
import { connectDatabase, MONGODB_URI } from './config/database.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';

const app: Express = express();
const PORT = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OctoFit Tracker API is running',
    baseUrl,
  });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${baseUrl}`);
  console.log(`MongoDB configured at ${MONGODB_URI}`);
});