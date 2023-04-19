import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { useEffect, useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Task from "./components/Task/Task";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filter, setFilter] = useState('All')

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

  /* Modificar el filtro */
  const handleFilter = (filter) => setFilter(filter);

  /* Borrar task */
  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="todo-app_content">
        <Navbar handle={handleFilter} />
        <AddForm addTask={addTask} />

        <div className="taskList">
          {
            tasks.map((task, index) => {
              if (filter == 'All')
                return <Task task={task} key={index} handle={handleStatus} filter={filter} />
              else if (task.status == 'completed' && filter != 'active')
                return <Task task={task} key={index} handle={handleStatus} filter={filter} deleteTask={handleDelete} />
              else if (task.status == 'active' && filter != 'completed')
                return <Task task={task} key={index} handle={handleStatus} filter={filter} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;