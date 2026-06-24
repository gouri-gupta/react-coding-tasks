//includes task 13 and 14
import {useState,useEffect} from 'react'
import axios from 'axios'

const Fetchusers = () => {
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(true)
    let [error,setError]=useState("") //we will display the error only if it occurs

    async function fetchUsers(){
      try {
          let {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        //console.log(data[0])
        let newarr=data.map((item)=>{
          const obj={name:item.name,email:item.email,company:item.company.name}
          return obj
        })
        //console.log(newarr)
        setUsers(newarr)
        setLoading(false)
      } catch (error) {
        setError("Failed to fetch users")
        setLoading(false)
        console.log(error.message)
        console.log("Error occured")
        
      }
    }

    useEffect( ()=>{
      //[] -> Runs only once after the first render (mount). i.e page load
      //Component Mount -> API Call Once
        fetchUsers()
    },[])

  return (
    <div>
        <h1>Fetch Users API</h1>

        <div style={{
            display: "flex",       // Enables flexbox layout
            flexDirection: "row",  // Arrange items in a row
            alignItems: "center",  // Vertically center items
            gap: "10px",           // Space between items
            whiteSpace: "nowrap"   // Prevent wrapping to next line
          }}>
            <p>Name</p>
            <p>Email</p>
            <p>Company</p>
        </div>
        {/*
          users.length>0 ? users.map((val,id)=>{
            return(
              <div key={id} style={{
                display: "flex",       // Enables flexbox layout
                flexDirection: "row",  // Arrange items in a row
                alignItems: "center",  // Vertically center items
                gap: "10px",           // Space between items
                whiteSpace: "nowrap"   // Prevent wrapping to next line
              }}>
                <p>{val.name}</p>
                <p>{val.email}</p>
                <p>{val.company}</p>
              </div>
            )
          }) : 
            error ==="" ? <h1>Loading ...</h1> :
            <h1>{error}</h1>
          
        */}

        {
          loading===true ? <h1>Loading...</h1>:
          error==="" ? users.map((val,id)=>{
            return(
              <div key={id} style={{
                display: "flex",       // Enables flexbox layout
                flexDirection: "row",  // Arrange items in a row
                alignItems: "center",  // Vertically center items
                gap: "10px",           // Space between items
                whiteSpace: "nowrap"   // Prevent wrapping to next line
              }}>
                <p>{val.name}</p>
                <p>{val.email}</p>
                <p>{val.company}</p>
              </div>
            )
          }) : <h1>Failed to fetch users</h1>
        }

        
    </div>
  )
}

export default Fetchusers

/*
When the task says:

Fetch users on page load

in React, that usually means:

Component mounts
↓
API call happens once

which is why:

useEffect(() => {
   fetchUsers()
}, [])

is the standard solution.

So your reasoning:

page load = component rendered for the first time

is correct for this exercise.
*/







