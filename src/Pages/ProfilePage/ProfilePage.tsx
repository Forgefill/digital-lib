import "../page.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Navigate, Outlet, Route, Routes, useNavigate, useLocation } from "react-router-dom";

 function ProfilePage() {

    const currentUrl = useLocation().pathname;
    const navigate = useNavigate();


    return (
    <div className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/profile/info" replace />} />
        </Routes>

        <Navbar/>
        <div className="section pt-3" style={{minWidth:'100%', width:'100%', backgroundColor:'#E5EAEE'}}>
            <div className="columns is-vcentered is-centered">
                <div className="column"  style={{minWidth:'70%', maxWidth:'70%'}}>
                    <div className="box">
                            <div className="block">
                                <span className="title is-5">Forgefill</span>
                            </div>
                            <div className="block">
                                <span className="subtitle">bubkamisha14@gmail.com</span>
                            </div>

                        
                        <div className="tabs  is-boxed is-fullwidth">
                            <ul>
                                <li className={currentUrl === "/profile/info" ? 'is-active': ''} onClick={()=>navigate('/profile/info')}><a>Info</a></li>
                                <li className={currentUrl === "/profile/library" ? 'is-active': ''} onClick={()=>navigate('/profile/library')}><a>Library</a></li>
                                <li className={currentUrl === "/profile/comments" ? 'is-active': ''} onClick={()=>navigate('/profile/comments')}><a>Comments</a></li>
                                <li className={currentUrl === "/profile/reviews" ? 'is-active': ''} onClick={()=>navigate('/profile/reviews')}><a>Reviews</a></li>
                            </ul>
                        </div>
                    </div>
                </div>     
            </div>
           
            <Outlet />

            
        </div>
        <Footer/>
    </div>
  );
}

export default ProfilePage;