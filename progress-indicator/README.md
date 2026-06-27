# Progress Bar

A React component that simulates a progress indicator using a gradually filling progress bar.

## Problem Statement

Build a Progress Indicator component.

### Features Required

- Start button
- Progress increases gradually
- Stop automatically at 100%

---

## Features

- Animated progress bar
- Start progress
- Automatic stop at 100%
- Reset functionality
- Displays current progress percentage
- Prevents multiple intervals
- Proper cleanup using useEffect

---

## Concepts Practiced

### React Concepts

- useState
- useRef
- useEffect
- State Management
- Component Lifecycle
- Event Handling

### JavaScript Concepts

- setInterval()
- clearInterval()
- Functional State Updates
- Stale State Prevention

---

## Project Structure

```text
progress-bar/
│
├── src/
│   ├── Progress.jsx
│
├── public/
├── package.json
└── README.md
```

---

## How It Works

### Step 1: Initial State

```javascript
const [progress, setProgress] = useState(0);
```

Progress starts from **0%**.

---

### Step 2: Start Progress

Clicking the **Start** button creates an interval.

```text
Start
   ↓
Create Interval
   ↓
Increase Progress Every 100 ms
```

---

### Step 3: Functional State Update

The progress value is updated using a functional updater.

```javascript
setProgress(prev => {
    const next = prev + 1;
    ...
});
```

This avoids stale state issues when using timers.

---

### Step 4: Stop at 100%

Once progress reaches 100%:

```text
Progress
    ↓
100%
    ↓
clearInterval()
    ↓
Stop Animation
```

---

### Step 5: Reset

The Reset button:

- Stops the interval
- Sets progress back to 0%
- Makes the component reusable

---

## Sample Output

```text
██████████████████░░░░░░░░ 75%

Start    Reset
```

After completion:

```text
██████████████████████████ 100%

Progress Completed
```

---

## Key Learning

This project demonstrates a common React timer workflow.

```text
Click Start
      ↓
Create Interval
      ↓
Update State
      ↓
Re-render UI
      ↓
Stop at 100%
      ↓
Cleanup Interval
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd 19-progress-bar
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open

```text
http://localhost:5173
```

---

## Future Improvements

- Pause / Resume functionality
- Custom progress speed
- Different progress bar colors
- Circular progress indicator
- Percentage displayed inside the bar
- Smooth CSS animations

---

## Tech Stack

- React
- JavaScript
- Vite

---

## Skills Demonstrated

- React Hooks
- useState
- useRef
- useEffect
- Timer Management
- Functional State Updates
- DOM Rendering
- CSS Transitions
- Progress Indicators

---

Part of the **React Coding Tasks** repository.