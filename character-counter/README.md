# Character Counter

A simple React application that counts the number of characters entered by the user in real time.

## Problem Statement

Build a React component that counts typed characters.

### Requirements

- Display a text input field.
- Allow users to type text.
- Display the current character count.
- Character count should update automatically while the user types.

### Example

Input:

```text 
Hello 
```

Output:

```text 
Character Count: 5 
```

---

## Features

- Real-time character counting
- Controlled input field
- Automatic UI updates on every keystroke
- Minimal state management
- Responsive user experience

---

## Concepts Practiced

### React Hooks

- useState

### React Concepts

- Controlled Components
- State Management
- Re-rendering
- Derived State

### JavaScript Concepts

- String Length Property (`length`)
- Event Handling

---

## Key Learning

### Controlled Components

The input field is controlled using React state.

```javascript const [userInput, setUserInput] = useState(""); ```

Whenever the user types, the state is updated and React re-renders the component.

---

### Derived State

Initially, character count was stored in a separate state variable.

After optimization, count is derived directly from:

```javascript userInput.length ```

This follows React's principle:

> Store the minimum possible state and derive everything else.

---

## How It Works

## User types into the input field.

2. `onChange` event updates React state.
## Component re-renders.
## Character count is calculated using:

```javascript userInput.length ```

## Updated count is displayed instantly.

---

## Project Structure

```text 
character-counter/ 
├── src/ 
├── public/ 
├── package.json 
└── **README**.md 
```

---

## Installation

Clone the repository:

```bash git clone <repository-url> ```

Move into the project directory:

```bash cd 04-character-counter ```

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

- Word Counter
- Sentence Counter
- Character Limit Indicator
- Remaining Character Counter
- Live Text Statistics
- Reading Time Estimator

---

## Tech Stack

- React
- JavaScript
- Vite

---

Part of the React Coding Tasks repository.