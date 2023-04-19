import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="allTab tab">All</div>
      <div className="activeTab tab">Active</div>
      <div className="completedTab tab">Completed</div>
    </nav>
  )
}

export default Navbar