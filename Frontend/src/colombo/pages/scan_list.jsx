/*function Scanlist(){
    return(
        <div>
            Hello this is scan page
        </div>
    );
}

export default Scanlist*/
// scan_list.jsx
import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import scan_image from '../../assets/scan.jpg'; // Replace with your scan image

function ScanList() {
    const [selectedScan, setSelectedScan] = useState(null);

    const scans = [
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce18" },
            "scan_name": "CT Scan",
            "location": "Radiology Department",
            "availability": {
                "Monday": "8:00 AM - 4:00 PM",
                "Tuesday": "8:00 AM - 4:00 PM",
                "Wednesday": "8:00 AM - 4:00 PM",
                "Thursday": "8:00 AM - 4:00 PM",
                "Friday": "8:00 AM - 4:00 PM"
            },
            "special_info": "Requires prior appointment",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce19" },
            "scan_name": "MRI Scan",
            "location": "Radiology Department",
            "availability": {
                "Monday": "9:00 AM - 5:00 PM",
                "Wednesday": "9:00 AM - 5:00 PM",
                "Friday": "9:00 AM - 5:00 PM"
            },
            "special_info": "Requires doctor's referral",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce1a" },
            "scan_name": "Ultrasound Scan",
            "location": "Obstetrics and Gynecology",
            "availability": {
                "Tuesday": "10:00 AM - 3:00 PM",
                "Thursday": "10:00 AM - 3:00 PM"
            },
            "special_info": "For pregnant women and abdominal scans",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce1b" },
            "scan_name": "X-Ray",
            "location": "X-Ray Department",
            "availability": {
                "Monday": "24 Hours",
                "Tuesday": "24 Hours",
                "Wednesday": "24 Hours",
                "Thursday": "24 Hours",
                "Friday": "24 Hours",
                "Saturday": "24 Hours",
                "Sunday": "24 Hours"
            },
            "special_info": "Available for emergency cases",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce1c" },
            "scan_name": "Echocardiogram",
            "location": "Cardiology Department",
            "availability": {
                "Monday": "8:30 AM - 12:00 PM",
                "Friday": "1:00 PM - 4:30 PM"
            },
            "special_info": "Cardiac imaging",
            "price": "LKR 00"
        },
        {
            "_id": { "$oid": "67ee775dd46d7fc06625ce1d" },
            "scan_name": "Mammogram",
            "location": "Women's Health Clinic",
            "availability": {
                "Tuesday": "9:00 AM - 1:00 PM",
                "Thursday": "9:00 AM - 1:00 PM"
            },
            "special_info": "Breast cancer screening",
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

    const Scan = ({ scan, setSelectedScan, selectedScan, itemVariants }) => {
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
                <h3 className="text-xl text-blue-700 font-semibold">{scan.scan_name}</h3>
                <button
                    className="text-white bg-blue-700 px-3 py-2 mt-4 whitespace-nowrap" // Added whitespace-nowrap
                    //className="text-white bg-blue-700 sm p-2 m-6"
                    onClick={() => setSelectedScan(scan)}
                >
                    View More
                </button>
            </motion.div>
        );
    };

    useEffect(() => {
        if (selectedScan) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedScan]);

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
                Scans Available at Colombo National Hospital
            </motion.h2>

            <motion.div
                className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
                initial='hidden'
                animate='visible'
                style={{
                    backgroundImage: `url(${scan_image})`,
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

                {scans.map((scan) => (
                    <Scan
                        key={scan._id.$oid}
                        scan={scan}
                        setSelectedScan={setSelectedScan}
                        selectedScan={selectedScan}
                        itemVariants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    />
                ))}

                {selectedScan && (
                    <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{ zIndex: 1 }}>
                        <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative overflow-y-auto max-h-[80vh]">
                            <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{selectedScan.scan_name}</h3>
                            <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                                <p className="text-xl b text-black font-semibold p-5 m-3">
                                    <strong>Location:</strong> {selectedScan.location}
                                </p>
                                <p className="text-xl text-black font-semibold"><strong>Availability:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {Object.entries(selectedScan.availability).map(([day, time]) => (
                                        <li key={day}>{day}: {time}</li>
                                    ))}
                                </ul>
                                <p className="text-xl text-black font-semibold p-5 m-3">
                                    <strong>Special Info:</strong> {selectedScan.special_info}
                                </p>
                                <p className="text-xl text-black font-semibold p-5 m-3">
                                    <strong>Price:</strong> {selectedScan.price}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedScan(null)}
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

export default ScanList;