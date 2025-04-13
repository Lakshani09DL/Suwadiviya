import { motion, useInView } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import { useState, useRef, useEffect, use } from "react";
import clinic_image from "../../assets/clinic.jpg";
import axios from "axios";

function NawalokaClinics() {
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dummyClinics = [];

  const [clinics, setClinics] = useState(dummyClinics);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/nawaloka/clinics/cliniclist") // Replace with the correct API endpoint
      .then((response) => {
        console.log(response.data);
        setClinics(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.error("Error fetching clinic data:", error);
      });
  }, []);

  const displayClinics = clinics.length > 0 ? clinics : dummyClinics;
  const filteredClinics = displayClinics.filter((clinic) =>
    clinic.clinic_name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const Clinic = ({
    clinic,
    setSelectedClinic,
    selectedClinic,
    itemVariants,
  }) => {
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
          zIndex: 1,
        }}
      >
        <h3 className="text-xl text-blue-700 font-semibold">
          {clinic.clinic_name}
        </h3>
        <button
          className="text-white bg-blue-700 sm p-2 m-6"
          onClick={() => setSelectedClinic(clinic)}
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
        Welcome to Nawaloka Clinical Services!
      </motion.h2>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by clinic name..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange} // Filter as you type
        />
      </div>

      <motion.div
        className="bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-20 px-40 py-20"
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${clinic_image})`,
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

        {filteredClinics.length > 0 ? (
          filteredClinics.map((clinic) => (
            <Clinic
              key={clinic.id}
              clinic={clinic}
              setSelectedClinic={setSelectedClinic}
              selectedClinic={selectedClinic}
              itemVariants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-white bg-blue-700 p-4 rounded-lg">
            No clinics found matching "{searchTerm}". Please try a different
            search term.
          </div>
        )}

        {selectedClinic && (
          <div
            className="fixed inset-0 bg-slate-100 bg-opacity-80 flex justify-center items-center z-50 w-screen h-full"
            style={{ zIndex: 1 }}
          >
            <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
              <h3 className="text-2xl bg-blue-200 text-blue-800 font-semibold p-5 mt-20 mb-10">
                {selectedClinic.clinic_name}
              </h3>
              <div className="bg-slate-300 rounded-xl p-6 w-full max-w-full mx-auto">
                <p className="text-xl b text-black font-semibold p-5 m-3">
                  <strong>Location:</strong> {selectedClinic.location}
                </p>
                <p className="text-xl text-black font-semibold">
                  <strong>Dates:</strong>
                </p>
                <ul className="text-xl text-black font-semibold p-1 m-2">
                  {Object.entries(selectedClinic.dates).map(([day, time]) => (
                    <li key={day}>
                      {day}: {time}
                    </li>
                  ))}
                </ul>
                <p className="text-xl text-black font-semibold pt-5 mt-2">
                  <strong>Assigned Doctors:</strong>
                </p>
                <ul className="text-xl text-black font-semibold p-1 m-2">
                  {Object.values(selectedClinic.assigned_doctors).map(
                    (doctor, index) => (
                      <li key={index}>{doctor}</li>
                    )
                  )}
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

export default NawalokaClinics;
