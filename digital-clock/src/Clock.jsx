import {useState,useEffect} from 'react'

const Clock = () => {
    const now=new Date()
    //console.log(now)
    //console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
    const [seconds,setSeconds]=useState(now.getSeconds())
    const [minutes,setMinutes]=useState(now.getMinutes())
    const [hours,setHours]=useState(now.getHours())



    useEffect(()=>{
        const id=setInterval(()=>{
        const d=new Date()
        setHours(d.getHours())
        setMinutes(d.getMinutes())
        setSeconds(d.getSeconds())
    },1000)


    // Cleanup function to clear the timer
    return () => clearInterval(id);

    },[])

  return (
    <div>
    <h1>Current time = {hours}:{minutes}:{seconds}</h1>
     </div>
  )
}

export default Clock

/**
# Step 1: What is the requirement?

The requirement says:

```text
10:45:23 PM
```

and it should update every second.

Ask yourself:

### Where does the time come from?

Answer:

```js
new Date()
```

So your thinking about using the Date object is **100% correct**.

You absolutely need Date here.

---

# Step 2: Why isn't your code updating?

Look at this:

```js
const now = new Date()
```

When does this run?

Answer:

```text
Component Render
↓
new Date()
↓
done
```

Now ask:

### What causes another render?

React re-renders when:

```js
setState(...)
```

runs.

---

In your code:

```js
const [seconds,setSeconds]=useState(now.getSeconds())
```

you never do:

```js
setSeconds(...)
```

again.

So:

```text
Render once
↓
Get current seconds
↓
Display them
↓
Nothing changes
```

---

# Step 3: What do we need?

Ask:

### How often should the clock update?

Answer:

```text
Every second
```

Question:

### Which JavaScript tool can execute something every second?

You already learned this yesterday in Countdown timer function.

Answer:

```js
setInterval()
```

---

# Step 4: What should happen every second?

Think:

```text
Every second
↓
Get fresh Date
↓
Extract current time
↓
Update React state
↓
React re-renders
↓
New time displayed
```

That's the entire solution.

---

# Step 5: What should be in state?

Don't think code.

Think data.

Currently:

```js
seconds
```

only stores:

```text
23
```

But requirement says:

```text
10:45:23 PM
```

Question:

Should state store only seconds?

Probably not.

You need either:

### Option A

Store:

```js
currentTime
```

as a string.

Example:

```text
10:45:23 PM
```

---

### Option B

Store:

```js
Date object
```

and extract hours/minutes/seconds during rendering.

---

Think about which approach feels cleaner.

---

# Step 6: Why useEffect?

Ask:

### When should the interval start?

Every render?

No.

Only once when component mounts.

This should remind you of:

```js
useEffect(() => {

}, [])
```

The empty dependency array.

---

So mentally:

```text
Component mounts
↓
Create interval
↓
Every second update state
↓
Component re-renders
```

---

# Step 7: Very Important Interview Question

Suppose user leaves page.

Question:

What happens to interval?

It keeps running.

Bad.

Therefore:

```text
Create interval
↓
Component unmounts
↓
Destroy interval
```

You learned:

```js
clearInterval(...)
```

yesterday.

This is where cleanup comes in.

---

# Brainstorming Framework

Whenever you see:

```text
Clock
Countdown
Stopwatch
Live Data
Polling
```

Ask:

### 1. What changes over time?

Here:

```text
Current Time
```

---

### 2. How often does it change?

Here:

```text
Every second
```

---

### 3. What tool runs repeatedly?

Here:

```js
setInterval()
```

---

### 4. What should trigger UI update?

Here:

```js
setState()
```

---

### 5. When should interval start?

Here:

```js
useEffect()
```

---

### 6. When should interval stop?

Here:

```js
cleanup
clearInterval()
```

---

Notice something interesting?

Yesterday's Countdown Timer and today's Digital Clock are almost the same pattern:

```text
useState
↓
useEffect
↓
setInterval
↓
setState
↓
clearInterval
```

The only difference is:

### Countdown Timer

```text
30
29
28
27
...
```

You are decreasing a value.

---

### Digital Clock

```text
10:45:23
10:45:24
10:45:25
```

You are repeatedly asking Date for the latest time.

That's why learning the Countdown Timer first was actually perfect preparation for this problem.

Now try implementing it yourself with this thought process. Don't think "code." Think:

```text
Mount
↓
Start interval
↓
Get fresh Date every second
↓
Update state
↓
Cleanup interval
```

and the implementation will become much clearer.

 */

/*
State should be used for things that affect rendering.

Examples:

hours
minutes
seconds

These affect UI.
*/

/*
Why does cleanup exist?

Let's imagine cleanup doesn't exist.

Scenario 1

User opens page.

Clock Component

Interval starts.

Scenario 2

User goes to another page.

Home Page

Clock component is gone.

Without cleanup:

Interval still running

every second.

JavaScript keeps executing:

setHours(...)
setMinutes(...)
setSeconds(...)

even though component no longer exists.

This causes:

Memory leaks
Performance issues
Warnings
Unexpected bugs
Real-world example

Imagine:

Dashboard

has:

Live Clock

and user visits:

Dashboard
↓
Profile
↓
Dashboard
↓
Profile
↓
Dashboard

five times.

Without cleanup:

Interval 1 running
Interval 2 running
Interval 3 running
Interval 4 running
Interval 5 running

Now your app is updating time 5 times every second.

Bad.

With cleanup:

Dashboard
↓
Create interval
↓
Leave Dashboard
↓
Destroy interval

Only one interval exists at any time.

Interview answer

If an interviewer asks:

Why do we need cleanup in useEffect?

A good answer:

Cleanup prevents memory leaks and removes side effects such as intervals, timeouts, event listeners, or subscriptions when a component unmounts or before the effect runs again.
*/






