# Debounced Search

A React application demonstrating search optimization using the Debouncing technique.

## Problem Statement

Build a search component that delays API calls until the user stops typing.

### Features Required

* Search input field
* API call should not happen on every keystroke
* Wait 500ms after the user stops typing
* Only one API call should occur for a search sequence

### Example

User types:

r

re

rea

react

Instead of 5 API calls, only 1 API call should be executed after the user stops typing for 500ms.

---

## Why Debouncing?

Without debouncing:

r → API Call

re → API Call

rea → API Call

reac → API Call

react → API Call

Total: 5 API Calls

This creates:

* Unnecessary network requests
* Increased server load
* Poor performance
* Higher infrastructure costs

With debouncing:

r

re

rea

reac

react

(wait 500ms)

API Call

Total: 1 API Call

Benefits:

* Better performance
* Reduced server load
* Improved user experience
* Optimized API usage

---

## Features

* Real-time search input
* Debounced API requests
* 500ms delay before search execution
* Prevents unnecessary API calls
* Implemented using two different approaches

---

## Concepts Practiced

### React Hooks

* useState
* useRef
* useEffect

### React Concepts

* Event Handling
* Controlled Components
* Side Effects
* Cleanup Functions
* State Management

### JavaScript Concepts

* setTimeout()
* clearTimeout()
* Debouncing
* Performance Optimization

---

## Version 1 - Event Handler Based Debouncing

### Flow

User Types

↓

Cancel Previous Timer

↓

Start New Timer

↓

Wait 500ms

↓

API Call

### Key Learning

Debouncing logic is implemented directly inside the input change handler.

This approach is simple and easy to understand.

---

## Version 2 - useEffect Based Debouncing

### Flow

User Types

↓

State Updates

↓

useEffect Runs

↓

Start Timer

↓

Cleanup Previous Timer

↓

Wait 500ms

↓

API Call

### Key Learning

This approach follows React's philosophy more closely.

State changes trigger effects, and cleanup functions remove previous timers.

---

## Cleanup Function

### Why Cleanup is Needed

Suppose user types:

r

re

rea

Without cleanup:

Timer 1

Timer 2

Timer 3

All timers execute.

Multiple API calls occur.

With cleanup:

Timer 1 Cancelled

Timer 2 Cancelled

Timer 3 Executes

Only one API call occurs.

---

## How It Works

### User Starts Typing

A timer is started.

### User Types Again Before 500ms

The previous timer is cancelled.

A new timer starts.

### User Stops Typing

The timer completes.

The API call is executed.

---

## Project Structure

```text
10-debounced-search/
│
├── src/
│   ├── Version1.jsx
│   ├── Version2.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into project:

```bash
cd 10-debounced-search
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

## Real World Applications

Debouncing is commonly used in:

* Google Search Suggestions
* Amazon Product Search
* LinkedIn Search
* GitHub Repository Search
* Autocomplete Components
* Filtering Large Datasets

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React State Management
* Debouncing
* Performance Optimization
* useEffect Cleanup
* useRef Usage
* Event Handling
* Frontend Optimization Techniques

---

Part of the React Coding Tasks repository.
