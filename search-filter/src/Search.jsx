import { useState } from 'react'

const Search = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Papaya",
    "Guava",
    "Strawberry",
    "Blueberry",
    "Blackberry",
    "Kiwi",
    "Pomegranate",
    "Peach",
    "Pear",
    "Cherry",
    "Litchi",
    "Dragon Fruit",
    "Muskmelon"
  ]

  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search fruit"
      />

      <h2>Results</h2>

      {
        filteredFruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))
      }
    </div>
  )
}

export default Search

//State Changed -> Component Re-renders -> JSX Re-executes -> UI Updates


/*
What should always remain unchanged?

Answer:

fruits

The original dataset.

Filtering should always happen from:

fruits

not from the already filtered result.
*/

/**Empty search => Show all fruits again */

/*
Problem 2: State updates are asynchronous

Look here:

setInput(e.target.value.toLowerCase())

let newarr = output.filter(
   val => val.toLowerCase().includes(input)
)

Question:

When this line runs:

includes(input)

what is input?

Is it the new value?

No.

It's still the old state value.

Because:

setInput(...)

doesn't immediately update state.

React schedules the update.

Example:

Current:

input = "m"

User types:

ma

Inside handler:

setInput("ma")

But:

input

is still:

m

during this execution.

So filtering uses stale data.
*/



/**
 How To Think About It

Ask yourself:

What is the newest value the user typed?

Inside the handler it is:

e.target.value

not:

input

because:

input

belongs to the previous render.

Another React Insight

Notice something:

You currently have:

input state
output state

Ask:

Can output always be calculated from:

fruits
+
input

?

If yes, then output is derived state, just like:

count = userInput.length

was in your Character Counter task.

That's the next React optimization hiding in this problem.

Debug Exercise

Add:

console.log("state input =", input)
console.log("typed value =", e.target.value)

and type:

A
Ap
App

You'll literally see:

state input = A
typed value = Ap

which proves why the search is lagging by one character.

You've already identified the root cause in your comments:

State updates are asynchronous.

Now you're seeing a real-world example of that behavior. That's actually the main concept this Search Filter task is teaching.
 */

/*
Why we don't need output state here

You correctly asked this question.

We already have:

input

and

fruits

From these two things, we can always calculate:

filteredFruits
*/


