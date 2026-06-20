# Accordion Component

A React application that implements an FAQ Accordion where users can expand and collapse answers by clicking on questions.

## Problem Statement

Build an Accordion component that displays a list of questions and answers.

### Features Required

* Display a list of questions.
* Clicking a question expands its answer.
* Clicking the same question again collapses the answer.
* Only one accordion can remain open at a time.

### Example

```text
+ What is React?

Click →

- What is React?
React is a JavaScript library used to build user interfaces...
```

---

## Features

* Expand accordion items
* Collapse accordion items
* Single active accordion
* Dynamic rendering using arrays
* Clean and responsive UI

---

## Concepts Practiced

### React Concepts

* useState
* Conditional Rendering
* Event Handling
* Rendering Lists using map()
* State Management

### JavaScript Concepts

* Arrays
* Objects
* map()
* Dynamic UI Updates

---

## Project Structure

```text
11-accordion/
│
├── src/
│   ├── Accordion.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Data Structure Used

Each FAQ is represented as an object.

```javascript
{
  question: "What is React?",
  answer: "React is a JavaScript library..."
}
```

All FAQs are stored inside an array.

---

## State Management

### Active Accordion State

```javascript
const [accid, setAccId] = useState(null);
```

Stores the currently opened accordion.

Examples:

```text
accid = null  → No accordion open

accid = 0     → First accordion open

accid = 3     → Fourth accordion open
```

---

## How It Works

### Opening an Accordion

User clicks:

```text
+ What is React?
```

State updates:

```javascript
setAccId(0);
```

React re-renders and displays the answer.

---

### Closing an Accordion

User clicks:

```text
- What is React?
```

State updates:

```javascript
setAccId(null);
```

The answer is hidden.

---

## Conditional Rendering

Answer is displayed only when the current accordion is active.

```javascript
accid === id && <p>{item.answer}</p>
```

---

## Key Learning

Initially, multiple states were considered:

```javascript
expand
arr
accid
```

After optimization, only:

```javascript
accid
```

was required.

This follows an important React principle:

> Store the minimum amount of state necessary.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 11-accordion
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

* Smooth open/close animations
* Multiple accordions open simultaneously
* Nested accordions
* Search FAQs
* Dynamic FAQ data from API

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
* Dynamic UI Rendering
* Problem Solving
* State Optimization

---

Part of the React Coding Tasks repository.
