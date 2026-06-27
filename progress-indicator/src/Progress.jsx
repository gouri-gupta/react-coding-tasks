import {useState,useRef, useEffect} from 'react'

const Progress = () => {
    let [progress,setProgress]=useState(0)


    let intervalId=useRef(null)

    //Every 100 milliseconds -> Increase progress by 1%
    let startProgressBar=()=>{
        clearInterval(intervalId.current)  //prevents multiple intervals before creating a new interval.
        intervalId.current=setInterval(()=>{
            //AVOID stale state problem.
            setProgress(prev => {
                const next = prev + 1; //next is the value that will become the new state.

                if (next >= 100) {
                    clearInterval(intervalId.current);
                    return 100;
                }

                return next;  
            });
        },100)
        
    }

    /*if(progress===100){
        clearInterval(intervalId.current)
    }
    This code runs during rendering.
    In React, the render phase should only calculate the UI. It shouldn't perform side effects like stopping timers.
    Instead, the timer logic itself should decide when to stop.    
    */

    useEffect(()=>{
        return ()=>{ //clean up
            clearInterval(intervalId.current)
        }
    },[])

    let handleReset=()=>{
        clearInterval(intervalId.current)
        setProgress(0)
    }

  return (
    <div>
        <h1>Progress bar</h1>

        <div
            style={{
                width: "300px",
                height: "25px",
                backgroundColor: "#f3f3f3",
                border: "1px solid black",
                borderRadius: "8px",
                overflow: "hidden",
            }}
            >
            <div
                style={{
                height: "100%",
                width: `${progress}%`, // Later this will become `${progress}%`
                backgroundColor: "#4caf50",
                transition: "width 0.4s ease",
                }}>

            </div>
        </div>
        <p>{progress}%</p>
        
        <br />
        <button onClick={startProgressBar} disabled={progress!=0}>Start</button> 
        <button onClick={handleReset} disabled={progress===0}>Reset</button> {/**Reset button makes the progress bar reusable */}
        {progress===100 && <p>Progress Completed</p>}
    </div>
  )
}

export default Progress

/*

# What is a Progress Bar?

Suppose a file is downloading.

Initially:

```text
□□□□□□□□□□ 0%
```

After some time:

```text
██□□□□□□□□ 20%
```

Then:

```text
█████□□□□□ 50%
```

Finally:

```text
██████████ 100%
```

That's exactly what you have to build.

---

# How is the bar created?

You **do not** manually create:

```text
████████
```

Instead, in HTML/CSS, you create:

### Outer container

```text
-------------------------
|                       |
-------------------------
```

Think of it as the complete progress bar.

---

### Inner bar

Initially:

```text
█
```

Its width is:

```text
0%
```

As progress increases:

```text
████
```

its width becomes

```text
40%
```

At the end:

```text
██████████
```

its width becomes

```text
100%
```

So the entire trick is simply:

```text
Increase the width of the inner div
```

---

# How should progress increase?

You asked:

> Is it like after every 10 second increase progress by 10%?

Not necessarily.

The assignment only says:

> Progress increases gradually.

That means **you decide the speed**.

A common implementation is:

```text
Every 100 milliseconds

↓

Increase progress by 1%
```

So:

```text
0%

↓

100 ms

↓

1%

↓

100 ms

↓

2%

↓

...

↓

100%

↓

Stop
```

That means the animation finishes in about:

```text
100 × 100 ms

=

10 seconds
```

---

Or you could do:

```text
Every 50 ms

↓

Increase by 1%
```

which finishes in about **5 seconds**.

Or:

```text
Every 200 ms

↓

Increase by 2%
```

There isn't a single "correct" timing. The important part is that the progress **changes gradually**, not instantly.

---

# State

You'll probably need just **one state**:

```text
progress

↓

0
```

Then:

```text
5

↓

18

↓

42

↓

76

↓

100
```

---

# What Hook?

Immediately think:

> "I need something to execute repeatedly."

Which hook/object did you already use for:

* Stopwatch
* Countdown Timer
* Digital Clock

Exactly.

```text
setInterval()
```

---

# Logic

Conceptually:

```text
Click START

↓

Start Interval

↓

Increase progress

↓

Reach 100?

↓

YES

↓

Clear Interval
```

---

# Will we need `useRef`?

Yes.

Exactly the same reason as your Stopwatch.

You'll store the interval id:

```text
intervalId.current
```

so that you can clear it when progress reaches 100%.

---

# Overall Algorithm

```text
progress = 0

↓

Click Start

↓

Start Interval

↓

Every 100 ms

↓

progress += 1

↓

progress == 100 ?

↓

Yes

↓

clearInterval()
```

---

*/












