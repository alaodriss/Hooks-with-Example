import UseState from "./Hooks/Ustate";
import HandleMultipleInpout from "./Hooks/handlemultipleinput";
import Ueffect from "./Hooks/useseffect";
import FetchWithAXIOS from './Hooks/fetchwithaxios'
function App() {
  return (
    <div>
      <UseState />
      <HandleMultipleInpout />
      <Ueffect />
      <FetchWithAXIOS />
    </div>
  );
}

export default App;
