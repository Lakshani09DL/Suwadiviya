/*function Testlist(){
    return(
        <div>
            Hello this is test page
        </div>
    );
}

export default Testlist*/
// test_list.jsx
/*
import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from '../../assets/tests.jpg'; // Replace with your test image

function TestList() {
    const [selectedTest, setSelectedTest] = useState(null);

    const tests = [
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce1e" },
            "test_name": "Complete Blood Count (CBC)",
            "location": "Laboratory",
            "availability": {
                "Monday": "7:00 AM - 4:00 PM",
                "Tuesday": "7:00 AM - 4:00 PM",
                "Wednesday": "7:00 AM - 4:00 PM",
                "Thursday": "7:00 AM - 4:00 PM",
                "Friday": "7:00 AM - 4:00 PM"
            },
            "special_info": "Fasting not required",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce1f" },
            "test_name": "Fasting Blood Sugar (FBS)",
            "location": "Laboratory",
            "availability": {
                "Monday": "7:00 AM - 10:00 AM",
                "Wednesday": "7:00 AM - 10:00 AM",
                "Friday": "7:00 AM - 10:00 AM"
            },
            "special_info": "Requires 8-12 hours fasting",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce20" },
            "test_name": "Lipid Profile",
            "location": "Laboratory",
            "availability": {
                "Tuesday": "8:00 AM - 11:00 AM",
                "Thursday": "8:00 AM - 11:00 AM"
            },
            "special_info": "Requires 12 hours fasting",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce21" },
            "test_name": "Urine Full Report (UFR)",
            "location": "Laboratory",
            "availability": {
                "Monday": "7:00 AM - 4:00 PM",
                "Tuesday": "7:00 AM - 4:00 PM",
                "Wednesday": "7:00 AM - 4:00 PM",
                "Thursday": "7:00 AM - 4:00 PM",
                "Friday": "7:00 AM - 4:00 PM"
            },
            "special_info": "Mid-stream urine sample required",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce22" },
            "test_name": "Thyroid Function Test (TFT)",
            "location": "Laboratory",
            "availability": {
                "Monday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            "special_info": "Fasting not required",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee785dd46d7fc06625ce23" },
            "test_name": "Liver Function Test (LFT)",
            "location": "Laboratory",
            "availability": {
                "Tuesday": "9:00 AM - 1:00 PM",
                "Thursday": "9:00 AM - 1:00 PM"
            },
            "special_info": "Fasting may be required",
            "price": "LKR 00"
        }
    ];

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const Test = ({ test, setSelectedTest, selectedTest, itemVariants }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <motion.div
                ref={ref}
                className="bg-slate-50 shadow-lg rounded-xl px-10 py-6 w-full max-w-full mx-auto"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ zIndex: 1 }}
            >
                <h3 className="text-xl text-blue-700 font-semibold">{test.test_name}</h3>
                <button
                    className="text-white bg-blue-700 px-3 py-2 mt-4 whitespace-nowrap" // Added whitespace-nowrap
                    //className="text-white bg-blue-700 sm p-2 m-6"
                    onClick={() => setSelectedTest(test)}
                >
                    View More
                </button>
            </motion.div>
        );
    };

    useEffect(() => {
        if (selectedTest) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedTest]);

    return (
        <>
            <Navbar style={{ zIndex: 1 }} />

            <motion.h2
                className="bg-blue-50 text-5xl text-center text-blue-500 font-bold py-20"
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                style={{ zIndex: 1 }}
            >
                Tests Available at Colombo National Hospital
            </motion.h2>

            <motion.div
                className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
                initial='hidden'
                animate='visible'
                style={{
                    backgroundImage: `url(${test_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <div
                    className="fixed mt-96 top-0 bottom-0 bg-gray-500 opacity-60 z-0"
                    style={{ left: '0.5rem', right: '0.5rem' }}
                ></div>

                {tests.map((test) => (
                    <Test
                        key={test._id.$oid}
                        test={test}
                        setSelectedTest={setSelectedTest}
                        selectedTest={selectedTest}
                        itemVariants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    />
                ))}

                {selectedTest && (
                    <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{ zIndex: 1 }}>
                        <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative overflow-y-auto max-h-[80vh]">
                            <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{selectedTest.test_name}</h3>
                            <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                                <p className="text-xl b text-black font-semibold p-5 m-3">
                                    <strong>Location:</strong> {selectedTest.location}
                                </p>
                                <p className="text-xl text-black font-semibold"><strong>Availability:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {Object.entries(selectedTest.availability).map(([day, time]) => (
                                        <li key={day}>{day}: {time}</li>
                                    ))}
                                </ul>
                                <p className="text-xl text-black font-semibold p-5 m-3">
                                    <strong>Special Info:</strong> {selectedTest.special_info}
                                </p>
                                <p className="text-xl text-black font-semibold p-5 m-3">
                                    <strong>Price:</strong> {selectedTest.price}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedTest(null)}
                                className="absolute top-2 right-3 bg-red-500 text-white hover:text-red-600 text-xl"
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

export default TestList;*/
/*today
"use client";

import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from '../../assets/tests.jpg';

function ColomboTestList() {
    const [selectedTest, setSelectedTest] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch("http://localhost:8000/colombo/tests/testlist");
                if (!response.ok) {
                    throw new Error("Failed to fetch tests");
                }
                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error("Error fetching test list:", error);
            }
        };
        fetchTests();
    }, []);

    const filteredTests = tests.filter((test) =>
        test.test_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

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
                style={{ zIndex: 1 }}
            >
                <div>
                    <h3 className="text-xl text-blue-700 font-semibold">{test.test_name}</h3>
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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <Navbar style={{ zIndex: 1 }} />

            <motion.h2
                className="bg-blue-50 text-5xl text-center text-blue-500 font-bold py-20"
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                style={{ zIndex: 1 }}
            >
                Tests Available at Colombo National Hospital
            </motion.h2>

            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search by test name..."
                    className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <motion.div
                className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-10 px-10 py-20"
                initial='hidden'
                animate='visible'
                style={{
                    backgroundImage: `url(${test_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                <div
                    className="fixed mt-96 top-0 bottom-0 bg-gray-500 opacity-60 z-0"
                    style={{ left: '0.5rem', right: '0.5rem' }}
                ></div>

                {filteredTests.length > 0 ? (
                    filteredTests.map((test) => (
                        <TestCard
                            key={test._id ? test._id.$oid : test.id}
                            test={test}
                            setSelectedTest={setSelectedTest}
                            selectedTest={selectedTest}
                            itemVariants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-xl text-white bg-blue-700 p-4 rounded-lg">
                        No tests found matching "{searchTerm}". Please try a different search term.
                    </div>
                )}

                {selectedTest && (
                    <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{ zIndex: 1 }}>
                        <div className="bg-white rounded-xl p-6 w-11/12 max-w-3xl shadow-lg relative">
                            <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 rounded-t-lg">
                                {selectedTest.test_name}
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
                                    {selectedTest.special_info && Object.entries(selectedTest.special_info).map(
                                        ([key, value], index) => (
                                            <li key={index} className="text-lg text-black mb-2">
                                                <strong>{key}:</strong> {value}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <p className="text-xl text-black font-semibold"><strong>Availability:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {selectedTest.availability && Object.entries(selectedTest.availability).map(([day, time]) => (
                                        <li key={day}>{day}: {time}</li>
                                    ))}
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

export default ColomboTestList;*/
"use client";

