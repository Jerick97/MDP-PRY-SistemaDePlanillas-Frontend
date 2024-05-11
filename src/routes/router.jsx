import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployed from "../pages/createEmployed/CreateEmployed";
import LoginLayout from "../layouts/LoginLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create_employed",
        element: <CreateEmployed />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default router;
