# OTP Input Component

A React component that implements a 4-digit OTP (One-Time Password) input with automatic focus management, input validation, and keyboard navigation.

## Problem Statement

Build a 4-digit OTP verification component.

### Features Required

- Four input boxes
- Auto move focus to next input
- Backspace moves focus to previous input
- Display the final OTP

---

## Features

- Four controlled input fields
- Only numeric input allowed
- Only one digit per input box
- Automatically moves cursor to the next input
- Backspace navigates to the previous input when the current input is empty
- Displays the entered OTP
- Uses `useRef` for focus management

---

## Concepts Practiced

### React Concepts

- useState
- useRef
- Controlled Components
- Event Handling
- State Management

### JavaScript Concepts

- Arrays
- Spread Operator
- Array Updates
- Regular Expressions
- Keyboard Events
- DOM Focus Management

---

## Project Structure

```text
otp-input/
│
├── src/
│   ├── Otp.jsx
│
├── public/
├── package.json
└── README.md
```

---

## How It Works

### Step 1: Initialize OTP State

```javascript
const [otp, setOtp] = useState(["", "", "", ""]);
```

Each input box controls one element of the OTP array.

---

### Step 2: Validate User Input

Each input accepts:

- Only numeric characters
- Only one digit

Invalid input is ignored.

---

### Step 3: Update OTP

When the user types a valid digit:

```text
Previous OTP
      ↓
Create Copy
      ↓
Update Current Index
      ↓
Update State
```

This follows React's immutable state update pattern.

---

### Step 4: Auto Focus

After entering a digit:

```text
Input 1
     ↓
Focus moves to
     ↓
Input 2
```

This is achieved using `useRef`.

---

### Step 5: Backspace Navigation

Behavior:

```text
Current Input contains digit

↓

Press Backspace

↓

Digit is deleted

↓

Cursor stays
```

If the current input is already empty:

```text
Current Input Empty

↓

Press Backspace

↓

Move focus to previous input
```

---

### Step 6: Display OTP

The final OTP is displayed by joining all digits.

```javascript
otp.join("")
```

---

## Example

Initially

```text
[ ] [ ] [ ] [ ]
```

User enters

```text
1
```

```text
[1] [ ] [ ] [ ]
     ↑
Cursor automatically moves here
```

User enters

```text
2
```

```text
[1] [2] [ ] [ ]
         ↑
```

Final OTP

```text
OTP: 1234
```

---

## Sample Output

```text
[1] [2] [3] [4]

OTP: 1234
```

---

## Key Learning

This project demonstrates several commonly asked React interview concepts:

```text
Controlled Inputs
        ↓
Input Validation
        ↓
Immutable State Updates
        ↓
Keyboard Events
        ↓
DOM Manipulation
        ↓
Focus Management
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd 18-otp-input
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

- Generate input boxes dynamically using `map()`
- Support configurable OTP length (4, 6, or 8 digits)
- Paste entire OTP
- Auto-submit after OTP completion
- Mobile-friendly styling
- Accessibility improvements

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
- Controlled Components
- Keyboard Event Handling
- DOM Manipulation
- Input Validation
- Focus Management
- Immutable State Updates

---

Part of the **React Coding Tasks** repository.