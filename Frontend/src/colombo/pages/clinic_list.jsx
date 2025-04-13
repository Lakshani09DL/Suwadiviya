/*function Cliniclist(){
    return(
        <div>
            Hello this is clinic page
        </div>
    );
}

export default Cliniclist*/
/*import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import clinic_image from '../../assets/clinic.jpg';

function ColomboCliniclist() {

    const [selectedClinic, setSelectedClinic] = useState(null);

    // Hardcoded data for Colombo clinics
    const clinics = [
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdfa" },
            "clinic_name": "Blood Bank Routine",
            "location": "Blood Bank",
            "dates": {
                "Monday": ["7:30 AM - 11:00 AM"],
                "Tuesday": ["7:30 AM - 11:00 AM"],
                "Wednesday": ["7:30 AM - 11:00 AM"],
                "Thursday": ["7:30 AM - 11:00 AM"],
                "Friday": ["7:30 AM - 11:00 AM"],
                "Saturday": ["7:30 AM - 11:00 AM"],
                "Sunday": ["7:30 AM - 11:00 AM"]
            },
            "special_information": "Routine Blood Donation",
            "assigned_doctors": ["Dr Jeganathan N"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdfb" },
            "clinic_name": "Blood Bank Emergency",
            "location": "Blood Bank",
            "dates": { "Sunday": ["24 Hours"] },
            "special_information": "Open in Public Holidays",
            "assigned_doctors": ["Dr Jeganathan N"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdfc" },
            "clinic_name": "Cardiology (TTE,TOE,OSE)",
            "location": "Department of Cardiology",
            "dates": { "Monday": ["7:30 AM - 3:00 PM", "8:00 AM - 12:00 PM"], "Tuesday": ["7:30 AM - 3:00 PM", "8:00 AM - 12:00 PM"] },
            "special_information": "",
            "assigned_doctors": ["Dr Fernando BNT", "Dr Mendis SAES"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdff" },
            "clinic_name": "Surgical Clinic",
            "location": "Surgery Unit",
            "dates": { "Tuesday": ["8 AM - 12 PM", "2 PM - 4 PM"], "Wednesday": ["8 AM - 12 PM"], "Thursday": ["2 PM - 4 PM"] },
            "special_information": "",
            "assigned_doctors": ["Dr Perera G.A", "Dr Gunawardhana R.T"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625ce00" },
            "clinic_name": "Haematology",
            "location": "Haematology Department",
            "dates": { "Wednesday": ["8 AM - 12 PM"], "Thursday": ["8 AM - 12 PM"] },
            "special_information": "",
            "assigned_doctors": ["Dr Jayasinghe L.D", "Dr Wijesuriya T.R"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625ce01" },
            "clinic_name": "Transplant Clinic",
            "location": "Transplant Department",
            "dates": { "Monday": ["8 AM - 12 PM"], "Friday": ["8 AM - 12 PM"] },
            "special_information": "",
            "assigned_doctors": ["Dr Abeywardana K.S", "Dr Fonseka R.N"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625ce03" },
            "clinic_name": "ENT Clinic",
            "location": "ENT Department",
            "dates": { "Wednesday": ["8 AM - 12 PM"], "Friday": ["8 AM - 12 PM"], "Saturday": ["8 AM - 12 PM (For school children)"] },
            "special_information": "ENT examinations and treatments",
            "assigned_doctors": ["Dr Amarasinghe D.W", "Dr Samarasinghe K.L"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625ce02" },
            "clinic_name": "Diabetic Clinic",
            "location": "Diabetic Unit",
            "dates": { "Monday": ["2 PM - 4 PM"], "Wednesday": ["2 PM - 4 PM"] },
            "special_information": "",
            "assigned_doctors": ["Dr Senanayake J.P", "Dr De Silva H.R"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdfe" },
            "clinic_name": "HLA Test",
            "location": "Blood Bank",
            "dates": { "Tuesday": ["8:30 AM - 3:00 PM"] },
            "special_information": "HLA Typing for Transplant Compatibility",
            "assigned_doctors": ["Dr Jeganathan N"]
        },
        {
            "_id": { "$oid": "67ee6929d46d7fc06625cdfd" },
            "clinic_name": "Burns Unit",
            "location": "Burns Unit Clinic",
            "dates": { "Monday": ["8:00 AM - 12:00 PM"], "Wednesday": ["8:00 AM - 12:00 PM"] },
            "special_information": "New Registration and Reconstructive Treatment",
            "assigned_doctors": ["Dr Dissanayake DA", "Dr Ekanayake GNS"]
        },
        {
            "_id": { "$oid": "67ee6c57d46d7fc06625ce07" },
            "clinic_name": "Type I DM Clinic",
            "location": "Department of Type I DM",
            "dates": { "Monday": ["8:00 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Fernando D.T.", "Wijesinghe L.P.", "Karunaratne M.R."]
        },
        {
            "_id": { "$oid": "67ee6c57d46d7fc06625ce06" },
            "clinic_name": "Endocrine Clinic",
            "location": "Endocrine Department",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"], "Sunday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Perera G.A.", "Gunawardhana R.S."]
        },
        {
            "_id": { "$oid": "67ee6c57d46d7fc06625ce09" },
            "clinic_name": "Mental Health Clinic",
            "location": "Department of Mental Health",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"], "Sunday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Balasooriya J.M.", "Jayawardhana A.R."]
        },
        {
            "_id": { "$oid": "67ee6c57d46d7fc06625ce08" },
            "clinic_name": "Pituitary Clinic",
            "location": "Pituitary Department",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"], "Sunday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Silva H.T.", "Ekanayake R.S.", "Jayasinghe K.A."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce0e" },
            "clinic_name": "Cardiothoracic",
            "location": "Department of Cardiothoracic",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Bandara P.L.", "Wijesundara K.T.", "Jayasinghe D.R."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce13" },
            "clinic_name": "Asthma Clinic",
            "location": "Asthma Unit",
            "dates": { "Friday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Gunasekara J.M.", "Abeykoon L.T.", "Edirisinghe H.S."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce11" },
            "clinic_name": "Genito Urinary Clinic",
            "location": "Department of Genito Urinary",
            "dates": { "Tuesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Ratnayake W.G.", "Madushanka L.P."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce10" },
            "clinic_name": "Geriatric Clinic",
            "location": "Geriatric Unit",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Karunathilaka S.N.", "Hettiarachchi J.B."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce14" },
            "clinic_name": "Dermatology Clinic",
            "location": "Department of Dermatology",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Perera R.G.", "Fernando T.M."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce0d" },
            "clinic_name": "Nephrology Clinic",
            "location": "Department of Nephrology",
            "dates": { "Friday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Wickramasinghe L.J.", "Senanayake R.D.", "Ekanayake T.C."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce0f" },
            "clinic_name": "Rheumatology and Rehabilitation Clinic",
            "location": "Department of Rheumatology",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Abeywardena L.G.", "Pathiraja M.S.", "De Silva T.J."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce0b" },
            "clinic_name": "End Organ Screening Clinic",
            "location": "End Organ Screening Unit",
            "dates": { "Friday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Perera R.P.", "Fernando T.L.", "Gunawardena A.K."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce0c" },
            "clinic_name": "Anesthesia Clinic",
            "location": "Department of Anesthesiology",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Dias K.S.", "Jayakody N.M."]
        },
        {
            "_id": { "$oid": "67ee6dbfd46d7fc06625ce12" },
            "clinic_name": "Gastroenterology",
            "location": "Department of Gastroenterology",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Tuesday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Thursday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"], "Saturday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Samarasinghe N.R.", "Jayawardena K.T."]
        },
        {
            "_id": { "$oid": "67ee761dd46d7fc06625ce17" },
            "clinic_name": "Cardiology (OPD) clinic",
            "location": "Department of Cardiology",
            "dates": { "Monday": ["7:30 AM - 11:00 AM"], "Wednesday": ["7:30 AM - 11:00 AM"], "Friday": ["7:30 AM - 11:00 AM"] },
            "special_information": "",
            "assigned_doctors": ["Silva K.N.", "Rajapaksha M.D.", "Ekanayake S.P."]
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

    const Clinic = ({ clinic, setSelectedClinic, selectedClinic, itemVariants }) => {
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
                <h3 className="text-xl text-blue-700 font-semibold">{clinic.clinic_name}</h3>
                <button
                    className="text-white bg-blue-700 px-3 py-2 mt-4 whitespace-nowrap" // Added whitespace-nowrap
                    //className="text-white bg-blue-700 sm p-2 m-6"
                    onClick={() => setSelectedClinic(clinic)}
                >
                    View More
                </button>
            </motion.div>
        );
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (selectedClinic) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedClinic]);

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
                Clinics Available at Colombo National Hospital
            </motion.h2>

            <motion.div
                className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
                initial='hidden'
                animate='visible'
                style={{
                    backgroundImage: `url(${clinic_image})`,
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

                {clinics.map((clinic) => (
                    <Clinic
                        key={clinic._id.$oid}
                        clinic={clinic}
                        setSelectedClinic={setSelectedClinic}
                        selectedClinic={selectedClinic}
                        itemVariants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    />
                ))}

                {selectedClinic && (
                    <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{ zIndex: 1 }}>
                        <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative overflow-y-auto max-h-[80vh]"> {/* Added overflow-y-auto and max-h *//*}
                            <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{selectedClinic.clinic_name}</h3>
                            <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                                <p className="text-xl b text-black font-semibold p-5 m-3">
                                    <strong>Location:</strong> {selectedClinic.location}
                                </p>
                                <p className="text-xl text-black font-semibold"><strong>Dates:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {Object.entries(selectedClinic.dates).map(([day, times]) => (
                                        <li key={day}>{day}: {times.join(", ")}</li>
                                    ))}
                                </ul>
                                <p className="text-xl text-black font-semibold pt-5 mt-2"><strong>Assigned Doctors:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {selectedClinic.assigned_doctors.map((doctor, index) => (
                                        <li key={index}>{doctor}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => setSelectedClinic(null)}
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

export default ColomboCliniclist;*/
import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect } from "react";
import clinic_image from '../../assets/clinic.jpg';

