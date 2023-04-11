import React from 'react'



//useLayoutEffect works exactly the same as useeffect (also the same syntax).
// but the difference is " useEffect runs after the DOM is printed on the browser"


// React calculate this component   => useLayoutEffect  ==> React prints all elements ==> useEffect
 // synchronons 
const useLayoutEffect = () => {
  return (
    <div>useLayoutEffect</div>
  )
}

export default useLayoutEffect