import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import test_image from "../../assets/tests.jpg";
import axios from "axios";

function ColomboTest() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [test, settest] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch("http://localhost:8000/colombo/tests/testlist");
        if (!response.ok) {
          throw new Error("Failed to fetch tests");
        }
        const data = await response.json();
        settest(data);
      } catch (error) {
        console.error("Error fetching test list:", error);
      }
    };
    fetchTests();
  }, []);

  // Use the API data
  const displayTests = test;

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
        Welcome to Colombo District General Hospital Test Service!
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
            <div className="bg-white rounded-xl p-6 w-11/12 max-w-3xl shadow-lg relative flex flex-col"
            >
              <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 rounded-t-lg">
                {selectedTest.name}
                {selectedTest.price > 0 && (
                  <span className="text-lg text-gray-700 ml-2 block md:inline mt-1 md:mt-0">
                    Price: Rs {selectedTest.price}
                  </span>
                )}
              </h3>
              <div
                className="bg-slate-100 rounded-b-xl p-6 w-full max-w-full mx-auto flex flex-col gap-4 overflow-y-auto max-h-[70vh]"
              >
                <p className="text-xl text-black font-semibold">
                  <strong>Location:</strong> {selectedTest.location}
                </p>

                {selectedTest.special_information && Object.keys(selectedTest.special_information).length > 0 && (
                  <>
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
                  </>
                )}
                {selectedTest.description && (
                  <>
                    <p className="text-xl text-black font-semibold mt-4">
                      <strong>Description:</strong>
                    </p>
                    <p className="text-lg text-black">{selectedTest.description}</p>
                  </>
                )}
                {selectedTest.before_test && (
                  <>
                    <p className="text-xl text-black font-semibold mt-4">
                      <strong>Before the test:</strong>
                    </p>
                    <p className="text-lg text-black">{selectedTest.before_test}</p>
                  </>
                )}
                {selectedTest.after_test && (
                  <>
                    <p className="text-xl text-black font-semibold mt-4">
                      <strong>After the test:</strong>
                    </p>
                    <p className="text-lg text-black">{selectedTest.after_test}</p>
                  </>
                )}
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

export default ColomboTest;