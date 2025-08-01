import axios from "axios";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
 
  const handleInput=(e)=>{
    let name= e.target.name 
    let value= e.target.value

    setInput(values=>({...values, [name]:value}))
    console.log(input);
    
  }

  const handleSubmit = async() => {
    let api= "http://localhost:3000/student"
    const response = await axios.post(api, input)
    console.log(response);
    alert("data sent successfully")
  }

  return (
    <>
      <h1>Application Form</h1>

      Enter Name : <input type="text"  name="name" onChange={handleInput} />
      <br />
      Enter City : <input type="text" name="city"  onChange={handleInput} />
      <br />
      Enter Rollno. : <input type="text" name="rollno"  onChange={handleInput} />
      <br />
      Enter Fees : <input type="text" name="fee"  onChange={handleInput} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default App;