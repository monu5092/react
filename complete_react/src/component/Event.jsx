import React from 'react'

const Event = () => {
   
    const handleClick = () =>{
        alert("You click on button");
    };

    const addition = (a) =>{
        alert(a+10)
    }

  return (
    <div>
        <h1>We are Learning Events</h1>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>addition(100)}>Button</button>
    </div>
  )
}

export default Event

// Events 
