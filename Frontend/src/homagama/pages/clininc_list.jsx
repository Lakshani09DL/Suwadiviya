import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef } from "react";
import clinic_image from '../../assets/clinic.jpg';

function HomagamaCliniclist(){

    const [selectedClinic, setSelectedClinic] = useState(null);

    // Sample data for clinics, need to replace with backend data
    const clinics = [
        {
            id: 1,
            clinic_name: "General Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Thursday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Nimal Perera",
                1: "Dr. Sanjeewa Ratnayake"
            }
        },
        {
            id: 2,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 3,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 4,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 5,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 6,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 7,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 8,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 9,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 10,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 11,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 12,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 13,
            clinic_name: "General Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Thursday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Nimal Perera",
                1: "Dr. Sanjeewa Ratnayake"
            }
        },
        {
            id: 14,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 15,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 16,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 17,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 18,
            clinic_name: "Gynecology Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 19,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 20,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 21,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 22,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 23,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
        {
            id: 24,
            clinic_name: "Pre-Maternity Clinic",
            location: "01st Floor",
            dates : {
                "Tuesday": "8:00 AM - 12:00 PM",
                "Friday": "8:00 AM - 12:00 PM"
            },
            special_information: "",
            assigned_doctors: {
                0: "Dr. Vindya Ekanayake",
                1: "Dr. Nirosha Fernando"
            }
        },
    ];

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

    // Component to display each clinic
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
                style={{
                    zIndex:1
                }}
            >
                <h3 className="text-xl text-blue-700 font-semibold">{clinic.clinic_name}</h3>
                <button 
                    className="text-white bg-blue-700 sm p-2 m-6" 
                    onClick={() => setSelectedClinic(clinic)}
                >
                    View More
                </button>
            </motion.div>
        );
    };
    
      
    return(
        <>
            <Navbar 
            style={{
                zIndex: 1,
            }}/>

            <motion.h2
            className="bg-blue-50 text-5xl text-center text-blue-500 font-bold py-20"
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            style={{
                zIndex: 1,
            }}
            >
                Clinics Available at Homagama Base Hospital
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
                visible: {
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
            >
            
            <div
            className="fixed mt-96 top-0 bottom-0 bg-gray-500 opacity-60 z-0"
            style={{
                left: '0.5rem',   
                right: '0.5rem',
            }}
            ></div>

            

            {clinics.map((clinic) => (
                
                <Clinic 
                    key={clinic.id}
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
                <div className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full" style={{zIndex: 1}}>
                    <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
                        <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">{selectedClinic.clinic_name}</h3>
                        <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                            <p className="text-xl b text-black font-semibold p-5 m-3">
                                <strong>Location:</strong> {selectedClinic.location}
                            </p>
                            <p className="text-xl text-black font-semibold"><strong>Dates:</strong></p>
                            <ul className="text-xl text-black font-semibold p-1 m-2">
                                {Object.entries(selectedClinic.dates).map(([day, time]) => (
                                    <li key={day}>{day}: {time}</li>
                                ))}
                            </ul>
                            <p className="text-xl text-black font-semibold pt-5 mt-2"><strong>Assigned Doctors:</strong></p>
                            <ul className="text-xl text-black font-semibold p-1 m-2">
                                {Object.values(selectedClinic.assigned_doctors).map((doctor, index) => (
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

export default HomagamaCliniclist;
