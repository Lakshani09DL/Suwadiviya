"use client";

import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from "../../assets/tests.jpg";
import axios from "axios";

function NawalokaTest() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dummyTest = [];
  const [tests, setTests] = useState(dummyTest);

  // Sample data for tests
  const test = [
    {
      id: 1,
      name: "Thyroid Function Test (TFT)",
      type: "Test",
      machine_name: "",
      price: 0,
      location: "B1 Building-3rd Floor-Main Laboratory",
      special_information: {
        "Why it's used":
          "A TFT measures the levels of thyroid hormones (T3, T4, and TSH) in your blood to assess thyroid function.",
        "Before the test": "No special preparation is needed.",
        "After the test": "You can resume normal activities immediately.",
      },
    },
    {
      id: 2,
      name: "Complete Blood Count (CBC)",
      type: "Test",
      machine_name: "",
      price: 1800,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Evaluates overall health and detects a variety of disorders, such as anemia or infection.",
        "Before the test": "No special preparation needed.",
        "After the test": "Normal activities can be resumed.",
      },
    },
    {
      id: 3,
      name: "Fasting Blood Sugar (FBS)",
      type: "Test",
      machine_name: "",
      price: 700,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Measures blood sugar level after fasting to diagnose diabetes.",
        "Before the test":
          "Do not eat or drink anything except water for at least 8 hours.",
        "After the test": "You may eat and drink as usual.",
      },
    },
    {
      id: 4,
      name: "Lipid Profile",
      type: "Test",
      machine_name: "",
      price: 2400,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Assesses cholesterol levels to evaluate heart disease risk.",
        "Before the test": "Fasting for 9–12 hours is recommended.",
        "After the test": "Resume normal diet and activities.",
      },
    },
    {
      id: 5,
      name: "Liver Function Test (LFT)",
      type: "Test",
      machine_name: "",
      price: 3000,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Checks liver enzymes and proteins to assess liver health.",
        "Before the test": "No special preparation usually required.",
        "After the test": "Resume usual activities.",
      },
    },
    {
      id: 6,
      name: "Renal Function Test (RFT)",
      type: "Test",
      machine_name: "",
      price: 2800,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Evaluates kidney function through blood urea and creatinine levels.",
        "Before the test": "Avoid high protein foods before test if advised.",
        "After the test": "No restrictions after test.",
      },
    },
    {
      id: 7,
      name: "Urine Full Report (UFR)",
      type: "Test",
      machine_name: "",
      price: 600,
      location: "Main Laboratory - 3rd Floor",
      special_information: {
        "Why it's used":
          "Identifies urinary tract infections, kidney disease, and diabetes.",
        "Before the test": "Collect midstream urine in a sterile container.",
        "After the test": "Resume normal activities.",
      },
    },
    {
      id: 8,
      name: "C-Reactive Protein (CRP)",
      type: "Test",
      machine_name: "",
      price: 2300,
      location: "Biochemistry - 3rd Floor",
      special_information: {
        "Why it's used": "Detects inflammation or infection in the body.",
        "Before the test": "No special preparation needed.",
        "After the test": "You may resume normal routine.",
      },
    },
    {
      id: 9,
      name: "Prothrombin Time (PT/INR)",
      type: "Test",
      machine_name: "",
      price: 1600,
      location: "Hematology Department",
      special_information: {
        "Why it's used":
          "Measures blood clotting ability, useful for patients on anticoagulants.",
        "Before the test": "Inform lab if you're on blood thinners.",
        "After the test": "Follow doctor's guidance on medication.",
      },
    },
    {
      id: 10,
      name: "HbA1c",
      type: "Test",
      machine_name: "",
      price: 2200,
      location: "Diabetes Clinic - Ground Floor",
      special_information: {
        "Why it's used":
          "Indicates average blood sugar levels over past 3 months.",
        "Before the test": "No fasting required.",
        "After the test": "Results usually available within 24 hours.",
      },
    },
    {
      id: 11,
      name: "Vitamin D Test",
      type: "Test",
      machine_name: "",
      price: 3500,
      location: "Biochemistry - 3rd Floor",
      special_information: {
        "Why it's used": "Assesses vitamin D deficiency or insufficiency.",
        "Before the test": "No special preparation required.",
        "After the test": "Doctor may recommend supplements if low.",
      },
    },
    {
      id: 12,
      name: "Vitamin  B-12  Test",
      type: "Test",
      machine_name: "",
      price: 3400,
      location: "Biochemistry - 3rd Floor",
      special_information: {
        "Why it's used":
          "Detects B12 deficiency which can cause anemia or nerve problems.",
        "Before the test": "Avoid taking supplements for 24 hours if possible.",
        "After the test": "You may resume normal diet.",
      },
    },
  ];

  useEffect(() => {
    axios
      .get("/api/tests") // Replace with the correct API endpoint
      .then((response) => {
        console.log(response.data);
        setTests(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.log(error);
        console.error("Error fetching test data:", error);
        // Use the hardcoded data if API fails
        setTests(test);
      });
  }, []);

  // Use the API data if available, otherwise use the hardcoded data
  const displayTests = tests.length > 0 ? tests : test;

  // Filter tests based on search term
  const filteredTests = displayTests.filter((test) =>
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
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
  const TestCard = ({ test, setSelectedTest, selectedTest, itemVariants }) => {
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
          <h3 className="text-xl text-blue-700 font-semibold">{test.name}</h3>
          {test.price > 0 && (
            <p className="text-gray-600 mt-2 font-medium">
              Price: Rs {test.price}
            </p>
          )}
        </div>

        <button
          className="text-white bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 mt-4 w-full"
          onClick={() => setSelectedTest(test)}
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
        Welcome to Nawaloka Test Service!
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

        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <TestCard
              key={test.id}
              test={test}
              setSelectedTest={setSelectedTest}
              selectedTest={selectedTest}
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

        {selectedTest && (
          <div
            className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full"
            style={{ zIndex: 1 }}
          >
            <div className="bg-white rounded-xl p-6 w-11/12 max-w-3xl shadow-lg relative">
              <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 rounded-t-lg">
                {selectedTest.name}
                {selectedTest.price > 0 && (
                  <span className="text-lg text-gray-700 ml-2 block md:inline mt-1 md:mt-0">
                    Price: Rs {selectedTest.price}
                  </span>
                )}
              </h3>
              <div className="bg-slate-100 rounded-b-xl p-6 w-full max-w-full mx-auto flex flex-col gap-4">
                <p className="text-xl text-black font-semibold">
                  <strong>Location:</strong> {selectedTest.location}
                </p>

                <p className="text-xl text-black font-semibold">
                  <strong>Special Information:</strong>
                </p>
                <ul className="list-disc pl-5">
                  {Object.entries(selectedTest.special_information).map(
                    ([key, value], index) => (
                      <li key={index} className="text-lg text-black mb-2">
                        <strong>{key}:</strong> {value}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <button
                onClick={() => setSelectedTest(null)}
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

export default NawalokaTest;
