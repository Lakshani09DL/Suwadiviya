/*function Testlist(){
    return(
        <div>
            Hello this is test page
        </div>
    );
}

export default Testlist*/
// test_list.jsx
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

export default TestList;