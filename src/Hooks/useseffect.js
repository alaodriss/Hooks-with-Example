import React,{useState, useEffect} from 'react'

const useseffect = () => {

    // // useeffect without dependencies

    // const [counter, setCounter] = useState(0);


    // useEffect(()=> {
    //     document.title = `${counter} new message !`
    // } )

    //   function increaseCounter() {
    //     setCounter(counter + 1);
    //   }
  
    //   return (
    //     <div>
    //       <h1> counter: {counter}</h1>
    //       <button onClick={increaseCounter}>increase</button>
    //     </div>
    //   );




      // useeffect with an emptu array 

    //   const [counter, setCounter] = useState(0);


    //   useEffect(()=> {
    //       document.title = `${counter} new message !`
    //   },[])
      
    //     function increaseCounter() {
    //       setCounter(counter + 1);
    //     }
    
    //     return (
    //       <div>
    //         <h1> counter: {counter}</h1>
    //         <button onClick={increaseCounter}>increase</button>
    //       </div>
    //     );



      // useeffect with variables
       
    const [counter, setCounter] = useState(0);
    const [otherCount, setotherCount] = useState(5);


    useEffect(()=> {
        document.title = `${otherCount} new message !`
    },[otherCount])
    
      function increaseCounter() {
        setCounter(counter + 1);
      }

      function increaseCounterby5() {
        setotherCount(otherCount + 5);
      }
  
      return (
        <div>
          <h1> counter: {otherCount}</h1>
          <button onClick={increaseCounter}>increase</button>
          <button onClick={increaseCounterby5}>increase by 5</button>

          <hr></hr>
        </div>
      );


}

export default useseffect