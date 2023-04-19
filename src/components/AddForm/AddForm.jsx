import './AddForm.css';

const AddForm = () => {
  return (
    <div className="addForm">
      <form>
        <input type="text" name="task" id="task" placeholder="add details" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddForm