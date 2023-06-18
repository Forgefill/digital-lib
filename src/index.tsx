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
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/browse",
    element: <BrowsePage />,
  },
  {
    path:"/chapter",
    element: <ChapterPage/>
  },
  {
    path:"/write",
    element: <WritePage/>
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
