# TASK MANAGEMENT SYSTEM
A simple full-stack management web application for tracking tasks where you can create, view, update and delete tasks.

## Tech stack
Layer      | Technology
Frontend        React + vite
Backend         FastAPI(python)
Database        SQLite

## Project structure
```text
task-manager/
├── backend/
│   ├── database.py       # Database connection
│   ├── models.py         # Database table definitions
│   ├── schemas.py        # Data validation
│   ├── main.py           # API endpoints
│   ├── schema.sql        # SQL schema
│   └── tasks.db          # SQLite database (auto-created)
└── frontend/
    ├── public/
    │   └── index.html
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── components/
            ├── TaskList.jsx
            ├── TaskForm.jsx
            |── TaskCard.jsx
            |__index.css
```
## Features
Create, view, update and delete tasks.
Task status tracking: pending, in-progress, completed.
Visual color indication per status
Form validation
Error and loading state handling.

## Setup Instructions
### Prerequisites
python 3.10+
Node.js 16+
npm

## Clone the Repository
1. open your terminal and run
```git clone https://github.com/Ushindisidi/task-manager```
Then move into the project folder:
```cd task-manager```

## Backend Setup
Navigate to the backend folder:
```cd backend```
Create a virtual environment:
```python -m venv venv```
Activate the virtual environment:
```#windows source venv/scripts/activate```
```#Mac/Linux source venv/bin/activate```
you will see (venv) appear in your terminal, this means the virtual environment is active.

Install the required packages 
```pip install fastapi uvicorn sqlalchemy```

Start the backend server:
```uvicorn main:app --reload --port 8080```

The API will be running at:
http://127.0.0.1:8080
You can explore and test all endpoints at:
http://127.0.0.1:8080/docs

## 3. Frontend Setup
Open a new terminal window and navigate to the frontend folder:
```cd task-manager/frontend```
Install dependencies
```npm install```
Start the frontend development server:
```npm run dev```
The app will be running at:
http://localhost:5173

## API Endpoints
POST /api/tasks - Create a task
GET /api/tasks - Get all tasks
GET /api/tasks/{id} - Get a single task
PUT /api/tasks/{id} - Update a task
DELETE /api/tasks/{id} - Delete a task

## Database Schema
CREATE TABLE tasks (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT NOT NULL,
    description TEXT,
    status      TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'in_progress', 'completed')),
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    due_date    DATE
);

## Notes
The SQLite database (tasks.db) is auto-created when the backend starts for the first time, no manual setup needed
Port 8080 is used for the backend due to port 8000 being blocked on Windows
CORS is configured to allow all origins for development purposes
Always activate the virtual environment before running the backend