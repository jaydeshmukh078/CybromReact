import { useState } from "react";

const App = () => {
  const [Name, setName] = useState("");
  const [City, setCity] = useState("");

  const handleSubmit = () => {
    console.log("Form submitted");
    console.log({ handlename: Name, handlecity: City });

  }

  return (
    <>
      <h1>Application Form</h1>

      Enter Name : <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
      <br />
      Enter City : <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default App;