// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChatInterface from "./components/chatbot/ChatInterface";
import BloodBank from "./components/BloodBank/Home/home";
import NawalokaHome from "./components/Nawaloka/NawalokaHome/nawalokahome";
import NawalokaNavbar from "./components/Nawaloka/Navbar/navbar";
import NawalokaClinics from "./components/Nawaloka/Clinic/clinicCard";
import NawalokaTestList from "./components/Nawaloka/Test/testlist";
import Home from "./gampaha/pages/home";
import GampahaHome from "./gampaha/pages/gampaha_home";
import Cliniclist from "./gampaha/pages/clinic_list";
import Scanlist from "./gampaha/pages/scan_list";
import Testlist from "./gampaha/pages/test_list";
import Search from "./components/BloodBank/Search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NawalokaHome />} />
          <Route path="/gampaha" element={<GampahaHome />} />
          <Route path="/gampaha/clinics" element={<Cliniclist />} />
          <Route path="/gampaha/scans" element={<Scanlist />} />
          <Route path="/gampaha/tests" element={<Testlist />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/bloodBank" element={<BloodBank />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nawaloka" element={<NawalokaHome />} />
          <Route path="/nawaloka/navbar" element={<NawalokaNavbar />} />
          <Route path="/nawaloka/clinics" element={<NawalokaClinics />} />
          <Route path="/nawaloka/tests" element={<NawalokaTestList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
