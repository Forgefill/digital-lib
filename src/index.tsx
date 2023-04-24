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
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

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
        path: "signIn",
        element: <SignIn/>,
      },
      {
        path:"signUp",
        element:<SignUp/>,
      }
    ],
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


