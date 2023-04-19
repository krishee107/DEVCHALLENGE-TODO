import './Task.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Task = ({ task, handle, filter, deleteTask }) => {

  const changeStatus = () => {
    const status = task.status === 'active' ? 'completed' : 'active';
    handle(task.id, status);
  }



  return (
    <div className="task">
      {filter == 'completed' ?
        <label className='completed'>
          <div>
            <input type="checkbox" checked onClick={changeStatus} />
            {task.title}
          </div>
          <DeleteOutlineIcon onClick={() => deleteTask(task.id)} style={{ color: `#BDBDBD`, cursor: `pointer` }} />
        </label>
        :
        <div>
          {task.status == 'active' ?
            <label>
              <input type="checkbox" onClick={changeStatus} />
              {task.title}
            </label>
            :
            <label className='completed'>
              <div>
                <input type="checkbox" checked onClick={changeStatus} />
                {task.title}

              </div>
            </label>
          }
        </div>
      }


    </div>
  )
}

export default Task;
