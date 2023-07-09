import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NotFoundPage from "../pages/404";
import LoginPage from "../pages/login";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/pages',
    element: <HomePage />
  },
  {
    path: '/pages/:slug',
    element: <HomePage />
  },
  {
    path: '/setting',
    element: <HomePage />
  },
  {
    path: '/setting/:slug',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])