# Pagination Component

A React application that displays users with pagination support.

## Problem Statement

Build a pagination component that displays users page by page.

### Features Required

* Display 10 users per page
* Previous button
* Next button
* Current page indicator
* Prevent navigation beyond available pages

### Example

```text
Page 1

User 1
User 2
...
User 10

[Previous]
[Next]
```

---

## Features

* Displays 10 users per page
* Previous page navigation
* Next page navigation
* Current page indicator
* Automatically handles datasets of different sizes
* Disables Previous button on first page
* Disables Next button on last page

---

## Concepts Practiced

### React Concepts

* useState
* Event Handling
* Conditional Button States
* Rendering Lists
* Derived Values

### JavaScript Concepts

* Array.slice()
* Array.map()
* Math.ceil()
* Pagination Logic

---

## Project Structure

```text
09-pagination/
│
├── src/
│   ├── Pagination.jsx
│   └── users.json
│
├── public/
├── package.json
└── README.md
```

---

## State Management

### Current Page State

```javascript
const [currPage, setCurrPage] = useState(0);
```

Stores the currently active page.

* Page 0 → Users 1–10
* Page 1 → Users 11–20
* Page 2 → Users 21–30

and so on.

---

## Pagination Logic

### Total Pages

```javascript
const totalPages = Math.ceil(users.length / 10);
```

Example:

```text
87 Users
87 / 10 = 8.7
Math.ceil(8.7) = 9 pages
```

---

### Display Current Users

```javascript
const slicedArray = users.slice(
  currPage * 10,
  (currPage + 1) * 10
);
```

Example:

#### Page 1

```javascript
slice(0, 10)
```

Displays:

```text
User 1 → User 10
```

#### Page 2

```javascript
slice(10, 20)
```

Displays:

```text
User 11 → User 20
```

---

## Navigation Logic

### Previous Button

```javascript
if (currPage > 0)
```

Moves to the previous page.

---

### Next Button

```javascript
if (currPage < totalPages - 1)
```

Moves to the next page.

---

### Button Disabling

First Page:

```javascript
disabled={currPage === 0}
```

Last Page:

```javascript
disabled={currPage === totalPages - 1}
```

Prevents invalid navigation.

---

## How It Works

1. Users data is loaded from `users.json`.
2. Current page is stored in state.
3. Based on the current page, only 10 users are selected.
4. Clicking Next shows the next set of users.
5. Clicking Previous shows the previous set of users.
6. Buttons are disabled when limits are reached.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 09-pagination
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Future Improvements

* Page number buttons
* Jump to first page
* Jump to last page
* User search with pagination
* Server-side pagination
* Dynamic users per page selector

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React State Management
* Pagination Logic
* Array Manipulation
* UI Navigation Controls
* Conditional Rendering
* Problem Solving

---

Part of the **React Coding Tasks** repository.
