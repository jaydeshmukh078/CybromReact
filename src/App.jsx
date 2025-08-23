// import { useRef } from "react";
// const App = () => {
//   const myref = useRef()
//   const display1 = () => {
//     myref.current.style.width = "500px"
//     myref.current.style.height = "300px"
//     myref.current.style.border = "3px solid blue"

//   }
//   const display2 = () => {
//     myref.current.style.backgroundColor = "yellow";
//     myref.current.style.lineHeight = "9"
//     myref.current.style.paddingLeft = "30px"

//   }
//   const display3 = () => {
//     myref.current.style.color = "red"
//     myref.current.style.textDeclaration = "underline"
//   }

//   return (
//     <>

//       <button onClick={display1}>btn1</button>
//       <button onClick={display2}>btn2</button>
//       <button onClick={display3}>btn3</button>
//       <hr />
//       <div>
//         <h1 ref={myref}> welcome to Cybrom Bhopal!!</h1>
//       </div>



//     </>
//   );
// };
// export default App;


import { useRef, useState,useEffect } from "react";
const App=()=>{
  const [txtval ,setTxtval] =useState("")
 const myref = useRef(0);
 
useEffect(()=>{
  myref.current=myref.current+1;
})
  return (
    <>
   Enter name : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
   <h1>My render Count : {myref.current}</h1>
    
    </>
  );
};
export default App;