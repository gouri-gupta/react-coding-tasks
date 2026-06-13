import  { useState,useRef } from 'react'

    {/**Intially implementing countdown timer for 10 seconds only Then we will implement it with custom input from user */}
const Timer = () => {
    let [userTime,setUserTime]=useState(0)
    let [time,setTime]=useState(userTime)   //Initially implementing for 10 seconds only 
    
    let [start,setStart]=useState(true)
    //false = start button disabled ; true =start button enabled

    let [inputValue,setInputValue]=useState("")

    let handleUserInput=(e)=>{
        //console.log(e.target.name)
        //console.log(e.target.value)
        setInputValue(e.target.value)
    }

    
    const intervalRef = useRef(null)  //We use references concept only to store id of setInterval globally
    //this id changes on resume


    const startTimer = () => {
        setStart(start=>!start)
        //console.log(inputValue,inputValue.length)
        //console.log(inputValue[inputValue.length-1]) //last character of input value if it is m -> convert it into seconds and then start the timer
        let lastchar=inputValue[inputValue.length-1]
        if(lastchar.toLowerCase()=='m'){
            let str=inputValue.substring(0,inputValue.length-1)
            console.log(str)
            const k=Number(str)*60 //converting minutes to seconds for time
            setUserTime(k)
            setTime(k)
        }
        else{
            setUserTime(Number(inputValue))
            setTime(Number(inputValue))
        }

        intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

    let resetTimer=()=>{
        setTime(userTime)
        clearInterval(intervalRef.current)
        setStart(start=>!start)
    }

    let pauseTimer=()=>{
        clearInterval(intervalRef.current)
    }

    let resumeTimer=()=>{
        
    intervalRef.current = setInterval(() => {  //JS create a completely new Timer.Every new setInterval() call creates a new interval and gets a new ID.
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
    }

  return (
    <div>
        <input type="text" name='inputValue' value={inputValue} onChange={handleUserInput} disabled={!start}/>
        <h1 >Timer : {time}</h1>
        <button onClick={startTimer} disabled={!start}>Start</button> 
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resumeTimer}>Resume</button>
        <button onClick={resetTimer} disabled={start}>Reset</button> {/**Reset it to 10 seconds again */}
    </div>
  )
}

export default Timer

/**useState -> Stores data that affects UI. 
 * 
 useRef -> Stores data that should survive re-renders but should NOT trigger re-renders.
*/