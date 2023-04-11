import UseState from "./Hooks/Ustate";
import HandleMultipleInpout from "./Hooks/handlemultipleinput";
import Ueffect from "./Hooks/useseffect";
import FetchWithAXIOS from './Hooks/fetchwithaxios'
import UsReff from "./Hooks/usereff";
// import UseContexxt from "./Hooks/usecontext";
import FormSimple from './Form/form'

import React, {createContext} from "react";
export const LoginContext = createContext();

function App() {
  return (
    <LoginContext.Provider value={true}>
    

    <div>
      <UseState />
      <HandleMultipleInpout />
      <Ueffect />
      <FetchWithAXIOS />
      {/* <UseContexxt /> */}
      <UsReff />
      <hr></hr>
      <FormSimple />
    </div>

    </LoginContext.Provider>
  );
}

export default App;
