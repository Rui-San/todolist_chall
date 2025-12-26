# Todo List Challenge - Build & Run Guide

This document outlines the steps required to build, configure, and run this application.

## System Requirements

To run this project locally, the following tools must be installed on your system:

### 1. Node.js Runtime
* **Windows:**
    1.  Download the **LTS (Long Term Support)** version from [nodejs.org](https://nodejs.org/).
    2.  Run the installer and follow the prompts.
* **Linux (Ubuntu/Debian):**
    ```bash
    sudo apt update
    sudo apt install nodejs npm -y
    ```

### 2. Database (MongoDB)
The application requires a MongoDB connection. You may use a local instance or a cloud provider.

* **Option A: MongoDB Atlas (Recommended)**
    * Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    * Obtain your connection string (format: `mongodb+srv://...`).
    * *Ensure your IP is whitelisted in the Network Access settings.*

* **Option B: Local MongoDB**
    * **Windows:** Install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
    * **Linux:** Install via terminal: `sudo apt install -y mongodb` (or follow official docs).

---

## Installation & Setup

### 1. Extract/Clone the Project
```bash
git clone [https://github.com/Rui-San/todolist_chall.git](https://github.com/Rui-San/todolist_chall.git)
cd todolist_chall
```

### 2. Install Dependencies
Dependencies must be installed for both the server (backend) and client (frontend).

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

---

## Configuration

The server requires environment variables to connect to the database.

1.  Navigate to the `server` directory
2.  Create a file named `.env`
3.  Paste the following configuration into the file:

```properties
# Application Port
PORT=5000

# Database Connection:

# 1. If using Cloud Atlas use your connection string:
MONGO_URI=mongodb+srv://user:<password>@cluster.mongodb.net/todolist_db

# 2. If using Local DB:
MONGO_URI=mongodb://localhost:27017/todolist_db

```

---

## Running the Application

You will need two terminal windows, one for the backend and one for the frontend.

### 1. Start the Backend (Server)
In your first terminal:
```bash
cd server
npm run dev
```
* **Success Indicator:** Output should read `Server is running on port 5000` and `MongoDB Connected Successfully`.

### 2. Start the Frontend (Client)
In a second terminal:
```bash
cd client
npm run dev
```
* **Success Indicator:** Output will show a local URL, if port `5173` isn't being used, it'll be `http://localhost:5173`.

---

## Verifying the Deployment

1.  Open your web browser.
2.  Navigate to `http://localhost:5173`.
3.  **Test the features:**
    * **Create:** Navigate to /tasks and create a new task.
    * **Read:** Verify that task appears in the list.
    * **Complete Task:** Check the box to mark a task as completed.
    * **Delete:** Click the delete icon to remove a task.

## API References

If you wish to test the backend API independently (e.g., via Postman), the following endpoints are available on `http://localhost:5000` if server is running:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Retrieve all tasks |
| `POST` | `/tasks` | Create a task |
| `PATCH` | `/tasks/:id` | Set task as completed |
| `DELETE` | `/tasks/:id` | Delete a task |