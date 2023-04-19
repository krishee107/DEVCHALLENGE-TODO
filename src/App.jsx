import Navbar from "./components/Navbar/Navbar"
import './App.css';

const App = () => {
  return (
    <div className="todo-app">
      <h1>#todo</h1>
      <div className="todo-app_content">
        <Navbar />
      </div>
    </div>
  )
}

export default App