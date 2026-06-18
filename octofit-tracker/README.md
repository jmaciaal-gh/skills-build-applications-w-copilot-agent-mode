# OctoFit Tracker - Modern Multi-Tier Application

A full-stack fitness tracking application built with React 19, Express, Node.js, TypeScript, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── backend/           # Express + Node.js + TypeScript API
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── package-lock.json
└── .env.example       # Environment configuration template
```

## Technologies

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Port**: 5173

### Backend
- **Express** - Web framework
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript
- **Mongoose** - MongoDB ODM
- **Port**: 8000

### Database
- **MongoDB** - NoSQL database
- **Port**: 27017

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB running locally (default: `mongodb://localhost:27017`)

### Installation

#### Frontend
```bash
cd frontend
npm install
npm run dev
# Frontend available at: http://localhost:5173
```

#### Backend
```bash
cd backend
npm install
npm run dev
# Backend available at: http://localhost:8000
# Health check: http://localhost:8000/api/health
```

## Running the Full Stack

1. **Start MongoDB** (if not already running)
   ```bash
   mongod --dbpath /your/path/to/db
   ```

2. **Start Backend** (from `backend/` directory)
   ```bash
   npm run dev
   ```

3. **Start Frontend** (from `frontend/` directory)
   ```bash
   npm run dev
   ```

## Build for Production

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

### Backend
```bash
cd backend
npm run build
npm run start
```

## Environment Configuration

Copy `.env.example` to `.env` and adjust values as needed:
```bash
cp .env.example .env
```

## API Health Check

Once the backend is running, test the API:
```bash
curl http://localhost:8000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "OctoFit Tracker API is running"
}
```

## Development

### Frontend Development
- Hot module replacement (HMR) enabled
- Fast refresh on code changes
- ESLint configured for code quality

### Backend Development
- TypeScript compilation on save
- ts-node for running TypeScript directly
- MongoDB connection on startup

## Next Steps

1. Create database models in `backend/src/models/`
2. Build API routes in `backend/src/routes/`
3. Create React components in `frontend/src/components/`
4. Set up frontend-to-backend API calls
5. Configure environment-specific builds
