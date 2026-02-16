import { useState } from "react";
import Counter from "./Components/counter/Counter.jsx";
import AddItem from "./Components/todolist/AddItem.jsx";
import ItemList from "./Components/todolist/ItemList.jsx";

function App() {
  const [list, setList] = useState([]);
  const [idItem, setIdItem] = useState(null);
  const [inputval, setInputval] = useState("");
  const [editing, setEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (inputval === "") {
      alert("Please add the task name");
      return;
    }

    if (editing) {
      setList(list.map((item) => (item.id === idItem ? { ...item, text: inputval } : item)));
      setEditing(false);
    } else {
      setList([...list, { id: Math.random(), text: inputval, isChecked: isChecked }]);
    }
    setInputval("");
  };

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const task = list.find((task) => task.id === id);
    setInputval(task.text);
    setIdItem(id);
    setEditing(true);
  };
  const handleCheckboxChange = (id) => {
    setList(list.map((t) => (t.id === id ? { ...t, isChecked: !t.isChecked } : t)));
  };

  return (
    <div className="App">
      {/*First task*/}
      {/* <Counter /> */}
      {/*Second task*/}
      <div className="todo-wrapper">
        <AddItem addTask={addTask} inputval={inputval} setInputval={setInputval} editing={editing} />

        <ItemList
          list={list}
          deleteTask={deleteTask}
          handleEdit={handleEdit}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default App;
