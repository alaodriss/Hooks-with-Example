import React, { useRef, useState } from 'react'



// useRef allows us to access DOM elements 
// for cerating mutable variables which will not re-render the component .
const usereff = () => {
     

     const inputElm = useRef()
 
    function handleClick() {
    console.log(inputElm.current);
    inputElm.current.style.width = "330px"
    }

    return (
      <div>
 <input type='text' ref={inputElm} />
        <button onClick={handleClick}>increase</button>
      </div>
    );
}

export default usereff