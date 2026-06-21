# Tabs Component

A React application that implements a dynamic Tabs Component using state management and conditional rendering.

## Problem Statement

Build a tabs component with multiple tabs.

### Features Required

* Three tabs:

  * Home
  * About
  * Contact
* Clicking a tab displays its corresponding content.
* Only one tab should be active at a time.

### Example

```text
Home | About | Contact

Click Home:
Displays Home Page

Click About:
Displays About Page

Click Contact:
Displays Contact Page
```

---

## Features

* Dynamic tab switching
* Active tab management
* Conditional content rendering
* Simple and reusable tab structure

---

## Concepts Practiced

### React Concepts

* useState
* Event Handling
* Conditional Rendering
* State Management
* Component Re-rendering

### JavaScript Concepts

* String Comparison
* Conditional Logic

---

## Project Structure

```text
tabs-component/
│
├── src/
│   ├── Tab.jsx
│
├── public/
├── package.json
└── README.md
```

---

## State Management

### Active Tab State

```javascript
const [activeTab, setActiveTab] = useState("home");
```

Stores the currently selected tab.

Examples:

```text
activeTab = "home"
activeTab = "about"
activeTab = "contact"
```

---

## How It Works

### Initial State

```javascript
activeTab = "home";
```

Output:

```text
Displays Home Page
```

---

### Clicking About

```javascript
setActiveTab("about");
```

Output:

```text
Displays About Page
```

---

### Clicking Contact

```javascript
setActiveTab("contact");
```

Output:

```text
Displays Contact Page
```

---

## Conditional Rendering

### Home Content

```javascript
activeTab === "home"
```

### About Content

```javascript
activeTab === "about"
```

### Contact Content

```javascript
activeTab === "contact"
```

Only the content of the active tab is displayed.

---

## Key Learning

The most important question while solving this task was:

> Which tab is currently active?

Instead of creating multiple states, a single state variable was enough.

This follows a core React principle:

> Store the minimum amount of state necessary.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 12-tabs-component
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

* Active tab highlighting
* Dynamic tabs using arrays and map()
* Icons for tabs
* Keyboard navigation support
* Responsive design

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React State Management
* Conditional Rendering
* Event Handling
* Dynamic UI Updates
* Problem Solving

---

Part of the React Coding Tasks repository.
