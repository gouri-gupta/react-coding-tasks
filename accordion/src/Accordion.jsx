import {useState} from 'react'

const Accordion = () => {
    const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library used to build user interfaces using reusable components."
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside React components."
  },
  {
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows functional components to store and update state."
  },
  {
    question: "What is useEffect?",
    answer:
      "useEffect is a React Hook used to perform side effects such as API calls, timers, and event listeners."
  },
  {
    question: "What is Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM that React uses to efficiently update the UI."
  },
  {
    question: "What are props in React?",
    answer:
      "Props are read-only values passed from a parent component to a child component."
  },
  {
    question: "Why are keys used in React lists?",
    answer:
      "Keys help React identify which items have changed, been added, or removed during re-rendering."
  }
];
  //Store the minimum amount of state necessary.

  const [accid,setAccId]=useState(null) //Stores Which accordion is currently active/open? Everything else can be derived from this state

  let handleAcordion=(id)=>{
    //id means the id of the accordion which needs to be expanded
    setAccId(id)
  }

  let CloseAccordion=()=>{
    setAccId(null)
  }

  return (
    <div>
        <h1>Accordion</h1>
        {
          faqs.map((item,id)=>{
            return(
              <div key={id}>
                {/*console.log(id)*/}
                <div style={{
                    display: "flex",       // Enables flexbox layout
                    flexDirection: "row",  // Arrange items in a row
                    alignItems: "center",  // Vertically center items
                    gap: "10px",           // Space between items
                    whiteSpace: "nowrap"   // Prevent wrapping to next line
                  }}>
                  { accid==id ? <button onClick={CloseAccordion}>-</button>:<button onClick={()=>handleAcordion(id)}>+</button>}
                  <p>{item.question}</p>

                  
                </div>
                {accid==id && <p>{item.answer}</p>}
              </div>
            )
          })
        }
    </div>
  )
}

export default Accordion