import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Error from "./pages/404";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Contact from "./pages/contactpage";
import HelpDesk from "./pages/helpdeskpage";
import Collab from "./pages/collaboratepage";
import About from "./pages/aboutpage";
import Services from "./pages/servicespage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/collab",
    element: <Collab />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/helpdesk",
    element: <HelpDesk />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
