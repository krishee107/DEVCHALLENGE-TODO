import Navbar from "./components/Navbar/Navbar"
import './App.css';
import { useState } from "react";
import AddForm from "./components/AddForm/AddForm";

const App = () => {
  const [task, setTask] = useState([])

  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="todo-app_content">
        <Navbar />
        <AddForm />
      </div>
    </div>
  )
}

export default App