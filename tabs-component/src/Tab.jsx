import {useState} from 'react'

const Tab = () => {
    let [activeTab,setActiveTab]=useState("home")

    

  return (
    <div>
        <h1>Dynamic tabs</h1>

        <div>
            <button onClick={()=>setActiveTab("home")}>Home</button>
            <button onClick={()=>setActiveTab("about")}>About</button>
            <button onClick={()=>setActiveTab("contact")}>Contact</button>
        </div>

        {
            activeTab==="home" && <h3>Displays Home page</h3>
        }


        {
            activeTab==="about" && <h3>Displays About page</h3>
        }

        {
            activeTab==="contact" && <h3>Displays Contact page</h3>
        }
    </div>
  )
}

export default Tab

/*
For this interview task, I would not use either <a> or <NavLink>.

Think about the requirement carefully:

Home | About | Contact

Clicking a tab displays corresponding content.

Question:

When you click Home → About, are you actually navigating to another page/route?

No

You're still inside the same component.

You're simply changing:

Which content is visible
*/

/*
When do we use <a>?

When we want to navigate to:

Google
GitHub
Another website

or another URL.

When do we use <NavLink>?

When we're using:

React Router

and navigating between routes like:

/home
/about
/contact

Different routes.
*/



