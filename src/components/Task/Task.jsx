import './Task.css';

const Task = ({ task, handle }) => {

  const changeStatus = () => {
    const status = task.status === 'active' ? 'completed' : 'active';
    handle(task.id, status);
  }

  return (
    <div className="task">
      <label>
        <input type="checkbox" className='checkDone' onClick={changeStatus} />{task.title} - {task.status}
      </label>
    </div>
  )
}

export default Task;
