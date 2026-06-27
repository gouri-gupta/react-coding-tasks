# Reusable Modal Component

A React implementation of a reusable modal (popup) component.

This project demonstrates how to build a reusable modal using React's `children` prop while implementing common modal behaviors such as opening, closing, outside click detection, and event propagation handling.

---

## Problem Statement

Build a reusable modal component.

### Features Required

- Open Modal button
- Close Modal button
- Clicking outside the modal closes it
- Clicking inside the modal should NOT close it
- Component should be reusable

---

## Features

- Open and close modal
- Centered popup UI
- Dimmed background overlay
- Close modal by clicking outside
- Prevent modal from closing when clicking inside
- Reusable using React `children`
- Event propagation handling using `stopPropagation()`

---

## Concepts Practiced

### React Concepts

- useState
- Props
- children
- Conditional Rendering
- Component Composition

### JavaScript Concepts

- Event Bubbling
- Event Propagation
- stopPropagation()
- Click Events

### UI Concepts

- Modal Overlay
- Centered Popup
- Layering using z-index
- Reusable Components

---

## Project Structure

```text
modal-component/
│
├── src/
│   ├── App.jsx
│   ├── Modal.jsx
│   ├── Comp.jsx
│
├── public/
├── package.json
└── README.md
```

---

## How It Works

### Step 1

Click **Open Modal**.

```text
Open Modal
      ↓
Modal Opens
```

---

### Step 2

The modal appears with:

- Background overlay
- Centered popup
- Close button

---

### Step 3

Clicking outside the popup

```text
Overlay Click
        ↓
Close Modal
```

---

### Step 4

Clicking inside the popup

```text
Modal Click
        ↓
stopPropagation()
        ↓
Overlay does NOT receive click
        ↓
Modal remains open
```

---

### Step 5

The modal content is reusable.

Instead of hardcoding content inside the modal, the component renders:

```jsx
{children}
```

This allows different content to be passed from the parent component.

Example:

```jsx
<Modal>
    <LoginForm />
</Modal>
```

or

```jsx
<Modal>
    <DeleteConfirmation />
</Modal>
```

or

```jsx
<Modal>
    <FeedbackForm />
</Modal>
```

without modifying the Modal component.

---

## Event Flow

### Clicking Outside

```text
Overlay
   ↓
handleParentDiv()
   ↓
Modal Closes
```

---

### Clicking Inside

```text
Modal
   ↓
handleModalDiv()
   ↓
stopPropagation()
   ↓
Overlay never receives click
   ↓
Modal remains open
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd 20-modal-component
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

- ESC key closes modal
- Animation while opening/closing
- Multiple modal support
- Configurable modal size
- Custom header and footer
- Portal support using ReactDOM.createPortal()

---

## Tech Stack

- React
- JavaScript
- CSS (Inline Styling)
- Vite

---

## Skills Demonstrated

- React Hooks
- Component Composition
- Reusable Components
- Event Bubbling
- stopPropagation()
- Conditional Rendering
- Overlay UI Design
- Popup Component Development

---

Part of the React Coding Tasks repository.