# Sort Users Table

A React application that displays a list of users and allows sorting by Name and Age in both ascending and descending order.

## Problem Statement

Build a User Table Sorting component.

### Features Required

* Display:

  * Name
  * Age
* Sort by Name
* Sort by Age
* Toggle Ascending / Descending order

---

## Features

* Display user data in a table-like layout
* Sort users alphabetically by name
* Sort users by age
* Ascending and Descending sorting
* Reset sorting and restore original order
* Case-insensitive name sorting

---

## Concepts Practiced

### React Concepts

* useState
* Conditional Rendering
* Event Handling
* State Management
* Rendering Lists

### JavaScript Concepts

* Array sort()
* Array Spread Operator (...)
* Sorting Numbers
* Sorting Strings
* localeCompare()
* Immutable Data Handling

---

## Project Structure

```text
16-sort-users-table/
│
├── src/
│   ├── Sort.jsx
│
├── public/
├── package.json
└── README.md
```

---

## User Data Structure

```javascript
{
  id: 1,
  name: "Alice",
  age: 24
}
```

Each user contains:

* id
* name
* age

---

## How It Works

### Step 1: Original Data

The application starts with a list of users.

```javascript
const users = [...]
```

---

### Step 2: Create a Copy

Before sorting, a copy of the array is created.

```javascript
let sortedUsers = [...users];
```

This prevents mutation of the original array.

---

### Step 3: Sort by Name

#### Ascending (A → Z)

```javascript
sortedUsers.sort((a, b) =>
  a.name.toLowerCase().localeCompare(
    b.name.toLowerCase()
  )
);
```

Example:

```text
Alice
Aman
Ananya
Bob
Charlie
```

---

#### Descending (Z → A)

```javascript
sortedUsers.sort((a, b) =>
  b.name.toLowerCase().localeCompare(
    a.name.toLowerCase()
  )
);
```

Example:

```text
Zara
Yash
Xavier
William
```

---

### Step 4: Sort by Age

#### Ascending

```javascript
sortedUsers.sort((a, b) => a.age - b.age);
```

Output:

```text
20
21
22
23
24
...
```

---

#### Descending

```javascript
sortedUsers.sort((a, b) => b.age - a.age);
```

Output:

```text
35
34
33
32
31
...
```

---

### Step 5: Reset Sorting

```javascript
setSortAge(null);
setSortName(null);
```

Restores the original order of users.

---

## Data Flow

```text
User Clicks Sort Button
           ↓
Update Sort State
           ↓
Create Array Copy
           ↓
Apply Sorting Logic
           ↓
Render Sorted Users
```

---

## Sample Output

```text
Name       Age

Alice      24
Bob        30
Charlie    22
David      28
...
```

---

## Key Learning

This project demonstrates how to sort arrays of objects using different properties.

### Numeric Sorting

```javascript
a.age - b.age
```

### String Sorting

```javascript
a.name.localeCompare(b.name)
```

### Immutable Sorting

```javascript
const sortedUsers = [...users];
```

Instead of mutating the original array.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 16-sort-users-table
```

Install dependencies:

```bash
npm install
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

* Sort Indicator (↑ ↓)
* Table Layout
* Search + Sort
* Pagination + Sort
* Multi-column Sorting
* API-based User Data

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React State Management
* Event Handling
* Sorting Algorithms
* String Comparison
* Numeric Comparison
* Immutable Updates
* Rendering Dynamic Data

---

Part of the React Coding Tasks repository.
