# Countdown Timer

A React Countdown Timer built using React Hooks and JavaScript timers.

## Problem Statement

Build a React component that works as a countdown timer.

### Requirements

- User can enter time in seconds or minutes.
- Examples:

    * `60` → 60 seconds
    * `1m` → 60 seconds
    * `5m` → **300** seconds
- Start button starts the countdown.
- Timer updates every second.
- Timer automatically stops at 0.
- Pause button pauses the timer.
- Resume button continues from the paused value.
- Reset button resets the timer to the original user input.

---

## Features

- Custom timer input
- Supports both seconds and minutes format
- Start Countdown
- Pause Countdown
- Resume Countdown
- Reset Countdown
- Automatic stop at 0
- Prevents direct input modification while timer is running

---

## Concepts Practiced

### React Hooks

- `useState`
- `useRef`

### JavaScript Concepts

- `setInterval()`
- `clearInterval()`
- String manipulation
- Conditional rendering
- Event handling

---

## Key Learning

### Why useRef was used?

`useRef` is used to store the interval ID returned by `setInterval()`.

The interval ID:

- Must survive component re-renders.
- Should not trigger re-renders when updated.

```javascript const intervalRef = useRef(null); ```

This allows:

```javascript clearInterval(intervalRef.current); ```

to stop the currently running timer.

---

## Input Examples

| User Input | Countdown Starts From |
| ---------- | --------------------- |
| 30         | 30 seconds            |
| 60         | 60 seconds            |
| 1m         | 60 seconds            |
| 2m         | 120 seconds           |
| 5m         | 300 seconds           |

---

## Project Structure

```text 
countdown-timer/ 
├── src/ 
├── public/ 
├── package.json 
└── **README**.md 
```

---

## Installation

Clone the repository:

```bash git clone <repository-url> ```

Move into project folder:

```bash cd 02-countdown-timer ```

Install dependencies:

```bash npm install ```

Run development server:

```bash npm run dev ```

Open:

```text [http://localhost:**5173**](http://localhost:**5173**) ```

---

## Future Improvements

- Display timer in MM:SS format
- Disable Resume button while timer is running
- Input validation
- Support hours format (e.g., 1h)
- Add sound notification when timer reaches 0
- Add progress indicator

---

## Tech Stack

- React
- JavaScript
- Vite

---

Part of the **React Coding Tasks** repository.