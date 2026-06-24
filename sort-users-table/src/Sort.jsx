import {useState} from 'react'

const Sort = () => {
    const users= [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 28 },
  { id: 5, name: "Emma", age: 25 },
  { id: 6, name: "Frank", age: 35 },
  { id: 7, name: "Grace", age: 21 },
  { id: 8, name: "Henry", age: 29 },
  { id: 9, name: "Isabella", age: 26 },
  { id: 10, name: "Jack", age: 31 },
  { id: 11, name: "Karen", age: 27 },
  { id: 12, name: "Leo", age: 23 },
  { id: 13, name: "Mia", age: 32 },
  { id: 14, name: "Nathan", age: 24 },
  { id: 15, name: "Olivia", age: 20 },
  { id: 16, name: "Peter", age: 33 },
  { id: 17, name: "Quinn", age: 22 },
  { id: 18, name: "Ryan", age: 28 },
  { id: 19, name: "Sophia", age: 26 },
  { id: 20, name: "Thomas", age: 34 },
  { id: 21, name: "Uma", age: 25 },
  { id: 22, name: "Victor", age: 30 },
  { id: 23, name: "William", age: 21 },
  { id: 24, name: "Xavier", age: 27 },
  { id: 25, name: "Yash", age: 29 },
  { id: 26, name: "Zara", age: 23 },
  { id: 27, name: "Ananya", age: 31 },
  { id: 28, name: "Rohit", age: 24 },
  { id: 29, name: "Priya", age: 28 },
  { id: 30, name: "Aman", age: 22 }
]


    let [sortAge,setSortAge]=useState(null) //initially data will be sorted in ascending order
    //sortAge=asc -> sort users according to age in ascending order -> Youngest to Oldest
    //sortAge=desc -> sort users according to age in descending order -> Oldest to Youngest

    let [sortName,setSortName]=useState(null)

    //let sortedUsers = users  THIS IS WRONG   
    /*This does not create a copy.
    Both variables point to the same array.
    When you do: sortedUsers.sort(...) you're modifying users itself.
    In React, it's generally safer to create a copy before sorting.
    
    Original users
    ↓
    Create copy
    ↓
    Sort copy
    ↓
    Render copy

    instead of: Sort original array directly
    */


    let sortedUsers=[...users]
    if(sortName==="asc"){
        sortedUsers.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }
    else if(sortName==="desc"){
        sortedUsers.sort((a,b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    }

    if(sortAge==="asc"){
        sortedUsers.sort((a,b)=>a.age-b.age)
    }
    else if(sortAge==="desc"){
        sortedUsers.sort((a,b)=>b.age-a.age)
    }

    //console.log("users ",users)
    //console.log("sortedUsers ",sortedUsers)
    

  return (
    <div>

        <div style={{  display: "flex",       // Enables flexbox layout
                            flexDirection: "row",  // Arrange items in a row
                            alignItems: "center",  // Vertically center items
                            gap: "10px",           // Space between items
                            whiteSpace: "nowrap"   // Prevent wrapping to next line
                        }}>
            <h3>Sort by age</h3>
            <button onClick={()=>setSortAge("asc")} disabled={sortName!=null}>↑</button>
            <button onClick={()=>setSortAge("desc")} disabled={sortName!=null}>↓</button>
        </div>

        <div style={{
                            display: "flex",       // Enables flexbox layout
                            flexDirection: "row",  // Arrange items in a row
                            alignItems: "center",  // Vertically center items
                            gap: "10px",           // Space between items
                            whiteSpace: "nowrap"   // Prevent wrapping to next line
                        }}>
            <h3>Sort by name</h3>
            <button onClick={()=>setSortName("asc")} disabled={sortAge!=null}>↑</button>
            <button onClick={()=>setSortName("desc")} disabled={sortAge!=null}>↓</button>

        </div>

        <button onClick={()=>{setSortAge(null) 
            setSortName(null)}}>RESET</button>

        {
            sortedUsers.map((val)=>{
                return (
                    <div key={val.id} style={{
                            display: "flex",       // Enables flexbox layout
                            flexDirection: "row",  // Arrange items in a row
                            alignItems: "center",  // Vertically center items
                            gap: "10px",           // Space between items
                            whiteSpace: "nowrap"   // Prevent wrapping to next line
                        }}>
                        <p>{val.name}</p>
                        <p>{val.age}</p>
                    </div>
                )
            })
        }


    </div>



  )
}

export default Sort

/*
Sort an array of strings 

JavaScript provides:

localeCompare()  

The localeCompare() method in JavaScript is used to compare two strings in the current locale. It returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.

Example:

"Alice".localeCompare("Bob")

returns a negative number because:

Alice comes before Bob

And:

"Bob".localeCompare("Alice")

returns a positive number.

Ascending (A → Z)
names.sort((a,b)=>a.localeCompare(b))

Output:

Alice
Bob
Charlie
David
Descending (Z → A)
names.sort((a,b)=>b.localeCompare(a))

Output:

David
Charlie
Bob
Alice

*/





