import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="blood-header">
      <div className="header-container">
        <h1 className="logo">Welcome to Blood Bank</h1>
        <p className="tagline">"A centralized hub to learn, locate, and save lives through blood donation. Empowering communities with knowledge, eligibility info, and nearby donation centers—all in one place."</p>
      </div>
    </header>
  );
};

export default Header;
