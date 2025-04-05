// App.jsx
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatInterface from "./components/chatbot/ChatInterface";
import BloodBank from "./components/BloodBank/Home/home";
import NawalokaHome from "./components/Nawaloka/NawalokaHome/nawalokahome";
import NawalokaNavbar from "./components/Nawaloka/Navbar/navbar";
import NawalokaClinics from "./components/Nawaloka/Clinic/clinicCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NawalokaHome />} />
          <Route path="/bloodBank" element={<BloodBank />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/nawaloka" element={<NawalokaHome />} />
          <Route path="/nawaloka/navbar" element={<NawalokaNavbar />} />
          <Route path="/nawaloka/clinics" element={<NawalokaClinics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
