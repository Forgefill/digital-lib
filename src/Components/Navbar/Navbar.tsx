import "./Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-links">
          <button className="nav-link-btn">Home</button>
          <button className="nav-link-btn">Search</button>
          <button className="nav-link-btn">Browse</button>
          <button className="nav-link-btn">Ranking</button>
          <button className="nav-link-btn">Filter</button>
        </div>
        <div className="user-info">
          <p className="username">Username</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;