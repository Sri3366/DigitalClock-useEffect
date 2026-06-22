import { useEffect, useState } from "react";
//import DigitalClock from "./components/DigitalClock";
import Products from "./components/Products";




function App(){
  const[isShow,setIsShow] = useState(true)
  return(
   
   
    <div>
    {isShow && <DigitalClock/>}
    <button onClick={()=>{setIsShow(prev=>!prev)}}>
      {isShow?"Hide":"Show"}
    </button>
    </div>
  
  )
}
export default App;