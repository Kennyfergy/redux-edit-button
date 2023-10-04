import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const store = useSelector((store) => store.studentsReducer);
  const dispatch = useDispatch();
  const [newObj, setNewObj] = useState({ name: "", shirtColor: "" });
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch({
        type: "EDIT_STUDENT",
        payload: newObj,
      });
    } else {
      dispatch({
        type: "ADD_STUDENT",
        payload: { ...newObj, id: store[store.length - 1].id + 1 },
      });
      setNewObj({ name: "", shirtColor: "" });
    }
  };

  const handleEdit = (student) => {
    setNewObj(student);
    setEditMode(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Edit example</h1>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            value={newObj.name}
            onChange={(e) => setNewObj({ ...newObj, name: e.target.value })}
          />
          <input
            required
            type="text"
            placeholder="Shirt Color"
            value={newObj.shirtColor}
            onChange={(e) =>
              setNewObj({ ...newObj, shirtColor: e.target.value })
            }
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {store.map((student) => (
            <li key={student.id}>
              Name: {student.name} | Shirt Color: {`${student.shirtColor}`} |{" "}
              <button onClick={() => handleEdit(student)}>Edit</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
