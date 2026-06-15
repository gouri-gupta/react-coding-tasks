# Todo Application

A simple React Todo Manager that allows users to add, delete, and mark tasks as completed.

## Problem Statement

Build a simple Todo application.

### Features Required

* Add a task
* Delete a task
* Mark a task as completed
* Display all tasks

### Example

Input:

Buy Milk

[Add]

Output:

☐ Buy Milk

☐ Learn React

☑ Complete DSA Revision

---

## Features

* Add new tasks
* Delete existing tasks
* Mark tasks as completed
* Toggle task completion status
* Display all tasks dynamically
* Prevent empty task submissions
* Generate unique task IDs using UUID

---

## Concepts Practiced

### React Hooks

* useState

### React Concepts

* Controlled Components
* State Management
* Rendering Lists
* Event Handling
* Immutable State Updates
* Conditional Rendering

### JavaScript Concepts

* Arrays
* Objects
* Spread Operator (`...`)
* map()
* filter()
* UUID Generation

---

## Project Structure

```text
07-todo-application/
│
├── src/
├── public/
├── package.json
├── README.md
└── node_modules/
```

---

## State Structure

Each task is stored as an object:

```javascript
{
  id: "unique-id",
  text: "Buy Milk",
  completed: false
}
```

The complete task list is stored as an array:

```javascript
[
  {
    id: "1",
    text: "Buy Milk",
    completed: false
  },
  {
    id: "2",
    text: "Learn React",
    completed: true
  }
]
```

---

## Key Learnings

### 1. Adding Items to an Array State

```javascript
setTask([...task, newTask]);
```

Creates a new array and adds the new task.

---

### 2. Deleting Items Using filter()

```javascript
task.filter(item => item.id !== id);
```

Removes the selected task while keeping the original array immutable.

---

### 3. Updating a Specific Object Using map()

```javascript
task.map(item =>
  item.id === id
    ? { ...item, completed: !item.completed }
    : item
);
```

Updates only the selected task without mutating state.

---

### 4. State Immutability

Never mutate state directly.

❌ Bad

```javascript
task.push(newTask);
```

✅ Good

```javascript
setTask([...task, newTask]);
```

React detects state changes correctly when new arrays/objects are created.

---

## How It Works

### Add Task

1. User enters task text.
2. Clicks **Add Task**.
3. A new task object is created.
4. UUID is assigned.
5. Task is added to the task list.

### Delete Task

1. User clicks **Delete Task**.
2. Task ID is passed to the delete handler.
3. filter() removes the task.
4. React re-renders the updated list.

### Mark Task Completed

1. User clicks the checkbox.
2. Task ID is passed to the completion handler.
3. map() updates only the selected task.
4. React re-renders the UI.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd 07-todo-application
```

Install dependencies:

```bash
npm install
```

Install UUID package:

```bash
npm install uuid
```

Run the application:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Future Improvements

* Edit Task
* Task Priority Levels
* Due Dates
* Search Tasks
* Filter Completed Tasks
* Local Storage Persistence
* Drag and Drop Reordering
* Dark Mode
* Backend Integration

---

## Tech Stack

* React
* JavaScript
* Vite
* UUID

---

## Skills Demonstrated

* React State Management
* Controlled Components
* CRUD Operations
* Array Manipulation
* Object Manipulation
* Functional Updates
* Component Re-rendering
* Frontend Problem Solving

---

Part of the **React Coding Tasks** repository.
