import './AuthPage.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import "../page.css"



function AuthPage(){
    return (
    <div className='page auth-container'>
        <Routes>
                <Route path="/" element={<Navigate to="/auth/login" replace />} />
        </Routes>
        <Outlet/>
    </div>
    )
}
export default AuthPage;
