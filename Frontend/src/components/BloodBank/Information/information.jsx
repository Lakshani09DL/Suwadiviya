import React from "react";
import { motion } from "framer-motion"; // Import framer motion

const BloodBankInfo = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-black">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-12 mb-6">Blood Bank Information</h1>

        {/* First Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }} // Start from left and invisible
          whileInView={{ opacity: 1, x: 0 }} // Slide in to the normal position
          transition={{ duration: 1 }} // Animation duration
          viewport={{ once: true }} // Trigger animation once when it comes into view
        >
          <div className="card bg-blue-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-2">Why Donate Blood?</h2>
              <p className="text-lg">
                Every blood donation can save up to three lives! Blood is needed for surgeries,
                accident victims, anemia patients, cancer treatments, and more. Your donation
                helps keep hospitals stocked with life-saving resources.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Second Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-2">How to Donate Blood?</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Find a Nearby Blood Bank – Use our interactive map to locate donation centers.</li>
                <li>Book an Appointment – Walk-in or pre-register online.</li>
                <li>Medical Check-Up – A quick screening is done to check your health and eligibility.</li>
                <li>Donation Process – Blood is drawn in a safe, hygienic process lasting about 10-15 minutes.</li>
                <li>Rest & Refresh – After donating, rest for a few minutes and have a snack.</li>
              </ol>
            </div>
          </div>
        </motion.section>

        {/* Third Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-2">Rules & Regulations for Blood Donation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Eligibility Criteria:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Age: 18 - 60 years</li>
                    <li>Weight: Must be at least 50 kg (110 lbs)</li>
                    <li>Hemoglobin Level: Minimum 12.5 g/dL</li>
                    <li>No chronic illnesses like heart disease, uncontrolled diabetes, or severe hypertension</li>
                    <li>No infections or fevers in the last 7 days</li>
                    <li>No alcohol consumption in the last 24 hours</li>
                    <li>No recent tattoos or piercings within the last 6 months</li>
                    <li>Not pregnant or recently given birth</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">You Cannot Donate If:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You have had HIV/AIDS, Hepatitis B or C, or other blood-borne diseases</li>
                    <li>You have undergone major surgery in the past 6 months</li>
                    <li>You have been treated for malaria in the past 3 months</li>
                    <li>You have received blood transfusions in the past 1 year</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Fourth Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-2">Types of Blood Donations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Whole Blood Donation:</strong> The most common type, used for transfusions.</li>
                <li><strong>Platelet Donation:</strong> Helps cancer and transplant patients.</li>
                <li><strong>Plasma Donation:</strong> Used for clotting disorders and burn victims.</li>
                <li><strong>Double Red Cell Donation:</strong> For trauma and surgery patients.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Fifth Section */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-200 shadow-xl rounded-lg">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4 text-black text-center">Blood Groups & Compatibility</h2>
              <div className="overflow-x-auto">
                <table className="table w-full text-black">
                  <thead>
                    <tr className="bg-blue-400 text-white">
                      <th className="py-3 px-6 text-left">Blood Type</th>
                      <th className="py-3 px-6 text-left">Can Donate To</th>
                      <th className="py-3 px-6 text-left">Can Receive From</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-200">
                      <td className="py-3 px-6">O-</td>
                      <td className="py-3 px-6">All types (Universal donor)</td>
                      <td className="py-3 px-6">O-</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-200">
                      <td className="py-3 px-6">O+</td>
                      <td className="py-3 px-6">O+, A+, B+, AB+</td>
                      <td className="py-3 px-6">O+, O-</td>
                    </tr>
                    <tr className="hover:bg-blue-200">
                    <td className="py-3 px-6">A-</td>
                    <td className="py-3 px-6">A-, A+, AB-, AB+</td>
                    <td className="py-3 px-6">A-, O-</td>
                  </tr>
                  <tr className="bg-blue-50 hover:bg-blue-200">
                    <td className="py-3 px-6">A+</td>
                    <td className="py-3 px-6">A+, AB+</td>
                    <td className="py-3 px-6">A+, A-, O+, O-</td>
                  </tr>
                  <tr className="hover:bg-blue-200">
                    <td className="py-3 px-6">B-</td>
                    <td className="py-3 px-6">B-, B+, AB-, AB+</td>
                    <td className="py-3 px-6">B-, O-</td>
                  </tr>
                  <tr className="bg-blue-50 hover:bg-blue-200">
                    <td className="py-3 px-6">B+</td>
                    <td className="py-3 px-6">B+, AB+</td>
                    <td className="py-3 px-6">B+, B-, O+, O-</td>
                  </tr>
                  <tr className="hover:bg-blue-200">
                    <td className="py-3 px-6">AB-</td>
                    <td className="py-3 px-6">AB-, AB+</td>
                    <td className="py-3 px-6">AB-, A-, B-, O-</td>
                  </tr>
                  <tr className="bg-blue-50 hover:bg-blue-200">
                    <td className="py-3 px-6">AB+</td>
                    <td className="py-3 px-6">AB+ (Universal recipient)</td>
                    <td className="py-3 px-6">All types</td>
                  </tr>
                          
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Other Sections */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-2">Benefits of Donating Blood</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Saves Lives – Your donation can help multiple patients.</li>
                <li>Improves Heart Health – Reduces harmful iron levels in your blood.</li>
                <li>Stimulates Blood Cell Production – Keeps your body active and healthy.</li>
                <li>Free Health Check-Up – Donors get screened for common health issues.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Emergency Helpline */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card bg-blue-300 text-white shadow-xl">
            <div className="card-body">
              <p className="text-lg"><strong>Emergency Helpline:</strong> +94 913000400</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BloodBankInfo;
