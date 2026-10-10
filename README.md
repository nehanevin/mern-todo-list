# MERN To-Do List

A simple full-stack To-Do List built with MongoDB, Express.js, React (Vite) and Node.js.
Features: add, view, complete/incomplete and delete tasks. Data is stored in MongoDB.

GitHub repository: <https://github.com/nehanevin/mern-todo-list.git>

## Project Structure
- `backend/`  - Express server, Mongoose model (`models/Task.js`), REST routes (`routes/tasks.js`)
- `frontend/` - React app with `TaskForm`, `TaskList`, `TaskItem` components
- `screenshots/` - screenshots of the working app and merged pull requests

## Prerequisites
Node.js (v18+) and MongoDB (local install or a free MongoDB Atlas cluster).

## How to Run

### 1. Backend
```
cd backend
npm install
cp .env.example .env      (on Windows: copy .env.example .env)
```
Open `.env` and fill in:
```
MONGO_URI=mongodb://127.0.0.1:27017/todoapp     # or your Atlas connection string
PORT=5000
```
Then start the server:
```
npm start
```
You should see "MongoDB connected" and "Server running on port 5000".

### 2. Frontend (in a second terminal)
```
cd frontend
npm install
npm start
```
Open http://localhost:3000

## API Endpoints
| Method | URL | Description | Status codes |
|--------|-----|-------------|--------------|
| GET | /api/tasks | Get all tasks | 200 |
| POST | /api/tasks | Add a task `{ "title": "..." }` | 201, 400 (empty title) |
| PUT | /api/tasks/:id | Update `title` and/or `completed` | 200, 400, 404 |
| DELETE | /api/tasks/:id | Delete a task | 200, 404 |

## Notes
- CORS is enabled only for `http://localhost:3000`.
- `.env` is not committed; `.env.example` lists the variable names.
