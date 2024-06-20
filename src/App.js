import { useState } from "react";
import Buttons from "./Buttons";
const Button=()=>{
  const[count,setCount]=useState(0);
    function handle()
    {
      setCount(count+1);
    }
  return(
    <>
    <button onClick={handle} style={{margin:"20px",backgroundColor:"lightpink"}} >Clicked{count}times</button>
     <br></br>
    </>
  )
}
function App() {
  return (
    <div>

   <Button/>
   <Button/>
   <Buttons/>
   <Buttons/>
    </div>
  );
}

export default App;
