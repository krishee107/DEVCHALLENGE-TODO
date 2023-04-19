import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { useEffect, useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Task from "./components/Task/Task";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  /* Añadir una tarea */
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /* Completar/Descompletar una tarea */
  const handleStatus = (id, status) => {
    const newTasks = tasks.map(t => {
      if (t.id === id) {
        return { ...t, status: status };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  }
  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="todo-app_content">
        <Navbar />
        <AddForm addTask={addTask} />

        <div className="taskList">
          {tasks.map((task, index) => (
            <Task task={task} key={index} handle={handleStatus} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;