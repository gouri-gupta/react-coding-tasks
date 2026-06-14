import { useState } from "react"

const Password=()=>{
    let [pass,setPass]=useState("")
    let [showPass,setShowPass]=useState(true)

    let handleChange=(e)=>{
        setPass(e.target.value)
    }

    return (
        <>
        
         <input type={showPass==true ? "text" : "password"} name="pass" value={pass} onChange={handleChange} placeholder="Enter password"/> 
        

        <button onClick={()=>setShowPass(true)}>Show</button>
        <button onClick={()=>setShowPass(false)}>Hide</button>
        
        </>
    )
}

export default Password

/*
Does your solution work?

Partially.

Let's test it.

Initially:

showPass = true

You render:

<input type="text" value={pass} />

User types:

hello123

Works.

Now click:

Hide

You render:

<input value="********" />

Looks correct.

Now ask:

Can the user continue typing while password is hidden?

No.

Because now the input contains:

********

instead of the actual password.

If the user types another character:

********a

you've lost the original password value.

This is why your approach is not how password visibility toggles are usually implemented.

How interviewers expect it

The actual password should always remain:

pass = "hello123"

The only thing that changes is:

type="password"

vs

type="text"

Think:

Show Password
↓
type="text"

Hide Password
↓
type="password"

The password value never changes.

Only the display changes.
*/







