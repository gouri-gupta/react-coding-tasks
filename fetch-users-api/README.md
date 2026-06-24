# Fetch Users API with Loading & Error States

A React application that fetches user data from an external API and displays user information in a simple directory while handling loading and error states gracefully.

## Problem Statement

Build a User Directory application that fetches users from an API when the page loads.

### API Endpoint

https://jsonplaceholder.typicode.com/users

### Features Required

#### Task 13 — Fetch Users API

* Fetch users on page load.
* Display:

  * Name
  * Email
  * Company

#### Task 14 — Loading & Error States

* Show loading indicator while fetching data.
* Show error message if the API request fails.
* Display user data on successful response.

---

## Features

* API Integration using Axios
* Fetch data when component mounts
* Display user information dynamically
* Transform API response before rendering
* Loading State Handling
* Error State Handling
* Conditional Rendering based on API status
* Render data using React state

---

## Concepts Practiced

### React Concepts

* useState
* useEffect
* Component Lifecycle
* State Management
* Conditional Rendering
* Rendering Lists

### API Concepts

* REST API Consumption
* Axios
* Async/Await
* Error Handling
* Data Transformation

### JavaScript Concepts

* Array map()
* Object Creation
* Try/Catch
* Async Functions

---

## Project Structure

```text
fetch-users-api/
│
├── src/
│   ├── FetchUsers.jsx
│
├── public/
├── package.json
└── README.md
```

---

## Application States

This application handles three UI states.

### 1. Loading State

Displayed while the API request is in progress.

```text
Loading...
```

---

### 2. Success State

Displayed when users are successfully fetched.

```text
Name              Email                     Company

Leanne Graham     Sincere@april.biz         Romaguera-Crona
```

---

### 3. Error State

Displayed when the API request fails.

```text
Failed to fetch users
```

---

## How It Works

### Step 1: Component Loads

The component renders for the first time.

---

### Step 2: useEffect Executes

```javascript
useEffect(() => {
  fetchUsers();
}, []);
```

The empty dependency array ensures the API request runs only once when the component mounts.

---

### Step 3: Loading State Starts

```javascript
setLoading(true);
```

The application displays:

```text
Loading...
```

while waiting for the API response.

---

### Step 4: API Request

```javascript
axios.get("https://jsonplaceholder.typicode.com/users")
```

Fetches user data from the API.

---

### Step 5: Transform API Response

The API returns many fields:

```javascript
{
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}
```

Only the required fields are extracted:

```javascript
{
  name,
  email,
  company
}
```

---

### Step 6: Success Handling

```javascript
setUsers(newarr);
setLoading(false);
```

Users are stored in state and rendered on the screen.

---

### Step 7: Error Handling

```javascript
catch(error) {
  setError("Failed to fetch users");
  setLoading(false);
}
```

If the API request fails, an error message is displayed.

---

## Data Flow

```text
Component Mount
        ↓
Loading State
        ↓
API Request
        ↓
 ┌───────────────┬───────────────┐
 │               │
 ▼               ▼
Success         Error
 │               │
 ▼               ▼
Store Users    Store Error
 │               │
 ▼               ▼
Render Users   Render Error
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd fetch-users-api
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

* Search Users
* Pagination
* User Details Page
* Retry Button on Error
* Sorting Users
* Responsive Table Layout
* Skeleton Loading UI

---

## Tech Stack

* React
* JavaScript
* Axios
* Vite

---

## Skills Demonstrated

* API Integration
* React Hooks
* Async/Await
* Error Handling
* Loading State Management
* Data Transformation
* State Management
* Conditional Rendering
* Dynamic Rendering

---

## Key Learning

This project demonstrates how real-world React applications manage asynchronous data fetching.

```text
Loading
    ↓
API Request
    ↓
Success OR Error
    ↓
Render Appropriate UI
```

Instead of assuming the API always succeeds, the application properly handles all possible request states, resulting in a more robust user experience.

---

Part of the React Coding Tasks repository.
