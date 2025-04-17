import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function GampahaCliniclist() {
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [clinics, setClinics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost:8000/gampaha/clinics/cliniclist");
        if (!response.ok) throw new Error("Failed to fetch clinics");
        const data = await response.json();
        setClinics(data);
      } catch (error) {
        console.error("Error fetching clinic list:", error);
      }
    };
    fetchClinics();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ClinicCard = ({ clinic }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:scale-105 border border-blue-100"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl text-blue-900 font-bold mb-4">{clinic.clinic_name}</h3>
        <p className="text-gray-600 mb-2"><strong>Location:</strong> {clinic.location}</p>
        <button 
          onClick={() => setSelectedClinic(clinic)}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View More
        </button>
      </motion.div>
    );
  };

  return (
    <div className="p-8">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">🏥 Gampaha Clinics</h1>

      {/* Clinic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clinics.map((clinic) => (
          <ClinicCard key={clinic.id} clinic={clinic} />
        ))}
      </div>

      {/* Modal */}
      {selectedClinic && (
        <div className="fixed inset-0 bg-slate-100 bg-opacity-90 flex justify-center items-center z-50 w-screen h-full">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg relative">
            <h2 className="text-2xl text-blue-900 font-bold text-center mb-6">{selectedClinic.clinic_name}</h2>

            <div className="bg-slate-100 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">📍 Location</h3>
              <p className="text-base text-black">{selectedClinic.location}</p>
            </div>

            <div className="bg-slate-100 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">🕒 Clinic Time Slots</h3>
              <ul className="list-disc list-inside text-black">
                {Object.entries(selectedClinic.dates).map(([day, time]) => (
                  <li key={day}>{day}: {time}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-100 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">👨‍⚕️ Assigned Doctors</h3>
              <ul className="list-disc list-inside text-black">
                {Object.values(selectedClinic.assigned_doctors).map((doctor, index) => (
                  <li key={index}>{doctor}</li>
                ))}
              </ul>
            </div>

            {selectedClinic.special_information?.trim() !== "" && (
              <div className="bg-slate-100 rounded-xl p-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">📝 Special Info</h3>
                <p className="text-black">{selectedClinic.special_information}</p>
              </div>
            )}

            <div className="text-center mt-6">
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow transition"
                onClick={() => navigate(`/book/${selectedClinic.clinic_name}`)}
              >
                📞 Book Telemedicine Appointment
              </button>
            </div>

           

          </div>
        </div>
      )}
    </div>
  );
}

export default GampahaCliniclist;
