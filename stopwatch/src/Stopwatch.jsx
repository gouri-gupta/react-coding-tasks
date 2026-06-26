import {useState,useRef, useEffect} from 'react'

const Stopwatch = () => {
    let [elapsedTime,setElapsedTime]=useState(0)
    let [start,setStart]=useState(false)
    let [running,setRunning]=useState(false) //represents whether the stopwatch is running or not 
    //Initially stopwatch is not running
    //PAUSE button -> Enabled when stopwatch is running
    //RESUME button -> Disable when stopwatch is running AND when stopwatch is not yet started
   
    let intervalId=useRef(null)

    let startTimer=()=>{
        setStart(true)
        setRunning(true)
        clearInterval(intervalId.current) //guarantees only one interval can ever exist.
        intervalId.current=setInterval(()=>{
            setElapsedTime(prev=>prev+1)
        },1000)
    }

    let pauseTimer=()=>{
        setRunning(false)
        clearInterval(intervalId.current)
    }

    let resumeTimer=()=>{
        setRunning(true)
        clearInterval(intervalId.current) //guarantees only one interval can ever exist.
        intervalId.current=setInterval(()=>{
            setElapsedTime(prev=>prev+1)
        },1000)
    }

    let resetTimer=()=>{
        setStart(false)
        setRunning(false)
        clearInterval(intervalId.current)
        setElapsedTime(0)
    }

    console.log("Minutes =",elapsedTime/60)
    console.log("Hours =",elapsedTime/3600)

    useEffect(()=>{
        return () => {
            clearInterval(intervalId.current)
        }
    },[])

    const hour=Math.trunc(elapsedTime/3600)
    let remainingSeconds=elapsedTime-hour*3600
    const minute=Math.trunc(remainingSeconds/60)
    const seconds=remainingSeconds-minute*60


  return (
    <div>
        <h1>Stopwatch</h1>
        <h3>{elapsedTime}</h3>
         
         <h3>
            {hour>=10 ? <span>{hour}</span> : <span>0{hour}</span>}:
            {minute>=10 ? <span>{minute}</span> : <span>0{minute}</span>}:
            {seconds>=10 ? <span>{seconds}</span> : <span>0{seconds}</span>}
         </h3>
        
        <br />

        <button onClick={startTimer} disabled={start}>Start</button>
        <button onClick={pauseTimer} disabled={!running}>Pause</button>
        <button onClick={resumeTimer} disabled={running || !start}>Resume</button>
        <button onClick={resetTimer} disabled={!start}>Reset</button>
    </div>
  )
}

export default Stopwatch


/*
Should we have 3 separate states?

Your current approach:

const [hour, setHour] = useState(0);
const [minute, setMinute] = useState(0);
const [second, setSecond] = useState(0);

This works, but I would not recommend it.

Why?

Think about what a stopwatch actually stores.

Does it naturally think in terms of:

2 hours
15 minutes
34 seconds

No.

Internally, a stopwatch is just measuring elapsed time.

For example:

7534 seconds

or

125430 milliseconds

The display:

02:05:34

is just a formatted version of that elapsed time.

A Better Design

Instead of storing three pieces of state:

hour
minute
second

store one piece of state:

elapsedTime

Then every second:

elapsedTime++

When rendering:

elapsedTime
↓
Calculate hours
↓
Calculate minutes
↓
Calculate seconds
↓
Display HH:MM:SS

This has several advantages:

Only one state to update.
Easier Pause/Resume.
Less chance of bugs (e.g., forgetting to reset minutes when hours change).
This is how stopwatches are commonly implemented.

*/
 











