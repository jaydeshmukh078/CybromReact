import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./todoSlice";

const App = () => {
  const [txtval, setTxtVal] = useState("");
  const myTask = useSelector((state) => state.mytodo.task);
  const dispatch = useDispatch();

  console.log(myTask);

  return (
    <>
      <h1>To Do App</h1>
      <hr />
      Enter Your Task : <input type="text" value={txtval} onChange={(e) => setTxtVal(e.target.value)}/>
      <button  onClick={() => dispatch(addTask({ id: Date.now(), work: txtval }))}> Add </button>
    </>
  );
};

export default App;