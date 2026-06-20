//VERSION 1
import {useState,useRef,useEffect} from 'react'

const DSearch = () => {
    let [input,setInput]=useState("")

    
    const interval=useRef(null)

    let handleChange=(e)=>{
        setInput(e.target.value)
        //console.log(interval.current) //id of the previous interval
        clearTimeout(interval.current)  //whenever the user types i.e whenever there is a change in the input Then we will cancel the previous timer AND start a new timer for 500 ms as given below
        interval.current=setTimeout(()=>{
            console.log("After 500 ms -> Now do the API call")
           
        },500)
    }

    //User types -> Cancel previous timer -> Start new timer -> Wait 500ms -> Do API call

    /*
    Type r
    ↓
    Start timer

    Type re
    ↓
    Cancel old timer
    ↓
    Start new timer

    Type rea
    ↓
    Cancel old timer
    ↓
    Start new timer

    User stops typing
    ↓
    500ms completed
    ↓
    API call
    */

    /*But imagine the user then:

    Closes the page
    Navigates to another route
    Component unmounts

    There may still be a pending timer. */

    useEffect(() => {
        return () => {
            clearTimeout(interval.current);  //CLEAN UP
        };
        }, []);


  return (
    <div>
        <h3>Debounced Search - Version1</h3>
        <input type="text" name='input' value={input} placeholder='Search' onChange={handleChange}/>
    </div>
  )
}

export default DSearch

/*
Version 1 (your approach)

You can implement debounce entirely inside:

handleChange

without any useEffect.

Many developers do exactly this.

So:

Debounce
≠
useEffect required
*/

/*You're responding directly to:

User typing

which is already happening inside:

handleChange

So technically:

No useEffect required. */

/*
Version 1:

handleChange()

contains:

clearTimeout()
setTimeout()

So:

Event Handler
↓
contains debounce logic
*/









