import { useState } from 'react';
import './AddForm.css';

const AddForm = (props) => {
  const [task, setTask] = useState({
    title: '',
    status: 'active',
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTask({
      ...task,
      title: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(task);
    setTask({
      title: '',
      status: 'active',
    });
  }

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" id="task" placeholder="add details" value={task.title} onChange={handleInputChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddForm;
