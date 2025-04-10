import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Login from "./components/Login/login";
import Register from "./components/Register/register";

import ChatInterface from "./components/chatbot/ChatInterface";
import BloodBank from "./components/BloodBank/Home/home";
import Search from "./components/BloodBank/Search/Search";

import Home from "./gampaha/pages/home";
import GampahaHome from "./gampaha/pages/gampaha_home";
import Cliniclist from "./gampaha/pages/clinic_list";
import Scanlist from "./gampaha/pages/scan_list";
import Testlist from "./gampaha/pages/test_list";

import ColomboHome from "./colombo/pages/colombo_home";
import ColomboCliniclist from "./colombo/pages/clinic_list";
import ColomboScanlist from "./colombo/pages/scan_list";
import ColomboTestlist from "./colombo/pages/test_list";

import HomagamaHome from "./homagama/pages/homagama_home";
import HomagamaCliniclist from "./homagama/pages/clininc_list";
import HomagamaScanlist from "./homagama/pages/scan_list";
import HomagamaTestlist from "./homagama/pages/test_list";

import NawalokaHome from "./components/Nawaloka/NawalokaHome/nawalokahome";
import NawalokaNavbar from "./components/Nawaloka/Navbar/navbar";
import NawalokaClinics from "./components/Nawaloka/Clinic/clinicCard";
import NawalokaTestList from "./components/Nawaloka/Test/testlist";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Gampaha Routes */}
          <Route path="/gampaha" element={<GampahaHome />} />
          <Route path="/gampaha/clinics" element={<Cliniclist />} />
          <Route path="/gampaha/scans" element={<Scanlist />} />
          <Route path="/gampaha/tests" element={<Testlist />} />

          {/* Colombo Routes */}
          <Route path="/colombo" element={<ColomboHome />} />
          <Route path="/colombo/clinics" element={<ColomboCliniclist />} />
          <Route path="/colombo/scans" element={<ColomboScanlist />} />
          <Route path="/colombo/tests" element={<ColomboTestlist />} />

          {/* Homagama Routes */}
          <Route path="/homagama" element={<HomagamaHome />} />
          <Route path="/homagama/clinics" element={<HomagamaCliniclist />} />
          <Route path="/homagama/scans" element={<HomagamaScanlist />} />
          <Route path="/homagama/tests" element={<HomagamaTestlist />} />

          {/* Nawaloka Routes */}
          <Route path="/nawaloka" element={<NawalokaHome />} />
          <Route path="/nawaloka/navbar" element={<NawalokaNavbar />} />
          <Route path="/nawaloka/clinics" element={<NawalokaClinics />} />
          <Route path="/nawaloka/tests" element={<NawalokaTestList />} />

          {/* Other Routes */}
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/bloodBank" element={<BloodBank />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
