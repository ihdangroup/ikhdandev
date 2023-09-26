import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "../pages";
import Awards from "../pages/awards";
import Interest from "../pages/interest";
import Project from "../pages/project";
import Skills from "../pages/skill";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/skill",
      element: <Skills />,
    },
    {
      path: "/interest",
      element: <Interest />,
    },
    {
      path: "/awards",
      element: <Awards />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
