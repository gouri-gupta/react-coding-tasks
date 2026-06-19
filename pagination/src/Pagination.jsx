import React from 'react'
import users from "./users.json"
import { useState } from 'react'

const Pagination = () => {
    //console.log(users)
    const USERS_PER_PAGE = 10
    const n=users.length  //no of users
    const totalPages=Math.ceil(n/USERS_PER_PAGE)  //we need to display 10 users per page So no of pages required will be n/10 eg.For:87 users you get:9 pages
    //console.log("Total Pages=",totalPages) //currPage state can be till at MAX totalPages-1
    

    let [currPage,setCurrPage]=useState(0) //we will have pages from 0 to 9
    //0=1st page -> displays 1st 10 users 
    //1=2nd page -> displays next 10 users AND SO ON

    let handlePrevious=()=>{
        //handles previous button -> decrement page count but not beyond 1
        if(currPage>0){
            setCurrPage(currPage=>currPage-1)
        }
    }

    let handleNext=()=>{
        //handles next button-> incremnt page count but not beyond totalPages-1
        if(currPage<totalPages-1){
            setCurrPage(currPage=>currPage+1)
        }
    }

    const slicedArray=users.slice(currPage*USERS_PER_PAGE,(currPage+1)*USERS_PER_PAGE) //since we require 10 users per page eg slice(0,10) ,slice(10,20) ...
    //console.log(slicedArray)
    /*Page 9 (87 users)
     slice(80,90)
    Returns:

    User 81
    ...
    User 87

    JavaScript automatically stops at the end of the array.*/

  return (
    <div>
        <p>This pagination component displays 10 users per page</p>
        <div style={{
        display: "flex",       // Enables flexbox layout
        flexDirection: "row",  // Arrange items in a row
        alignItems: "center",  // Vertically center items
        gap: "10px",           // Space between items
        whiteSpace: "nowrap"   // Prevent wrapping to next line
      }}>
            <button onClick={handlePrevious} disabled={currPage==0}>Previous</button>
            <h3>Page {currPage+1} of {totalPages}</h3>
            <button onClick={handleNext} disabled={currPage==totalPages-1}>Next</button>
        </div>

        {
            slicedArray.map((val,id)=>{
                return(
                    <div key={id}>
                        {val}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Pagination