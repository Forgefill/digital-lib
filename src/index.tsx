import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/register",
    element: <AuthorizationPage/>
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


