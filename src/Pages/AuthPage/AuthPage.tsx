import './AuthPage.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import "../page.css"



function AuthPage(){
    return (
    <div className='page'>
        <Routes>
                <Route path="/" element={<Navigate to="/auth/signIn" replace />} />
        </Routes>
        <Outlet/>
    </div>
    )
}
export default AuthPage;
