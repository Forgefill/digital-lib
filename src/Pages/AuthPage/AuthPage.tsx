import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "../page.css";
import Navbar from "../../Components/Navbar/Navbar";

function AuthPage() {
  return (
    <div className="page">
      <Navbar/>
      <div className="section">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}
export default AuthPage;
