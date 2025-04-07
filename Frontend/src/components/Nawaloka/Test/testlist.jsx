import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";

const TestList = () => {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);

  useEffect(() => {
    // Replace with your real API endpoint
    fetch("https://api.example.com/tests")
      .then((response) => response.json())
      .then((data) => setTests(data))
      .catch((error) => console.error("Error fetching test data:", error));
  }, []);

  const handleTestClick = (test) => {
    setSelectedTest(test);
  };

  return (
    <>
      <Navbar />
      <div
        className="p-6 max-w-6xl mx-auto font-sans"
        style={{
          backgroundImage: "url('/assets/test.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            Welcome to Nawaloka Test Service
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our wide range of medical tests. Click on any test to view
            more details.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer bg-white"
              onClick={() => handleTestClick(test)}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {test.name}
              </h3>
              <p className="text-gray-700">
                <strong>Price:</strong> Rs. {test.price}
              </p>
            </div>
          ))}
        </div>

        {selectedTest && (
          <div className="mt-10 p-6 border rounded-lg bg-gray-50 shadow-inner">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Test Details
            </h2>
            <p className="mb-2">
              <strong>Name:</strong> {selectedTest.name}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {selectedTest.description}
            </p>
            <p>
              <strong>Price:</strong> Rs. {selectedTest.price}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TestList;
