import React from "react";
import "./information.css";

const BloodBankInfo = () => {
  return (
    <div className="blood-bank-container">
      <h1>Blood Bank Information</h1>

      <section className="section">
        <h2>Why Donate Blood?</h2>
        <p>
          Every blood donation can save up to three lives! Blood is needed for surgeries,
          accident victims, anemia patients, cancer treatments, and more. Your donation
          helps keep hospitals stocked with life-saving resources.
        </p>
      </section>

      <section className="section">
        <h2>How to Donate Blood?</h2>
        <ol>
          <li>Find a Nearby Blood Bank – Use our interactive map to locate donation centers.</li>
          <li>Book an Appointment – Walk-in or pre-register online.</li>
          <li>Medical Check-Up – A quick screening is done to check your health and eligibility.</li>
          <li>Donation Process – Blood is drawn in a safe, hygienic process lasting about 10-15 minutes.</li>
          <li>Rest & Refresh – After donating, rest for a few minutes and have a snack.</li>
        </ol>
      </section>

      <section className="section">
        <h2>Rules & Regulations for Blood Donation</h2>
        <div className="rules-grid">
          <div>
            <h3>Eligibility Criteria:</h3>
            <ul>
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
          <div>
            <h3>You Cannot Donate If:</h3>
            <ul>
              <li>You have had HIV/AIDS, Hepatitis B or C, or other blood-borne diseases</li>
              <li>You have undergone major surgery in the past 6 months</li>
              <li>You have been treated for malaria in the past 3 months</li>
              <li>You have received blood transfusions in the past 1 year</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Types of Blood Donations</h2>
        <ul>
          <li><strong>Whole Blood Donation:</strong> The most common type, used for transfusions.</li>
          <li><strong>Platelet Donation:</strong> Helps cancer and transplant patients.</li>
          <li><strong>Plasma Donation:</strong> Used for clotting disorders and burn victims.</li>
          <li><strong>Double Red Cell Donation:</strong> For trauma and surgery patients.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Blood Groups & Compatibility</h2>
        <table className="blood-table">
          <thead>
            <tr>
              <th>Blood Type</th>
              <th>Can Donate To</th>
              <th>Can Receive From</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>O-</td><td>All types (Universal donor)</td><td>O-</td></tr>
            <tr><td>O+</td><td>O+, A+, B+, AB+</td><td>O+, O-</td></tr>
            <tr><td>A-</td><td>A-, A+, AB-, AB+</td><td>A-, O-</td></tr>
            <tr><td>A+</td><td>A+, AB+</td><td>A+, A-, O+, O-</td></tr>
            <tr><td>B-</td><td>B-, B+, AB-, AB+</td><td>B-, O-</td></tr>
            <tr><td>B+</td><td>B+, AB+</td><td>B+, B-, O+, O-</td></tr>
            <tr><td>AB-</td><td>AB-, AB+</td><td>AB-, A-, B-, O-</td></tr>
            <tr><td>AB+</td><td>AB+ (Universal recipient)</td><td>All types</td></tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Benefits of Donating Blood</h2>
        <ul>
          <li>Saves Lives – Your donation can help multiple patients.</li>
          <li>Improves Heart Health – Reduces harmful iron levels in your blood.</li>
          <li>Stimulates Blood Cell Production – Keeps your body active and healthy.</li>
          <li>Free Health Check-Up – Donors get screened for common health issues.</li>
        </ul>
      </section>

      <section className="section contact-section">
        <p><strong>Emergency Helpline:</strong> +94 913000400</p>
      </section>
    </div>
  );
};

export default BloodBankInfo;
