import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "bulma/css/bulma.min.css";
import AuthContext from "../../Context/AuthContext";

function Navbar() {
  const authData = useContext(AuthContext);
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setToken(null);
  };

  const handleSignIn = () => {
    navigate("/auth/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleBrowseClick = () => {
    navigate("/browse");
  };

  const handleWriteClick = () => {
    navigate("/write");
  };
  return (
    <nav
      className="mb-1 navbar is-top has-shadow"
      style={{ padding: 5, width: "100%" }}
    >
      <div className="navbar-menu" style={{marginLeft:'10%'}}>
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
            <button
              className="button is-white"
              onClick={handleSearchClick}
            >
              <span className="icon is-small">
                <i className="fas fa-search"></i>
              </span>
              <span>Search</span>
            </button>
          </div>

          <div className="navbar-item">
            <button
              className="button is-white"
              onClick={handleBrowseClick}
            >
              <span className="icon is-small">
                <i className="fas fa-folder-open"></i>
              </span>
              <span>Browse</span>
            </button>
          </div>

          <div className="navbar-item">
            <button
              className="button is-white"
              onClick={handleWriteClick}
            >
              <span className="icon is-small">
                <i className="fas fa-solid fa-pen-to-square"></i>
              </span>
              <span>Write</span>
            </button>
          </div>
        </div>

        <div className="navbar-end" style={{marginRight:'10%'}}>
          {authData?.isAuthenticated ? (
            <div  className="has-text-right">
              <p className="is-size-7 m-1">Hello <strong>{authData.username}</strong></p>
              <div className="buttons">
              <button className="button is-rounded is-white is-small" onClick={()=>{navigate('/profile')}}>
                <span className="icon is-small">
                  <i className="fas fa-solid fa-user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button className="button is-rounded is-white is-small" onClick={()=>{navigate('/profile/library')}}>
                <span className="icon is-small">
                  <i className="fas fa-solid fa-book-open"></i>
                </span>
                <span>Library</span>
              </button>

              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <button className="button is-primary" onClick={handleSignIn}>
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
