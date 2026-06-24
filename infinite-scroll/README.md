# Infinite Scroll

A React application that implements Infinite Scrolling to progressively load users as the user scrolls down the page.

## Problem Statement

Build an Infinite User List component.

### Features Required

* Load initial data.
* Detect when the user reaches the bottom of the page.
* Load additional users automatically.
* Continue loading until all users are displayed.

### Example

```text
Initial Load

User 1
User 2
...
User 10

↓ User Scrolls

User 11
User 12
...
User 20

↓ User Scrolls Again

User 21
...
```

---

## Features

* Infinite Scrolling
* Dynamic Data Loading
* Scroll Event Handling
* Automatic Content Loading
* End-of-List Detection
* Cleanup of Event Listeners

---

## Concepts Practiced

### React Concepts

* useState
* useEffect
* Component Lifecycle
* State Management
* Conditional Rendering
* Rendering Lists

### JavaScript Concepts

* Event Listeners
* Window Scroll Events
* Array slice()
* Cleanup Functions
* Functional State Updates

---

## Project Structure

```text
15-infinite-scroll/
│
├── src/
│   ├── Scroll.jsx
│   ├── users.json
│
├── public/
├── package.json
└── README.md
```

---

## How It Works

### Step 1: Initial Load

Initially only a subset of users is displayed.

```javascript
const [visibleUsers, setVisibleUsers] = useState(10);
```

Output:

```text
User 1
...
User 10
```

---

### Step 2: Attach Scroll Listener

A scroll event listener is attached when the component mounts.

```javascript
window.addEventListener("scroll", handleScroll);
```

---

### Step 3: Detect Bottom of Page

```javascript
window.innerHeight + window.scrollY >=
document.documentElement.scrollHeight - 10
```

This condition checks whether the user has reached the bottom of the page.

---

### Step 4: Load More Users

```javascript
setVisibleUsers(prev => prev + 10);
```

The next batch of users becomes visible.

Example:

```text
10 users visible
↓
20 users visible
↓
30 users visible
```

---

### Step 5: Stop When All Users Are Loaded

```javascript
if (prev >= users.length) {
  return prev;
}
```

Prevents unnecessary state updates after all users have been displayed.

---

### Step 6: Cleanup

```javascript
return () => {
  window.removeEventListener("scroll", handleScroll);
};
```

Removes the event listener when the component unmounts.

---

## Data Flow

```text
Component Mount
        ↓
Display First 10 Users
        ↓
User Scrolls
        ↓
Reached Bottom?
        ↓
       Yes
        ↓
Load Next 10 Users
        ↓
All Users Loaded?
        ↓
      No → Continue
      Yes → Stop Loading
```

---

## Sample Output

```text
User 1
User 2
User 3
...
User 10

↓ Scroll

User 11
User 12
...
User 20
```

---

## Key Learning

Infinite Scroll is similar to Pagination.

Pagination:

```text
Click Next
↓
Load Next Page
```

Infinite Scroll:

```text
Reach Bottom
↓
Load More Data Automatically
```

The main difference is that the user does not need to click a button.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 15-infinite-scroll
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

* API-based Infinite Scroll
* Loading Spinner while fetching data
* Debounced Scroll Events
* Intersection Observer API
* Search + Infinite Scroll
* Virtualized Lists

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React Hooks
* Event Handling
* Infinite Scroll Implementation
* State Management
* Conditional Rendering
* Cleanup Functions
* Dynamic Data Loading

---

Part of the React Coding Tasks repository.
