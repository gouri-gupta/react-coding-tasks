//VERSION 2
import { useState, useEffect } from 'react'
import axios from 'axios'

const Version2 = () => {

    // Stores what the user types
    const [input, setInput] = useState("")
    const [output,setOutput]=useState("Not Found")

    async function Search(k){
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users?q=${k}`)
        //console.log(res)
        let {data}=res
        if(data.length>0){
            console.log(data)
            setOutput("Found")
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {

        // Optional: Don't make API call for empty search
        if (input.trim() === "") {
            return
        }

        console.log("Timer Started for:", input)

        // Start a timer whenever input changes
        const timerId = setTimeout(() => {

            // Actual API call would go here
            console.log("After 500 ms -> Do API Call for:", input)
            Search(input)

        }, 500)

        // Cleanup Function
        // Runs:
        // 1. Before next useEffect execution
        // 2. When component unmounts
        //Whenever there is a chnage in input then this new effect runs.Before running the new effect:Cleanup Previous Effect i.e clearTimeOut
        return () => {  

            console.log("Previous Timer Cancelled")

            clearTimeout(timerId)

        }

    }, [input])

    return (
        <div>
            <h3>Debounced Search - Version 2</h3>

            <input
                type="text"
                value={input}
                placeholder="Search"
                onChange={handleChange}
            />

            <p>{output}</p>
        </div>
    )
}

export default Version2


/*
Version 2 (the interview-favorite React approach)

Some developers write:

Input changes
↓
State updates
↓
useEffect runs
↓
Start timer
↓
Cleanup old timer
↓
API call

This version uses:

useEffect

because:

Effect depends on input

*/

/*
If an interviewer asked

Why use useEffect for debounce?

A good answer would be:

Because the debounce operation depends on changes to the search query. 
Whenever the query changes, the effect restarts the timer and cleans up the previous timer. This prevents unnecessary API calls.
*/

/*
input changes
↓
useEffect runs
↓
start timer
↓
if input changes again
↓
cleanup old timer
↓
start new timer
*/

/*
How useEffect Cleanup Works

Suppose user types:

r

React:

input changed
↓
useEffect runs
↓
Timer #1 started

Before 500ms user types:

re

React:

input changed
↓
Before running new effect
↓
Cleanup previous effect
↓
clear Timer #1
↓
Run new effect
↓
Start Timer #2

User types:

rea

React:

Cleanup Timer #2
↓
Start Timer #3

User stops typing.

500ms passes
↓
Timer #3 executes
↓
API call
*/


/*
Version 2:

handleChange()

only updates state.

setInput(...)

and

useEffect()

handles:

Side Effects

which is exactly what React designed useEffect for.


What Should Happen In Your Version?

Think:

handleChange

should do only:

setInput(...)

Then:

useEffect

should do:

Start timer

and return:

Cleanup timer
*/





