// App.jsx

import React from "react";

import Login from "./components/Login/login";
import Register from "./components/Register/register";

import ChatInterface from "./components/chatbot/ChatInterface";
import BloodBank from "./components/BloodBank/Home/home";
import Search from "./components/BloodBank/Search/Search";

import Home from "./gampaha/pages/home";
import GampahaHome from "./gampaha/pages/gampaha_home";
import GampahaCliniclist from "./gampaha/pages/clinic_list";
import Scanlist from "./gampaha/pages/scan_list";
import Testlist from "./gampaha/pages/test_list";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ColomboHome from "./colombo/pages/colombo_home";
import ColomboCliniclist from "./colombo/pages/clinic_list";
import ColomboScanlist from "./colombo/pages/scan_list";
import ColomboTestlist from "./colombo/pages/test_list";

import HomagamaHome from "./homagama/pages/homagama_home";
import HomagamaCliniclist from "./homagama/pages/clininc_list";
import HomagamaScanlist from "./homagama/pages/scan_list";
import HomagamaTestlist from "./homagama/pages/test_list";

import NawalokaHome from "./Nawaloka/pages/nawalokahome";
import NawalokaNavbar from "./Nawaloka/components/navbar/navbar";
import NawalokaClinics from "./Nawaloka/pages/cliniclist";
import NawalokaTestList from "./Nawaloka/pages/testlist";
import NawalokaScanList from "./Nawaloka/pages/scanlist";

import Telemedicine from "./components/Telemedicine/home";
import TMgampaha from "./components/Telemedicine/gampaha";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Gampaha Routes */}
          <Route path="/gampaha" element={<GampahaHome />} />
          <Route path="/gampaha/clinics" element={<GampahaCliniclist/>} />
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
          <Route path="/nawaloka/scans" element={<NawalokaScanList />} />

          {/* Other Routes */}
          <Route path="/chat" element={<ChatInterface />} />

          <Route path="/bloodBank" element={<BloodBank />} />
          <Route path="/search" element={<Search />} />

          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/telemedicine/gampaha" element={<TMgampaha />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
