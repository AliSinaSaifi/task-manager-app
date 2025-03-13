# Task Manager App

A simple **Task Manager API** built using **Node.js**, **Express.js**, and **MongoDB**. This API allows users to **create, read, update, and delete tasks**.

## Features
- ✅ **Create** a new task
- 📋 **Get all tasks**
- 🔍 **Get a single task by ID**
- ✏️ **Update** a task
- ❌ **Delete** a task
- 🌐 RESTful API with structured endpoints
- ⚡ **Async/Await** for handling database operations
- 🛠 **Error handling middleware** for better debugging

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **MongoDB & Mongoose** - NoSQL Database
- **dotenv** - Environment variable management
- **Middleware** for error handling

---
API Routes
Method	Endpoint	Description
GET	/api/v1/tasks	Get all tasks
GET	/api/v1/tasks/:id	Get a single task
POST	/api/v1/tasks	Create a new task
PATCH	/api/v1/tasks/:id	Update a task
DELETE	/api/v1/tasks/:id	Delete a task
---

## Installation
Create a .env file and add your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string
PORT=3000