function ColomboCliniclist() {
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await fetch("http://localhost:8000/colombo/clinics/cliniclist");
                if (!response.ok) {
                    throw new Error("Failed to fetch clinics");
                }
                const data = await response.json();
                setClinics(data);
            } catch (error) {
                console.error("Error fetching clinic list:", error);
            }
        };
        fetchClinics();
    }, []);

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const Clinic = ({ clinic, setSelectedClinic, selectedClinic, itemVariants }) => {
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
                <h3 className="text-xl text-blue-700 font-semibold">{clinic.clinic_name}</h3>
                <button
                    className="text-white bg-blue-700 px-3 py-2 mt-4 whitespace-nowrap"
                    onClick={() => setSelectedClinic(clinic)}
                >
                    View More
                </button>
            </motion.div>
        );
    };

    useEffect(() => {
        if (selectedClinic) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedClinic]);

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
                Clinics Available at Colombo National Hospital
            </motion.h2>

            <motion.div
                className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
                initial='hidden'
                animate='visible'
                style={{
                    backgroundImage: `url(${clinic_image})`,
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

                {clinics.map((clinic) => (
                    <Clinic
                        key={clinic._id ? clinic._id.$oid : clinic.id} // Handle both _id and id
                        clinic={clinic}
                        setSelectedClinic={setSelectedClinic}
                        selectedClinic={selectedClinic}
                        itemVariants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                    />
                ))}

                {selectedClinic && (
                    <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{ zIndex: 1 }}>
                        <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative overflow-y-auto max-h-[80vh]">
                            <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{selectedClinic.clinic_name}</h3>
                            <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                                <p className="text-xl b text-black font-semibold p-5 m-3">
                                    <strong>Location:</strong> {selectedClinic.location}
                                </p>
                                <p className="text-xl text-black font-semibold"><strong>Dates:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {selectedClinic.dates && Object.entries(selectedClinic.dates).map(([day, times]) => (
                                        <li key={day}>{day}: {Array.isArray(times) ? times.join(", ") : times}</li>
                                    ))}
                                </ul>
                                <p className="text-xl text-black font-semibold pt-5 mt-2"><strong>Assigned Doctors:</strong></p>
                                <ul className="text-xl text-black font-semibold p-1 m-2">
                                    {selectedClinic.assigned_doctors && selectedClinic.assigned_doctors.map((doctor, index) => (
                                        <li key={index}>{doctor}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => setSelectedClinic(null)}
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

export default ColomboCliniclist;