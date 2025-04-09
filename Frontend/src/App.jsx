import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./gampaha/pages/home";
import GampahaHome from "./gampaha/pages/gampaha_home";
import Cliniclist from "./gampaha/pages/clinic_list";
import Scanlist from "./gampaha/pages/scan_list";
import Testlist from "./gampaha/pages/test_list";

// Colombo Components
import ColomboHome from "./colombo/pages/colombo_home";
import ColomboCliniclist from "./colombo/pages/clinic_list";
import ColomboScanlist from "./colombo/pages/scan_list";
import ColomboTestlist from "./colombo/pages/test_list";

// Your components
import ChatInterface from './components/chatbot/ChatInterface';
import BloodBank from './components/BloodBank/Home/home';
import Search from './components/BloodBank/Search/Search';
import Login from './components/Login/login';
import Register from './components/Register/register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Main and Gampaha Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/gampaha" element={<GampahaHome />} />
          <Route path="/gampaha/clinics" element={<Cliniclist />} />
          <Route path="/gampaha/scans" element={<Scanlist />} />
          <Route path="/gampaha/tests" element={<Testlist />} />
          
          {/* Colombo Routes */}
          <Route path="/colombo" element={<ColomboHome />} />
          <Route path="/colombo/clinics" element={<ColomboCliniclist />} />
          <Route path="/colombo/scans" element={<ColomboScanlist />} />
          <Route path="/colombo/tests" element={<ColomboTestlist />} />
          
          {/* Your Routes */}
          <Route path='/bloodBank' element={<BloodBank/>}/>
          <Route path='/chat' element={<ChatInterface/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;