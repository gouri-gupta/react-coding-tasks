import Modal from "./Modal"
import Comp from "./Comp";

function App() {

  return (
    <>
    <h1>Modal Component</h1>
    <Modal><Comp></Comp></Modal> {/**Reusability */}
    </>
  )
}

export default App

/**What is a Modal?

A modal is simply a popup window that appears on top of the current page.

For example, suppose you're on Amazon and click Delete Address.

The page becomes slightly dark and a popup appears:

-------------------------------
      Delete Address?

Are you sure you want to delete
this address?

[Cancel]     [Delete]
-------------------------------

The rest of the page is still there, but you can't interact with it until the modal is closed. */








