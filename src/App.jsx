import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, taskDelete, taskComplete } from "./todoSlice";

const App = () => {
  const [txtval, setTxtVal] = useState("");
  const myTask = useSelector((state) => state.mytodo.task);
  const dispatch = useDispatch();

  let sno = 0;

  const handleAdd = () => {
    if (txtval.trim() === "") return;
    dispatch(addTask({ id: Date.now(), work: txtval, status: false }));
    setTxtVal("");
  };

  const ans = myTask.map((key) => {
    sno++;
    return (
      <tr key={key.id}>
        <td>{sno}</td>
        <td>
          {key.status ? (
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {key.work}
            </span>
          ) : (
            key.work
          )}
        </td>
        <td>
          {!key.status && (
            <button onClick={() => dispatch(taskComplete({ id: key.id }))}>
              Complete
            </button>
          )}
          <button onClick={() => dispatch(taskDelete({ id: key.id }))}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={txtval}
        onChange={(e) => setTxtVal(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <table border="1" style={{ marginTop: "10px", width: "50%" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Work</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </div>
  );
};

export default App;