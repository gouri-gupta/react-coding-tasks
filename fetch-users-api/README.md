# Fetch Users API

A React application that fetches user data from an external API and displays user information in a simple directory.

## Problem Statement

Build a User Directory application that fetches users from an API when the page loads.

### API Endpoint

https://jsonplaceholder.typicode.com/users

### Features Required

* Fetch users on page load.
* Display:

  * Name
  * Email
  * Company

---

## Features

* API Integration using Axios
* Fetch data when component mounts
* Display user information dynamically
* Transform API response before rendering
* Render data using React state

---

## Concepts Practiced

### React Concepts

* useState
* useEffect
* Component Lifecycle
* State Management
* Rendering Lists

### API Concepts

* REST API Consumption
* Axios
* Async/Await
* Data Transformation

### JavaScript Concepts

* Array map()
* Object Creation
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

## How It Works

### Step 1: Component Loads

The component is rendered for the first time.

### Step 2: useEffect Executes

```javascript
useEffect(() => {
  fetchUsers();
}, []);
```

The empty dependency array ensures the API call happens only once when the component mounts.

---

### Step 3: API Request

```javascript
axios.get("https://jsonplaceholder.typicode.com/users")
```

Fetches user data from the API.

---

### Step 4: Transform API Response

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

For this exercise, only the required fields are extracted:

```javascript
{
  name,
  email,
  company
}
```

---

### Step 5: Store Data in State

```javascript
setUsers(newarr);
```

Updates the component state.

---

### Step 6: Render Users

Users are displayed dynamically using:

```javascript
users.map(...)
```

---

## Sample Output

```text
Name              Email                     Company

Leanne Graham     Sincere@april.biz         Romaguera-Crona

Ervin Howell      Shanna@melissa.tv         Deckow-Crist

Clementine Bauch  Nathan@yesenia.net        Romaguera-Jacobson
```

---

## Key Learning

This project demonstrates a common React workflow:

```text
Component Mount
        ↓
API Request
        ↓
Receive Data
        ↓
Transform Data
        ↓
Store in State
        ↓
Render UI
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd 13-fetch-users-api
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

* Loading State
* Error Handling
* Search Users
* Pagination
* Sorting Users
* Responsive Table Layout

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
* Data Transformation
* State Management
* Dynamic Rendering

---

Part of the React Coding Tasks repository.
