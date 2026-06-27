import { useState } from "react";


const Modal = ({children}) => {
  const [openModal, setOpenModal] = useState(false);

  let handleParentDiv=()=>{
    console.log("Parent Div")
    setOpenModal(false)  //Click outside closes modal
    //setOpenModal(false)
  }

  let handleModalDiv=(e)=>{
    console.log("Modal Div")
    e.stopPropagation() //Click inside should NOT close modal -> Stop the event propogation
    //console.log(e)
  }

  return (
    <div style={{border:"2px solid black"}}>
      <button onClick={() => setOpenModal(true)}>
        Open Modal
      </button>

      {openModal && (
        <div onClick={handleParentDiv}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            border:"2px solid green"
          }}
        >
          <div onClick={handleModalDiv}
            style={{
              backgroundColor: "white",
              width: "400px",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              textAlign: "center",
              border:"2px solid blue"
            }}
          >
            {children}

            <button onClick={() => setOpenModal(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

/*
What is a Modal?

A modal is simply a popup window that appears on top of the current page.

For example, suppose you're on Amazon and click Delete Address.

The page becomes slightly dark and a popup appears:

-------------------------------
      Delete Address?

Are you sure you want to delete
this address?

[Cancel]     [Delete]
-------------------------------

The rest of the page is still there, but you can't interact with it until the modal is closed.
*/








