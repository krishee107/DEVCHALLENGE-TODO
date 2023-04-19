import './Navbar.css';

const Navbar = ({ handle }) => {
  return (
    <nav>
      <div className="allTab tab" onClick={() => handle('All')}>All</div>
      <div className="activeTab tab" onClick={() => handle('active')}>Active</div>
      <div className="completedTab tab" onClick={() => handle('completed')}>Completed</div>
    </nav>
  )
}

export default Navbar