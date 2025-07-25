import { useState } from "react";

const App = () => {
const [Color, setColor] = useState("red");


  return (
    <>
       <h1 style={{color:Color}}>My Fav Color is {Color}</h1>
       <button onClick={()=>{setColor("Green")}}>Green</button>
       <button onClick={()=>{setColor("Blue")}}>Blue</button>
       <button onClick={()=>{setColor("Pink")}}>Pink</button>
       <button onClick={()=>{setColor("Orange")}}>Orange</button>
       <button onClick={()=>{setColor("yellow")}}>yellow</button>
       <button onClick={()=>{setColor("Black")}}>Black</button>
    </>
  )
}

export default App;