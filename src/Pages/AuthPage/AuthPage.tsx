import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function AuthPage() {
  return (
    <div className="page">
      <Navbar/>
      <div className="section"  style={{minHeight:'80vh'}}>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
        </Routes>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
export default AuthPage;
