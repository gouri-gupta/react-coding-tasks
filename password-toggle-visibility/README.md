# Password Visibility Toggle

A React application that allows users to show and hide their password using button controls.

## Problem Statement

Build a password input component.

### Requirements

- Display a password input field.
- Provide a **Show** button.
- Provide a **Hide** button.
- Allow users to toggle password visibility.

### Example

Initial State:

```text 
Password: ********

[Show] [Hide] 
```

After Clicking Show:

```text 
Password: myPassword123

[Show] [Hide] 
```

---

## Features

- Password input field
- Show password functionality
- Hide password functionality
- Controlled input component
- Dynamic input type switching

---

## Concepts Practiced

### React Hooks

- useState

### React Concepts

- Controlled Components
- State Management
- Dynamic Props
- Event Handling
- Re-rendering

### JavaScript Concepts

- Boolean State
- Conditional Expressions
- Input Event Handling

---

## Key Learning

### Controlled Components

The password field is controlled using React state.

```javascript 
const [pass, setPass] = useState(""); 
```

Whenever the user types, React updates the state and re-renders the UI.

---

### Dynamic Input Types

The input field dynamically switches between:

```html 
type=*text* 
```

and

```html 
type=*password* 
```

based on the value of:

```javascript 
showPass 
```

Example:

```javascript 
type={showPass ? *text* : *password*} 
```

---

### State-Driven UI

The UI changes based on state:

- `showPass = true` → Password visible
- `showPass = false` → Password hidden

React automatically updates the input behavior whenever state changes.

---

## How It Works

## User enters a password.

## Password is stored in React state. ## Clicking **Show** sets:

```javascript 
showPass = true; 
```

## Input type becomes:

```html 
type=*text* 
```

## Clicking **Hide** sets:

```javascript 
showPass = false; 
```

## Input type becomes:

```html 
type=*password* 
```

---

## Project Structure

```text 
password-visibility-toggle/ 
├── src/ 
├── public/ 
├── package.json 
└── **README**.md 
```

---

## Installation

Clone the repository:

```bash git clone <repository-url> ```

Navigate to the project folder:

```bash cd 06-password-visibility-toggle ```

Install dependencies:

```bash npm install ```

Run the application:

```bash npm run dev ```

Open:

```text 
http://localhost:5173
```

---

## Future Improvements

- Replace buttons with an eye icon
- Disable Show button when password is empty
- Add password strength indicator
- Add confirm password field
- Add validation rules
- Add copy password functionality

---

## Tech Stack

- React
- JavaScript
- Vite

---

Part of the React Coding Tasks repository.