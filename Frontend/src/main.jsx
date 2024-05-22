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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <SignIn /> },
      { path: "/subscription", element: <PricingPlans/>},
      {
        path: "/home",
        element: <Protected />,
        children: [
          { path: "/home/profile", element: <Profile /> },
          { path: "/home/activity", element: <Activity /> },
          { path: "/home/activity/flatAD", element: <FlatForm/> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
