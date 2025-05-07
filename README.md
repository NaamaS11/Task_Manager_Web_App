# Task Manager Web App

A task management web application built with Node.js, Express, EJS, and MySQL.  
The app allows users to add, delete, complete, and view tasks, with an integrated logging system managed via custom events.

---

## Project Structure

```
project/
├── Controllers/
│   ├── logController.js
│   └── taskController.js
├── Routers/
│   ├── logs.js
│   └── tasks.js
├── Services/
│   └── logEvent.js
├── Views/
│   ├── addTaskForm.ejs
│   ├── logs.ejs
│   └── tasks.ejs
├── db/
│   └── config.js
├── .env
├── app.js
├── package.json
├── package-lock.json
└── logs.txt  (auto-generated)
```

---

## How to Run the App

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create the MySQL Database**  
   Make sure to create a MySQL database named `DB` and add the following table:
   ```sql
   CREATE TABLE tasks (
     ID INT AUTO_INCREMENT PRIMARY KEY,
     taskStatus VARCHAR(50),
     task_context TEXT
   );
   ```

3. **Configure Environment Variables (`.env`)**
   ```env
   PORT=3000
   HOST=localhost
   USER=root
   PASSWORD=mysql24
   DATABASE=DB
   DB_PORT=3306
   ```

4. **Start the Server**
   ```bash
   node app.js
   ```

---

## Main Routes

### 🔹 Task Management
- `GET /tasks` – View all tasks  
- `GET /tasks/add` – Add new task form  
- `POST /tasks/add` – Submit new task  
- `PUT /tasks/:id/complete` – Mark task as complete  
- `DELETE /tasks/:id` – Delete a task  

### 🔹 Logs
- `GET /logs` – View logs  
- `DELETE /logs` – Delete the log file  

---

## Core Logic

- **Service Layer** (`Services/logEvent.js`) listens to custom `"log"` events and appends entries to `logs.txt` with a timestamp.  
- **Controllers** handle task and log logic such as adding, updating, or deleting entries.  
- **Middlewares** in the routers handle validation and method overrides.  
- **Views** (EJS templates) render dynamic HTML with Bootstrap for styling.

---

## Main Dependencies

- express  
- ejs  
- mysql2  
- date-fns  
- method-override
