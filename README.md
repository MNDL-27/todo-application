# To-Do App with Authentication

## Quick Start

### 1. Start Backend (Terminal 1)
```bash
cd '/workspaces/codespaces-blank/full-stack/10th class'
npm run dev
```

### 2. Start Frontend (Terminal 2)
```bash
cd '/workspaces/codespaces-blank/full-stack/10th class/frontend'
npm run dev
```

### 3. Access the App
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Features
- ✅ User Registration & Login
- ✅ JWT Authentication
- ✅ Add/Edit/Delete Tasks
- ✅ Optional Due Dates
- ✅ User-specific Tasks

## Ports
- Backend runs on port 5000
- Frontend runs on port 3000

## Environment
Make sure `.env` file exists in the backend root with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your-secret-key
```
