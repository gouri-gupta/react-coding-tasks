# Digital Clock

A React Digital Clock that displays the current local time and updates automatically every second.

## Problem Statement

Build a React component that displays the current time.

### Requirements

- Display current local time.
- Show hours, minutes, and seconds.
- Update automatically every second.
- Use React Hooks.
- Clean up resources when the component unmounts.

### Example

```text 
10:45:23 PM
 ```

---

## Features

- Real-time clock updates
- Displays hours, minutes, and seconds
- Automatic UI refresh every second
- Uses React Hooks
- Proper interval cleanup using useEffect

---

## Concepts Practiced

### React Hooks

- useState
- useEffect

### JavaScript Concepts

- Date Object
- setInterval()
- clearInterval()
- Side Effects
- Cleanup Functions

---

## Key Learning

### Why useEffect?

The clock needs to update continuously.

useEffect is used to start an interval when the component mounts.

### Why Cleanup is Important?

Without cleanup, intervals continue running even after the component is removed from the page.

Cleanup prevents:

- Memory leaks
- Unnecessary background execution
- Performance issues

Example:

```javascript 
return () => clearInterval(id); 
```

---

## How It Works

## Component renders.

## Current time is obtained using the Date object.
3. useEffect starts an interval.
## Every second:

    * A new Date object is created.
    * Hours, minutes, and seconds are updated.
## React re-renders the UI.
## When component unmounts, the interval is cleared.

---

## Project Structure

```text 
digital-clock/ 
├── src/ 
├── public/ 
├── package.json 
└── **README**.md
 ```

---

## Installation

Clone the repository:

```bash git clone <repository-url> ```

Navigate to the project:

```bash cd 03-digital-clock ```

Install dependencies:

```bash npm install ```

Run the application:

```bash npm run dev ```

Open:

```text [http://localhost:**5173**](http://localhost:**5173**) ```

---

## Future Improvements

- Add AM / PM format
- Add 24-hour / 12-hour toggle
- Add multiple timezone support
- Display current date
- Improve UI styling
- Add live timezone selector

---

## Tech Stack

- React
- JavaScript
- Vite

---

Part of the React Coding Tasks repository.