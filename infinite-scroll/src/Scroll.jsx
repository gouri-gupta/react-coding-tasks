import { useState, useEffect } from "react";
import users from "./users.json";

const Scroll = () => {
  const [visibleUsers, setVisibleUsers] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user reached bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        //window.innerHeight = Visible browser height
        //window.scrollY=How much user has scrolled
        //window.innerHeight + window.scrollY  = Together tells us Current bottom position of viewport
        //document.documentElement.scrollHeight =Total height of page content 
        //window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 = Has the user reached the bottom?
        setVisibleUsers((prev) => {
          // Prevent going beyond total users
          if (prev >= users.length) return prev;

          return prev + 10;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Mount
    ↓
    Add listener once

    Unmount
    ↓
    Remove listener
    */

    /*
    Why clean up ?
    Without cleanup:

    Listener still exists
    ↓
    Memory leak
    */

  const slicedUsers = users.slice(0, visibleUsers);

  return (
    <div>
      <h1>Infinite Scroll</h1>

      {slicedUsers.map((user, id) => (
        <div
          key={id}
          style={{
            padding: "20px",
            border: "1px solid gray",
            margin: "10px",
          }}
        >
          {user}
        </div>
      ))}

      {visibleUsers >= users.length && (
        <h3>All users loaded</h3>
      )}
    </div>
  );
};

export default Scroll;

/*
Your intuition is correct.

This is exactly the behavior you see on:

LinkedIn feed
Instagram
Facebook
X (Twitter)
YouTube home page
Amazon product listings

Instead of loading 1000 items at once, the website loads a few items first and then loads more when you scroll near the bottom.

First Understand the Problem

Suppose we have:

User 1
User 2
...
User 100

If we display all 100 users immediately:

Page Load
↓
Fetch 100 users
↓
Render 100 users

Problems:

More data transferred
Slower rendering
Bad user experience for huge datasets
Infinite Scroll Approach

Initially:

User 1
User 2
...
User 10

User scrolls down.

Then:

User 11
User 12
...
User 20

User scrolls again.

Then:

User 21
...
User 30

and so on.
*/

/*
Think Like This

You already solved Pagination.

In Pagination:

Page 1 → Users 1-10

Page 2 → Users 11-20

Page 3 → Users 21-30

Infinite Scroll is almost the same.

The difference:

Pagination

User clicks:

Next
Infinite Scroll

Instead of:

User clicks Next

the system automatically does:

Reached bottom
↓
Load next 10 users
*/

/*
Main Question

The real challenge is:

How do I know
user reached bottom?

That's the new concept in this task.

Don't Google the full solution yet.

First ask yourself:

Can JavaScript detect scrolling?
Can React run code whenever scrolling happens?

Those two questions will lead you to the core concept required for Infinite Scroll.
*/












