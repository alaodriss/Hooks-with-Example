import React, { useState } from "react";

const Ustate = () => {
  // for change value normle
  //   const [counter, setCounter] = useState(0);

  //   function increaseCounter() {
  //     setCounter(counter + 1);
  //   }

  //   return (
  //     <div>
  //       <h1> counter: {counter}</h1>
  //       <button onClick={increaseCounter}>increase</button>
  //     </div>
  //   );

  // for with input text

  // const [counter, setCounter] = useState(0);
  // const [name, setName] = useState('');

  //   function increaseCounter() {
  //     setCounter(counter + 1);
  //   }
  //   function handleChange(e) {
  //     setName(e.target.value);
  //   }

  //   return (
  //     <div>
  //         <input type="text" placeholder="Create Here" onChange={handleChange}/>

  //       <h1> code {name}  for number counter: {counter}</h1>
  //       <button onClick={increaseCounter}>increase</button>
  //     </div>
  //   );

  // for with input Object

  const [detalis, setDetalis] = useState({
    counter: 0,
    name:"",
  });

  function increaseCounter() {
    setDetalis((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Create Here"
        onChange={(e) => e.target.value}
      />

      <h1>
        {" "}
        code {detalis.name} for number counter: {detalis.counter}
      </h1>
      <button onClick={increaseCounter}>increase</button>
      <hr></hr>
    </div>
  );
};

export default Ustate;
