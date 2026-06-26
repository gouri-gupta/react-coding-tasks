# Stopwatch

A React application that implements a fully functional Stopwatch with Start, Pause, Resume, and Reset functionality while displaying elapsed time in **HH:MM:SS** format.

## Problem Statement

Build a Stopwatch component.

### Features Required

* Start the stopwatch
* Pause the stopwatch
* Resume the stopwatch
* Reset the stopwatch
* Display elapsed time

### Example

```text
00:00:12
```

---

## Features

* Start timer
* Pause timer
* Resume timer
* Reset timer
* Display elapsed time in HH:MM:SS format
* Disable buttons based on stopwatch state
* Automatic cleanup of intervals

---

## Concepts Practiced

### React Concepts

* useState
* useRef
* useEffect
* State Management
* Conditional Rendering
* Event Handling

### JavaScript Concepts

* setInterval()
* clearInterval()
* Functional State Updates
* Time Calculations
* Cleanup Functions
* Math.trunc()

---

## Project Structure

```text
17-stopwatch/
│
├── src/
│   ├── Stopwatch.jsx
│
├── public/
├── package.json
└── README.md
```

---

## State Management

The application uses three pieces of state.

### Elapsed Time

Stores the total elapsed time in seconds.

```javascript
const [elapsedTime, setElapsedTime] = useState(0);
```

---

### Start State

Tracks whether the stopwatch has been started.

```javascript
const [start, setStart] = useState(false);
```

Used to:

* Disable the Start button after starting
* Enable the Reset button

---

### Running State

Tracks whether the stopwatch is currently running.

```javascript
const [running, setRunning] = useState(false);
```

Used to:

* Enable/Disable Pause button
* Enable/Disable Resume button

---

## How It Works

### Step 1: Start

When the Start button is clicked:

```text
Start
    ↓
Create Interval
    ↓
Increment elapsedTime every second
```

---

### Step 2: Pause

```text
Pause
    ↓
Clear Interval
    ↓
Keep elapsed time unchanged
```

---

### Step 3: Resume

```text
Resume
    ↓
Create New Interval
    ↓
Continue counting from previous time
```

---

### Step 4: Reset

```text
Reset
    ↓
Stop Interval
    ↓
elapsedTime = 0
    ↓
Reset button states
```

---

## Time Conversion

The stopwatch stores only **total elapsed seconds**.

Example:

```text
3665 seconds
```

Converted into:

```text
01:01:05
```

using:

```text
Hours
Minutes
Seconds
```

This keeps the state simple while allowing formatted output.

---

## Data Flow

```text
Start
   ↓
setInterval()
   ↓
elapsedTime++
   ↓
Calculate Hours
Calculate Minutes
Calculate Seconds
   ↓
Render HH:MM:SS
```

---

## Sample Output

```text
00:00:00

↓

00:00:15

↓

00:03:42

↓

01:18:25
```

---

## Key Learning

This project demonstrates several important React concepts:

* Managing intervals using `useRef`
* Cleaning up intervals with `useEffect`
* Deriving display values from a single state
* Preventing multiple interval instances
* Managing UI state using React Hooks

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 17-stopwatch
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

* Millisecond support
* Lap functionality
* Keyboard shortcuts
* Responsive UI
* Dark Mode
* Circular timer animation

---

## Tech Stack

* React
* JavaScript
* Vite

---

## Skills Demonstrated

* React Hooks
* Timer Management
* State Management
* Event Handling
* Interval Cleanup
* Time Formatting
* Conditional Rendering

---

Part of the React Coding Tasks repository.
