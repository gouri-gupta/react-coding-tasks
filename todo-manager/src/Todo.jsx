import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";


const Todo= () => {
    //console.log(uuidv4())
    let [task,setTask]=useState([]) //initially no task So task list will be empty
    let [currTask,setCurrTask]=useState({text:"",completed:false})

    let handleChange=(e)=>{
        setCurrTask({...currTask,text:e.target.value})
    }

    
    let addTask=()=>{
        if(currTask.text.length>0){
            setTask([...task,{...currTask,id:uuidv4()}])
            setCurrTask({text:"",completed:false})
        }
        else{
            return alert("Please enter a valid task")
        }
    }

        /**When working with arrays in React state, you should never mutate the state directly. Instead, always create a new array and 
     update the state with it. This ensures React detects the change and re-renders the component correctly.
The filter() method is the most common and safe way to remove elements because it returns a new array without mutating the original. */
    let deleteTask=(id)=>{
        //console.log(id)
        let newarr=task.filter(item => item.id!=id)
        setTask(newarr)
    }
    
    let handleComplete=(id)=>{
        //search the task by id and mark completed
        let newarr=task
        //console.log("BEFORE : ",newarr)
        /*let obj={}
        for(var i=0;i<newarr.length;i++){
            if(newarr[i].id==id){
                obj=newarr[i]
                break
            }
        }
        console.log(obj)*/
        //map() -> Find target object -> Create updated copy -> Return unchanged objects for others
        let m=newarr.map((obj)=>obj.id==id?{...obj,completed:!obj.completed}:obj)
        //console.log("AFTER : ",m)
        setTask(m)
    }

  return (
    <div>
        <input type="text" name='currTask' value={currTask.text} onChange={handleChange} placeholder='Enter the task to add'/>
        <button onClick={addTask} disabled={currTask.text.length==0}>Add Task</button>
        
        <h1>List of Tasks</h1>

        {
            task.map((ele)=>{
                return(
                    <div key={ele.id} className='taskbox'>
                        {/**{console.log(ele)} */}
                        <input type="checkbox" checked={ele.completed} onChange={()=>handleComplete(ele.id)}/> 
                        {/**Use onChange instead of onClick For checkboxes */}
                        {/**For checkboxes, React prefers: checked={ele.completed} instead of: value={ele.completed}
                         * Because checkbox state is: 
                         checked
                         unchecked
                         not a text value.
                         This is probably the biggest improvement I'd make. */}
                        <p>{ele.text}</p>
                        <button onClick={()=>deleteTask(ele.id)}>Delete task</button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Todo



