import React,{useContext} from 'react'
    // useContect hook is used to manage global data in react application like exemple : global state , services , themes, User settings

    // create the context in fiche app.js
    // Providing the context
    // Consuming the context 


    //  and with methode chlidern create new file context and add fiche provider 
import { LoginContext } from './context/logincontext'
const usecontext = () => {
   const login = useContext(LoginContext);
   console.log(login)

  return (
    <div>usecontext</div>
  )
}

export default usecontext