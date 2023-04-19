import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { useEffect, useState } from "react";
import AddForm from "./components/AddForm/AddForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    console.log("ENTRA")
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="todo-app_content">
        <Navbar />
        <AddForm addTask={addTask} />

        <div className="taskList">
          {tasks.map((task, index) => (
            <div key={index}>
              <span>{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;