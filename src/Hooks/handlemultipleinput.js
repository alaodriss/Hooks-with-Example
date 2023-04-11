import React, { useState } from "react";


const handlemultipleinput = () => {
 
    const [detalis, setDetalis] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
      });
    
      const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
    
        setDetalis((prev) => {
          return { ...prev, [name]: value };
        });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(detalis);
      }
    
      return (
        <form onSubmit={handleSubmit}> 
          <h3>Name : </h3> <input type="text" name="name" onChange={handleChange} />
          <h3>Email : </h3>
          <input type="email" name="email" onChange={handleChange} />
          <h3>Password : </h3>
          <input type="password" name="password" onChange={handleChange} />
          <h3>Address : </h3>
          <textarea name="address" onChange={handleChange}></textarea>
          <button type="submit">submit from</button>
          <hr></hr>
        </form>
        
      );
}

export default handlemultipleinput