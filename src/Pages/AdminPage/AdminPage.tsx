import "../page.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Navigate, Outlet, Route, Routes, useNavigate, useLocation } from "react-router-dom";

 function AdminPage() {

    const currentUrl = useLocation().pathname;
    const navigate = useNavigate();


    return (
    <div className="page" style={{height:"100%"}}>

        <Navbar/>
        <div className="section pt-3" style={{minWidth:'100%', width:'100%', minHeight:'80vh', backgroundColor:'#E5EAEE'}}>
            <div className="columns is-vcentered is-centered">
                <div className="column"  style={{minWidth:'70%', maxWidth:'70%'}}>
                    <div className="box">
                            <div className="block has-text-centered">
                                <span className="title is-5">Admin page</span>
                            </div>

                        
                        <div className="tabs  is-boxed is-fullwidth">
                            <ul>
                                <li className={currentUrl === "/admin/users" ? 'is-active': ''} onClick={()=>navigate('/admin/users')}><a>Users</a></li>
                                <li className={currentUrl === "/admin/genres" ? 'is-active': ''} onClick={()=>navigate('/admin/genres')}><a>Genres</a></li>
                                <li className={currentUrl === "/admin/books" ? 'is-active': ''} onClick={()=>navigate('/admin/books')}><a>Reported Books</a></li>
                                <li className={currentUrl === "/admin/comments" ? 'is-active': ''} onClick={()=>navigate('/admin/comments')}><a>Comments</a></li>
                                <li className={currentUrl === "/admin/reviews" ? 'is-active': ''} onClick={()=>navigate('/admin/reviews')}><a>Reviews</a></li>
                            </ul>
                        </div>
                        
                        <Outlet/>
                    </div>
                </div>     
            </div>

            
        </div>
        <Footer/>
    </div>
  );
}

export default AdminPage;