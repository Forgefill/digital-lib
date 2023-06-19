import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import LoginForm from "./Components/Auth/LoginForm/LoginForm";
import RegisterForm from "./Components/Auth/RegisterForm/RegisterForm";
import BookPage from "./Pages/BookPage/BookPage";
import BrowsePage from "./Pages/BrowsePage/BrowsePage";
import ForgotPasswordForm from "./Components/Auth/PasswordRestore/ForgotPasswordForm";
import RecoverPasswordForm from "./Components/Auth/PasswordRestore/RestorePasswordForm";
import ChapterPage from "./Pages/ChapterPage/ChapterPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProfileInfo from "./Pages/ProfilePage/ProfileInfo";
import ProfileLibrary from "./Pages/ProfilePage/ProfileLibrary";
import ProfileComments from "./Pages/ProfilePage/ProfileComments";
import ProfileReviews from "./Pages/ProfilePage/ProfileReviews";
import { AuthProvider } from "./Context/AuthContext";
import WritePage from "./Pages/WritePage/WritePage";
import CreateBookPage from "./Pages/WritePage/CreateBookPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminUsers from "./Pages/AdminPage/AdminUsers";
import AdminBooks from "./Pages/AdminPage/AdminBooks";
import AdminComments from "./Pages/AdminPage/AdminComments";
import AdminReviews from "./Pages/AdminPage/AdminReviews";
import AdminGenres from "./Pages/AdminPage/AdminGenres";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,

    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPasswordForm/>
      },
      {
        path: "recoverPassword",
        element: <RecoverPasswordForm/>
      }
    ],
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/book/:id",
    element: <BookPage />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
  {
    path:"/book/:bId/chapter/:cId",
    element: <ChapterPage/>
  },
  {
    path:"/write",
    element: <WritePage/>
  },
  {
    path:'/write/book',
    element: <CreateBookPage/>
  },
  {
    path:'/admin',
    element:<AdminPage/>,
    children: [
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "books",
        element: <AdminBooks />,
      },
      {
        path: "genres",
        element: <AdminGenres />,
      },
      {
        path: "comments",
        element: <AdminComments/>
      },
      {
        path: "reviews",
        element: <AdminReviews/>
      }
    ],
  },
  {
    path:"/profile",
    element: <ProfilePage/>,
    children: [
      {
        path: "info",
        element: <ProfileInfo />,
      },
      {
        path: "library",
        element: <ProfileLibrary />,
      },
      {
        path: "comments",
        element: <ProfileComments/>
      },
      {
        path: "reviews",
        element: <ProfileReviews/>
      }
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
