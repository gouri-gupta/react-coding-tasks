# Toggle Component

A simple React application that demonstrates conditional rendering by showing and hiding content using a toggle button.

## Problem Statement

Build a React component that toggles visibility.

### Requirements

- Display a button labeled **Show** initially.
- Clicking **Show** should display hidden content.
- Button text should change to **Hide**.
- Clicking **Hide** should hide the content again.

### Example

Initial State:

```text 
[Show] 
```

After Clicking Show:

```text 
[Hide]

Welcome to React
 ```

---

## Features

- Show hidden content
- Hide visible content
- Dynamic button text
- Conditional rendering
- State-driven UI updates

---

## Concepts Practiced

### React Hooks

- useState

### React Concepts

- Conditional Rendering
- State Management
- Re-rendering
- Event Handling

### JavaScript Concepts

- Boolean State
- Ternary Operator
- Logical **AND** (&&) Operator

---

## Key Learning

### State Controls UI

The component uses a boolean state variable:

```javascript 
const [show, setShow] = useState(false); 
```

- `false` → Content hidden
- `true` → Content visible

---

### Conditional Rendering

Button text changes dynamically:

```javascript 
show ? *Hide* : *Show* 
```

Content is displayed only when:

```javascript 
show && <h1>Content</h1> 
```

---

### React Re-rendering

When state changes:

```javascript 
setShow(true);
 ```

React re-renders the component and updates the UI automatically.

---

## How It Works

## Component loads with `show = false`.

## User clicks **Show**.
## State updates to `true`. 
## React re-renders the component. 
## Content becomes visible. 
## User clicks **Hide**. 
## State updates to `false`. 
## Content becomes hidden again.

---

## Project Structure

```text 
toggle-component/ 
├── src/ 
├── public/ 
├── package.json 
└── **README**.md 
```

---

## Installation

Clone the repository:

```bash git clone <repository-url> ```

Move into the project folder:

```bash cd 05-toggle-component ```

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

- Add animations while showing/hiding content
- Toggle multiple sections
- Add icons (Show 👁️ / Hide 🙈)
- Build an **FAQ** Accordion using the same concept
- Add smooth transitions

---

## Tech Stack

- React
- JavaScript
- Vite

---

Part of the React Coding Tasks repository.