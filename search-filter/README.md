# Search Filter

A React application that dynamically filters and displays fruits based on user search input.

## Problem Statement

Build a search filter component.

### Given Data

```javascript
[
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Guava",
  "Strawberry",
  "Blueberry",
  "Blackberry",
  "Kiwi",
  "Pomegranate",
  "Peach",
  "Pear",
  "Cherry",
  "Litchi",
  "Dragon Fruit",
  "Muskmelon"
]
```

### Features Required

* Search input field
* Filter results dynamically while typing
* Case-insensitive matching
* Display matching fruits only
* Show all fruits when search box is empty

### Example

Search:

```text
ma
```

Results:

```text
Mango
Pomegranate
```

---

## Features

* Real-time search filtering
* Case-insensitive search
* Controlled input field
* Dynamic UI updates
* Displays all fruits by default
* No page refresh required

---

## Concepts Practiced

### React Hooks

* useState

### React Concepts

* Controlled Components
* State Management
* Re-rendering
* Derived State
* Rendering Lists

### JavaScript Concepts

* filter()
* includes()
* toLowerCase()
* Array Iteration

---

## Project Structure

```text
08-search-filter/
│
├── src/
├── public/
├── package.json
├── README.md
└── node_modules/
```

---

## State Design

### Input State

```javascript
const [input, setInput] = useState("");
```

Stores the search text entered by the user.

---

## Derived Data

Instead of storing filtered results in state:

```javascript
const filteredFruits = fruits.filter(...)
```

The filtered array is derived from:

* Original fruits array
* User input

This follows React's principle:

> Store the minimum possible state and derive everything else.

---

## Key Learnings

### Controlled Components

```javascript
<input
  value={input}
  onChange={handleChange}
/>
```

React controls the input value using state.

---

### Dynamic Filtering

```javascript
fruits.filter(fruit =>
  fruit.toLowerCase().includes(input.toLowerCase())
)
```

Filters fruits matching the search query.

---

### Case-Insensitive Search

```javascript
fruit.toLowerCase()
input.toLowerCase()
```

Allows:

```text
ma
MA
Ma
mA
```

to produce the same results.

---

### Derived State

Initially, filtered fruits were stored in state.

After optimization, filtered fruits are calculated directly from:

```javascript
input
```

and

```javascript
fruits
```

This avoids unnecessary state management.

---

## How It Works

### Initial Render

All fruits are displayed.

### User Types

1. User enters text.
2. Input state updates.
3. Component re-renders.
4. Fruits array is filtered.
5. Matching fruits are displayed.

### User Clears Search

1. Input becomes empty.
2. Filter condition matches all fruits.
3. Entire fruit list is displayed again.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into project:

```bash
cd 08-search-filter
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Future Improvements

* Highlight matching text
* Show "No Results Found" message
* Search multiple categories
* Add debounce functionality
* Fetch search results from API
* Search history
* Search suggestions

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React State Management
* Controlled Components
* Array Filtering
* Case-Insensitive Search
* Derived State
* Dynamic Rendering
* Frontend Problem Solving

---

Part of the **React Coding Tasks** repository.
