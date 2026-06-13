import {useState,useEffect} from 'react'

const CounterApp = () => {

    let [userInput,setUserInput]=useState("")
    //let [count,setCount]=useState(userInput.length)

    let handleChange=(e)=>{
        setUserInput(e.target.value)
    }

    

  return (
    <div>
        <input type="text" name='userInput' value={userInput} onChange={handleChange} placeholder='Type text'/>
        <h1>Count : {userInput.length}</h1>
    </div>
  )
}

export default CounterApp

/**
 Can count ever be different from:userInput.length?No.

 count is completely derived from: userInput .It is not independent state.

 A senior React developer would ask:
Why store something in state if it can always be calculated from existing state?

A senior engineer would say:
Nice solution. Now try removing count state completely and ask yourself whether you still need useEffect.
That realization is actually the next step in your React learning.

Rule of Thumb
Store state only if:The value can change independently.
Examples:userInput User changes it.

if count is derived directly:
userInput changes
↓
render

One render.
More efficient.
 */

/*
Render=React executes the component function again.

Example:
const CounterApp = () => {
   ...
}
React runs this function again.
This is called a re-render.

After Render
React compares:Old UI with New UI using the Virtual DOM.

Then React updates only the parts that changed.

Example:

Initial:

Count : 0

After typing:

Count : 1

React doesn't rebuild the entire page.

It notices:

0 → 1

and updates only that text.

So more accurately:

State Change
↓
Re-render
↓
React compares old and new UI
↓
Real DOM updated if necessary
Interview Answer

If an interviewer asks:

What happens when state changes?

Good answer:

When state changes, React re-renders the component. During re-render, React executes the component function again, creates a new Virtual DOM, compares it with the previous Virtual DOM, and updates only the changed parts in the real DOM.

That's a very strong React fundamentals answer.
*/






