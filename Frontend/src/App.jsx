import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet, Navigate, BrowserRouter } from 'react-router-dom';

import Home from "./gampaha/pages/home";
import GampahaHome from "./gampaha/pages/gampaha_home";
import Cliniclist from "./gampaha/pages/clinic_list";
import Scanlist from "./gampaha/pages/scan_list";
import Testlist from "./gampaha/pages/test_list";

import './App.css';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gampaha",
        element: <GampahaHome />,
      },
      {
        path: "/gampaha/clinics",
        element: <Cliniclist />,
      },
      {
        path: "/gampaha/scans",
        element: <Scanlist />,
      },
      {
        path: "/gampaha/tests",
        element: <Testlist />,
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
