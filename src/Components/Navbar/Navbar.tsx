import "./Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-links">
          <button className="nav-link-btn">Home</button>
          <button className="nav-link-btn">About</button>
          <button className="nav-link-btn">Contact</button>
        </div>
        <div className="user-info">
          <p className="username">Username</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;