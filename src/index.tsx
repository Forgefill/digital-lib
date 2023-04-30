import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthPage from './Pages/AuthPage/AuthPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/auth",
    element: <AuthPage/>,
    
    children: [
      {
        path: "login",
        element: <LoginForm/>,
      },
      {
        path:"register",
        element:<RegisterForm/>,
      }
    ],
  },
  {
    path:"/search",
    element:<SearchPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


