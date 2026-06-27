import {useState,useRef} from 'react'

const Otp = () => {
    let [otp,setOtp]=useState(["","","",""])
   

    function isOnlyDigits(str) { //return true if str consists of only numbers ELSE it will return false
        return /^[0-9]+$/.test(str);
    }
    
   const inputRefs = useRef([]); //Later React will fill it with the input elements.


   //User types -> Validate -> Update OTP state -> Move cursor to next input
    let handleChange=(e)=>{
        //console.log(e.target)
        let id=Number(e.target.id) //which input box controls which digit of the OTP
        let val=e.target.value

          if(val.length>1){
            return
        }

        if(!isOnlyDigits(val) && val!=""){
            return
        }


        ////Never mutate React state.
        //Previous State -> Create Copy -> Modify Copy -> setState(Copy)
        let newArr=[...otp]  
        newArr[id]=val
        setOtp(newArr)
        if(val!="" && id < inputRefs.current.length - 1){ //I'd usually write something like "if there is a next input" because it scales if tomorrow the OTP becomes 6 digits. But for a fixed 4-digit OTP, your code is completely fine.
            //only move to the next input after a digit has actually been entered.
            inputRefs.current[id+1].focus()
        }
    }

    /*
    Think about the expected behavior.

Suppose:

[1] [2] [3] [4]
          ^

Press Backspace once.

Should the cursor immediately move left?

No.

The first Backspace should delete the 3.

Result:

[1] [2] [ ] [4]
          ^

The cursor should stay there.

Now press Backspace again.

Current box is already empty.

Now move:

[1] [2] [ ] [4]
      ^

This is how OTP inputs on Google, Amazon, etc. behave.

So the logic is:

Backspace pressed

↓

Is current input empty?

↓

YES

↓

Move to previous input

↓

NO

↓

Let browser delete current digit
    */

/*
Your handleKeyDown should conceptually be:
Was Backspace pressed?

↓

Yes

↓

Is current input already empty?

↓

Yes

↓

Focus previous input
*/
   

    let handleKeyDown=(e)=>{
        //when user enters backspace
        console.log(e.key) //shows different keys pressed by the user
        let k=e.key
        let id=Number(e.target.id)
        let val=e.target.value
        //onKeyDown tells you which key was pressed.
        //e.target.value tells you the value before the key has been processed.
        if(k==="Backspace" && val===""){
            //means Backspace is entered again and the current input box is empty -> SO MOVE TO PREVIOUS INPUT BOX
            if(id!=0){
                //becz id==0 wont have any previous input box to move
                inputRefs.current[id-1].focus()
            }
        }
        
    }

    //console.log(inputRefs.current)

  return (
    <div>
        <h1>OTP Input</h1>

        <div style={{
        display: "flex",       // Enables flexbox layout
        flexDirection: "row",  // Arrange items in a row
        alignItems: "center",  // Vertically center items
        gap: "10px",           // Space between items
        whiteSpace: "nowrap",   // Prevent wrapping to next line
      }}>

        {/**The Only Improvement I'd Make

This isn't something I'd deduct marks for, but it's how I'd write it in production.

Instead of writing

<input ... />
<input ... />
<input ... />
<input ... />

I'd generate them from the array:

otp

↓

map()

↓

4 inputs

Why?

Suppose tomorrow the interviewer says

"Now make it a 6-digit OTP."

With your current implementation:

You'd have to manually add

<input />
<input />

With .map():

You'd simply initialize

["","","","","",""]

and you're done.

That's why most React developers prefer rendering repeated components with .map(). */}
            <input type="text" id='0' ref={(Element)=>{inputRefs.current[0]=Element}} autoFocus  value={otp[0]} onChange={handleChange} onKeyDown={handleKeyDown} style={{ width: "25px", padding: "2px" }}/>  {/**Controls 0th digit  */}
            <input type="text" id='1' ref={(Element)=>{inputRefs.current[1]=Element}} value={otp[1]} onChange={handleChange} onKeyDown={handleKeyDown} style={{ width: "25px", padding: "2px" }}/>
            <input type="text" id='2' ref={(Element)=>{inputRefs.current[2]=Element}} value={otp[2]} onChange={handleChange} onKeyDown={handleKeyDown} style={{ width: "25px", padding: "2px" }}/>
            <input type="text" id='3' ref={(Element)=>{inputRefs.current[3]=Element}} value={otp[3]} onChange={handleChange} onKeyDown={handleKeyDown} style={{ width: "25px", padding: "2px" }}/>
            {/* In an OTP component, each box should contain:Exactly ONE digit
             So think: How can I ensure that each input stores only one character? */}
        </div>

        {/**Display final OTP */}
        <p>OTP: {otp.join("")}</p>
       
    </div>
  )
}

