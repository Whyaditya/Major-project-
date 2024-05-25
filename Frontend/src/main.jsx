import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./route/App";
import SignUp from "./features/auth/SignUp";
import Home from "./pages/Home";
import SignIn from "./features/auth/Login";
import Protected from "./route/Protected";
import Profile from "./features/user/Profile";
import Activity from "./features/user/Activity";
import FlatForm from "./components/FlatForm"
import PricingPlans from "./features/subscription/Sub";
import AdminLogin from "./features/admin/AdminLogin";
import AdminProtected from "./route/AdminProtected";
import Dashboard from "./features/admin/Dashboard";
import Detail from "./pages/Detail";
import FlatList from "./features/flat/FlatList";
import PropertyList from "./features/property/PropertyList";
import BungalowForm from "./components/BungalowForm";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs/> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <SignIn /> },
      { path: "/admin-login", element: <AdminLogin/>},
      { path: "/subscription", element: <PricingPlans/>},
      { path: "/:propertyType/sell/:id", element: <Detail/>,},
      { path: "/:propertyType/rent/:id", element: <Detail/>,},
      { path: "/:propertyType/:type", element: <PropertyList/>},
      {
        path: "/home",
        element: <Protected />,
        children: [
          { path: "/home/profile", element: <Profile /> },
          { path: "/home/activity", element: <Activity /> },
          { path: "/home/activity/flatAD", element: <FlatForm/> },
          { path: "/home/activity/bungalowAD", element: <BungalowForm/> },
        ],
      },
      {
        path: '/admin', 
        element: <AdminProtected/> , 
        children:[
          {path:'/admin/dashboard', element: <Dashboard/>}
        ]}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
