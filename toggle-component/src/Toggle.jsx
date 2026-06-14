import {useState} from 'react'

const Toggle = () => {
    let [show,setShow]=useState(false) //State controls the UI.
    //show==true ->  

  return (
    <div>
        {
            show==true ? <button onClick={()=>setShow(false)}>Hide</button> : <button onClick={()=>setShow(true)}>Show</button>
        }

        {
            show && <h1>This is a Toggle component</h1>
        }
    </div>
  )
}

export default Toggle