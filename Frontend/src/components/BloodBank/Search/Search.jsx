import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../BB_Navbar/NavBar";
import Footer from "../Footer";

const CampaignSearch = () => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/blood_bank/districts");
        setDistricts(response.data.map((item) => item.district));
      } catch (err) {
        console.error("Error fetching districts:", err);
        setError("Failed to load districts.");
      }
    };
    fetchDistricts();
  }, []);

  const handleSearch = async () => {
    if (!selectedDistrict && !selectedDate) {
      setError("Please select at least one filter.");
      return;
    }

    let url = "";
    let params = {};

    if (selectedDistrict && selectedDate) {
      url = "http://127.0.0.1:8000/blood_bank/get-campaigns-by-district-and-date";
      params = {
        input_district: selectedDistrict,
        input_date: selectedDate,
      };
    } else if (selectedDistrict) {
      url = "http://127.0.0.1:8000/blood_bank/get-campaigns-by-district";
      params = {
        input_district: selectedDistrict,
      };
    } else if (selectedDate) {
      url = "http://127.0.0.1:8000/blood_bank/get-campaigns-by-date";
      params = {
        input_date: selectedDate,
      };
    }

    try {
      const response = await axios.get(url, { params });
      setCampaigns(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching campaigns:", err);
      setError("Failed to fetch campaigns.");
      setCampaigns([]);
    }
  };

  return (
    <>
    <div><Navbar />
    <div className="min-h-screen min-w-full bg-purple-50 p-8 margin-top-16">
      <div className="flex items-center justify-center h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1
          className="text-4xl font-extrabold text-center mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Search <span className="text-red-500">Blood Donation</span> Campaigns
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="block font-semibold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              District
            </label>
            <select
              className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">Select a District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
  
          <div>
            <label
              className="block font-semibold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Date
            </label>
            <input
              type="date"
              className="w-full border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
  
        <button
          onClick={handleSearch}
          style={{ backgroundColor: "var(--color-primary)" }}
          className="w-full hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Search
        </button>
  
        {error && <p className="text-red-500 mt-4">{error}</p>}
  
        <div className="mt-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign.campaign_id}
            className="bg-blue-100 p-4 rounded-lg shadow-md mb-4 border border-blue-200"
            style={{ color: "var(--color-primary)" }}
          >
            <p><strong>ID:</strong> {campaign.campaign_id}</p>
            <p><strong>Location:</strong> {campaign.location_address}</p>
            <p><strong>District:</strong> {campaign.district}</p>
            <p><strong>Province:</strong> {campaign.province}</p>
            <p><strong>Date & Time:</strong> {new Date(campaign.date_time).toLocaleString()}</p>
            <p><strong>Organizer:</strong> {campaign.organizer}</p>
          </div>
        ))}
      </div>

      </div>
    </div>
    </div>
   
    </div>
    <Footer />
    </>
  );
  
};

export default CampaignSearch;
