import './Task.css';

const Task = ({ task, handle }) => {

  const changeStatus = () => {
    const status = task.status === 'active' ? 'completed' : 'active';
    handle(task.id, status);
  }

  return (
    <div className="task">
      {task.status == 'active' ?
        <label>
          <input type="checkbox" onClick={changeStatus} />
          {task.title}
        </label>
        :
        <label className='completed'>
          <input type="checkbox" checked onClick={changeStatus} />
          {task.title}
        </label>
      }
    </div>
  )
}

export default Task;
