import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import 'bulma/css/bulma.min.css'

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();


  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null)
  }

  const handleSignIn = () => {
    navigate("/auth/login")
  }

  const handleHomeClick =()=>{
    navigate("/")
  }

  const handleSearchClick= ()=>{
    navigate("/search")
  }
  
  return (
    <nav className="navbar is-top has-shadow"  style={{padding:5, width:'80%'}}>
      <div className="navbar-menu">
        <div className="navbar-start ">
          <div className="navbar-item">
            <button className="button is-white" onClick={handleHomeClick}>
              <span className="icon is-small">
                <i className="fas fa-home"></i>
              </span>
              <span>Home</span>
            </button>
          </div>
          
          <div className="navbar-item">
            <button className="navbar-item button is-white" onClick={handleSearchClick}>
              <span className="icon is-small">
                <i className="fas fa-search"></i>
              </span>
              <span>Search</span>
            </button>
          </div>
          

          <div className="navbar-item">
            <button className="navbar-item button is-white">
              <span className="icon is-small">
                <i className="fas fa-folder-open"></i>
              </span>
              <span>Browse</span>
            </button>
          </div>
          
          <div className="navbar-item">
            <button className="navbar-item button is-white">
              <span className="icon is-small">
                <i className="fas fa-chart-line"></i>
              </span>
              <span>Ranking</span>
            </button>
          </div>
          

          <div className="navbar-item">
            <button className="navbar-item button is-white">
              <span className="icon is-small">
                <i className="fas fa-filter"></i>
              </span>
              <span>Filter</span>
            </button>
          </div>
          
        </div>

        <div className="navbar-end">
          {token ? (
            <div className="navbar-item">
              <p className="username">Username</p>
              <button className="button is-light" onClick={handleSignOut}>Sign out</button>
            </div>
          ) : (
            <div className="navbar-item">
              <button className="button is-primary" onClick={handleSignIn}>Sign in</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;