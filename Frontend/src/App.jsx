import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet, Navigate, BrowserRouter } from 'react-router-dom';

import Home from "./homagama/pages/home";


import './App.css';
import HomagamaHome from './homagama/pages/homagama_home';
import Cliniclist from './homagama/pages/clininc_list';
import Scanlist from './homagama/pages/scan_list';
import Testlist from './homagama/pages/test_list';
import ChatInterface from './components/ChatInterface'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <ChatInterface />,
      },
      {
        path: "/homagama",
        element: <HomagamaHome/>,
      },
      {
        path: "/homagama/clinics",
        element: <Cliniclist/>,
      },
      {
        path: "/homagama/scans",
        element: <Scanlist/>,
      },
      {
        path: "/homagama/tests",
        element: <Testlist/>,
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;