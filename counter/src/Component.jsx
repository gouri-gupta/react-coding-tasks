import {useState} from 'react'

const Component = () => {

    let [count,setCount]=useState(0)

    let increment=()=>{
        setCount(count+1)
    }

    let decrement=()=>{
        if(count==0){
            return
        }
        setCount(count-1)
    }

    let reset=()=>{
        setCount(0)
    }
  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={increment}>Increment</button> <br /> <br />
        <button onClick={decrement}>Decrement</button> <br /> <br />
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Component