export default Otp

/*
What is an OTP Component?

Suppose the OTP is:

1234

Instead of one input field:

[1234]

we create four separate inputs:

[1] [2] [3] [4]
Requirement 1: Four Input Boxes

Initially:

[ ] [ ] [ ] [ ]
 ^
 Cursor starts here
Requirement 2: Auto Focus to Next Input

User types:

5

Immediately:

[5] [ ] [ ] [ ]
      ^
 Cursor automatically moves here

User types:

8

Now:

[5] [8] [ ] [ ]
          ^

Then:

[5] [8] [2] [ ]
              ^

Finally:

[5] [8] [2] [7]

Exactly as you described.

Requirement 3: Backspace

Suppose we have:

[5] [8] [2] [7]
              ^

User presses:

Backspace

First:

[5] [8] [2] [ ]

If the last box is already empty and the user presses Backspace again, focus should move to the previous input:

[5] [8] [2] [ ]
          ^

The same idea continues for the earlier boxes.

Requirement 4: Display Final OTP

When all boxes contain digits:

[5] [8] [2] [7]

Display:

OTP = 5827

This is simply the four digits combined.
*/

/*
Which Events Will You Need?
1. onChange

To detect when the user enters a digit.

You'll use this to:

update the digit
move focus to the next input
2. onKeyDown

Yes.

This is exactly what most developers use.

It lets you detect:

Backspace

before the browser finishes processing the key.

Then you can decide:

Should I move to the previous input?
Should I clear the current input?
Will We Need useRef?

Yes.

Think about it.

How will you move focus from:

Input 1

to

Input 2

Programmatically?

You need references to the input elements.

This is one of the classic use cases for useRef.

Will We Need State?

Definitely.

Think:

[1] [2] [3] [4]

Where are these values stored?

Most likely as a collection representing the four digits.

What Are They Testing?

This problem isn't really about OTPs.

It's testing whether you know:

Controlled inputs
Rendering multiple inputs
Focus management
useRef
Keyboard events
State updates
Array manipulation

That's why this question is very common in React machine coding rounds.
*/

/*
Think about the data

Right now you have 4 input boxes.

Question:

When the user enters:

[1] [2] [3] [4]

What data do you actually want to store?

Option 1:

digit1
digit2
digit3
digit4

which means:

const [digit1, setDigit1] = useState("");
const [digit2, setDigit2] = useState("");
const [digit3, setDigit3] = useState("");
const [digit4, setDigit4] = useState("");

This works, but imagine if tomorrow the OTP becomes 6 digits.

You would need:

digit5
digit6

Then for an 8-digit OTP:

digit7
digit8

Not scalable.

*/

/*
You have:

Input 0
Input 1
Input 2
Input 3

So you need to store 4 DOM elements.

Instead of:

ref0
ref1
ref2
ref3

we'll keep them together.

Conceptually:

refs.current

contains

[
 Input0,
 Input1,
 Input2,
 Input3
]

How Does React Know Which Input Goes Where?

Every input has its index.

Example:

Input 0

↓

Store here

↓

inputRefs.current[0]

Input 1

↓

inputRefs.current[1]

Input 2

↓

inputRefs.current[2]
Step 4: Passing the Ref

Normally you've seen:

<input ref={inputRef} />

That works for one input.

But now we have four.

So React gives another form of ref called a callback ref.

It looks like:

ref={(element) => {
    // store element somewhere
}}

Question:

What is element?

It is the actual DOM node.

For example, for the first input:

element

↓

<input ... />

So you can store it inside:

inputRefs.current[index]
Step 5: Mentally Visualize

After React renders:

inputRefs.current

↓

[
 HTMLInputElement,
 HTMLInputElement,
 HTMLInputElement,
 HTMLInputElement
]

Now suppose you're typing in:

Input 1

You know:

id = 1

The next input is simply:

inputRefs.current[2]

The previous input is:

inputRefs.current[0]

*/










