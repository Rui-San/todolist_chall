# Todo List Challenge - How to Build and Run


## Prerequisites
- **Node.js & npm** (LTS recommended)
- **MongoDB Atlas** account (or local MongoDB)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Rui-San/todolist_chall.git
```

### 2. Install dependencies

#### Backend (server):
```bash
cd server
npm i
```

#### Frontend (client):
```bash
cd client
npm i
```

### 3. Configure environment variables
Create a `.env` file in the `server` directory:

WIP...


### 4. Run the server
```bash
cd server
npm run dev
```
- The server will start on `http://localhost:[PORT]`
- `[PORT]` being the port defined in `.env`

### 5. Run the frontend (client)
```bash
cd client
npm run dev
```
- The frontend will start on `http://localhost:5173` (default Vite port)


## Server Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a task by it's id (business id)
- `GET /tasks` - Get all tasks in the system
- `PATCH /tasks/:id` - Set task with X id as completed
- `DELETE /tasks/:id` - Delete task with X id 