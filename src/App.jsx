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


// import { useRef, useState,useEffect } from "react";
// const App=()=>{
//   const [txtval ,setTxtval] =useState("")
//  const myref = useRef(0);
 
// useEffect(()=>{
//   myref.current=myref.current+1;
// })
//   return (
//     <>
//    Enter name : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
//    <h1>My render Count : {myref.current}</h1>
    
//     </>
//   );
// };
// export default App;


// import { useReducer} from "react";

// const App=()=>{

//   const myMethod=(state,action)=>{
//     switch(action) {
//       case "Inc":
//         return state+1;

//       case "Dec":
//         return state-1;

//       default :
//         return state;

//     }
//   }

//   const [count, dispatch]= useReducer(myMethod,0);

//   return (
//     <>
//       <h1>My Counter Programer Using useReducer</h1>
//       <hr />

//       <button onClick={()=>{dispatch("Inc")}}> Increment </button>
//       <h1>Count : {count}</h1>
//       <button onClick={()=>{dispatch("Dec")}}> Decrement </button>
//     </>
//   );
// };
// export default App;


import { useReducer} from "react";
const App=()=>{
  const myMethod=(state,action)=>{
    switch(action) {
      case "red":
        return state="red";

      case "green":
        return state="green";

      case "blue":
        return state="blue";

      case "yellow":
        return state="yellow";

      default :
        return state;
    }
  }
  const [color, dispatch]= useReducer(myMethod,"pink");
  return (
    <>
      <h1>My Color Change Program Using useReducer</h1>
      <hr />
      <button onClick={()=>{dispatch("red")}}> Red </button>
      <button onClick={()=>{dispatch("green")}}> green </button>
      <button onClick={()=>{dispatch("blue")}}> blue </button>
      <button onClick={()=>{dispatch("yellow")}}> yellow </button>
      <div style={{backgroundColor:color, width:300, height:300}}>
      </div>
    </>
  );
};
export default App;