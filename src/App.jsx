const App = () => {

const display=(e)=>{
  let mytype=e.type;
  let myname=e.target.name;
  let myvalue=e.target.value;
  alert(`name : ${myname} type : ${mytype} value : ${myvalue}`);
}

  return (
    <>
       <h1>Welcome to Cybrom</h1>
       <button name="btn1" value="mybtn1" onClick={display}>Click Here!</button> 
    </>
  )
}

export default App;