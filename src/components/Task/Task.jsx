import './Task.css';

const Task = ({ task }) => {
  return (
    <div className="task">
      <label>
        <input type="checkbox" className='checkDone' /> {task.title}
      </label>
    </div>
  )
}

export default Task