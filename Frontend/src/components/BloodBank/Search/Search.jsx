import React, { useState, useEffect } from "react";
import axios from "axios";

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
        // Extract district names from the response
        setDistricts(response.data.map((item) => item.district));
      } catch (err) {
        console.error("Error fetching districts:", err);
        setError("Failed to load districts.");
      }
    };
    fetchDistricts();
  }, []);
  
  const handleSearch = async () => {
    if (!selectedDistrict || !selectedDate) {
      setError("Please select both a district and a date.");
      return;
    }

    try {
      const response = await axios.get("http://127.0.0.1:8000/blood_bank/get-campaigns-by-district-and-date", {
        params: {
          input_district: selectedDistrict,
          input_date: selectedDate,
        },
      });
      setCampaigns(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching campaigns:", err);
      setError("Failed to fetch campaigns.");
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-purple-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Search Blood Donation Campaigns</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-purple-700 font-semibold mb-2">District</label>
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
            <label className="block text-purple-700 font-semibold mb-2">Date</label>
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
          className="w-full bg-purple-400 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="mt-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.campaign_id}
              className="bg-purple-500 p-4 rounded-lg shadow-md mb-4 border border-purple-400"
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
  );
};

export default CampaignSearch;
