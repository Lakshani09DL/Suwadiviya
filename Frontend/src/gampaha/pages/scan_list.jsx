"use client";

import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from "../../assets/scan.jpg";
import axios from "axios";

function GampahaTest() {
  const [selectedScan, setSelectedScan] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [scan, setscan] = useState([]);

    useEffect(() => {
        const fetchScans = async () => {
            try {
                const response = await fetch("http://localhost:8000/gampaha/tests/scanlist");
                if (!response.ok) {
                    throw new Error("Failed to fetch clinics");
                }
                const data = await response.json();
                setscan(data);
            } catch (error) {
                console.error("Error fetching clinic list:", error);
            }
        };
        fetchScans();
    }, []);

  // Use the API data if available, otherwise use the hardcoded data
  const displayScans = scan;

  // Filter tests based on search term
  const filteredScans = displayScans.filter((scan) =>
    scan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Component to display each test with only name and price
  const ScanCard = ({ scan, setSelectedScan, selectedScan, itemVariants }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className="bg-slate-50 shadow-lg rounded-xl px-10 py-6 w-full max-w-full mx-auto hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          zIndex: 1,
        }}
      >
        <div>
          <h3 className="text-xl text-blue-700 font-semibold">{scan.name}</h3>
          {scan.price > 0 && (
            <p className="text-gray-600 mt-2 font-medium">
              Price: Rs {scan.price}
            </p>
          )}
        </div>

        <button
          className="text-white bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 mt-4 w-full"
          onClick={() => setSelectedScan(scan)}
        >
          View More
        </button>
      </motion.div>
    );
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar
        style={{
          zIndex: 1,
        }}
      />

      <motion.h2
        className="bg-blue-50 text-5xl text-center text-blue-500 font-bold py-20"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        style={{
          zIndex: 1,
        }}
      >
        Welcome to Gampaha District General Hospital Scan Service!
      </motion.h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by test name..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange} // Filter as you type
        />
      </div>

      <motion.div
        className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-10 px-10 py-20"
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${test_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div
          className="fixed mt-96 top-0 bottom-0 bg-gray-500 opacity-60 z-0"
          style={{
            left: "0.5rem",
            right: "0.5rem",
          }}
        ></div>

        {filteredScans.length > 0 ? (
          filteredScans.map((scan) => (
            <ScanCard
              key={scan.id}
              scan={scan}
              setSelectedScan={setSelectedScan}
              selectedScan={selectedScan}
              itemVariants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-white bg-blue-700 p-4 rounded-lg">
            No tests found matching "{searchTerm}". Please try a different
            search term.
          </div>
        )}

        {selectedScan && (
          <div
            className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full"
            style={{ zIndex: 1 }}
          >
            <div className="bg-white rounded-xl p-6 w-11/12 max-w-3xl shadow-lg relative">
              <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 rounded-t-lg">
                {selectedScan.name}
                {selectedScan.price > 0 && (
                  <span className="text-lg text-gray-700 ml-2 block md:inline mt-1 md:mt-0">
                    Price: Rs {selectedScan.price}
                  </span>
                )}
              </h3>
              <div className="bg-slate-100 rounded-b-xl p-6 w-full max-w-full mx-auto flex flex-col gap-4">
                <p className="text-xl text-black font-semibold">
                  <strong>Location:</strong> {selectedScan.location}
                </p>

                <p className="text-xl text-black font-semibold">
                  <strong>Special Information:</strong>
                </p>
                <ul className="list-disc pl-5">
                  {Object.entries(selectedScan.special_information).map(
                    ([key, value], index) => (
                      <li key={index} className="text-lg text-black mb-2">
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <button
                onClick={() => setSelectedScan(null)}
                className="absolute top-2 right-3 bg-red-500 text-white hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default GampahaTest;