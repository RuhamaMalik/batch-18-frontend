import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Form from "../components/Form";
import Dashboard from "../layout/DashboardLayout";
import ProtectedRoutes from "../components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "auth",
        element: <Form />,
      },
    ],
  },

  ////////////////////// ADMIN Routes

  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoutes role="admin">
        <Dashboard />
      </ProtectedRoutes>
    ),
    children:[
      {
        index:true,
        element:<h1>Admin Dashboard</h1>
      }
      ,{
        path:"users",
        element:<h1>All Users</h1>
      }
      ,{
        path:"articles",
        element:<h1>All Articles</h1>
      }
    ]
  },


  ////////////////////// User Routes

    {
    path: "/user/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    children:[
      {
        index:true,
        element:<h1>User Dashboard</h1>
      }
      ,{
        path:"profile",
        element:<h1>My Profile</h1>
      }
      ,{
        path:"settings",
        element:<h1>Profile Settings</h1>
      }
    ]
  },

]);

export default router;
