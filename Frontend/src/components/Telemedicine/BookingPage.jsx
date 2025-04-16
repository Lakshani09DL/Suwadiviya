import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookingPage() {
  const { clinicName } = useParams();
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch(`http://localhost:8000/tm-gampaha/clinics/timeslots/${clinicName}`);
        const data = await response.json();
        setTimeSlots(data);
      } catch (err) {
        console.error("Error fetching time slots:", err);
      }
    };

    fetchTimeSlots();
  }, [clinicName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      name,
      dob,
      selectedSlot,
      clinic: clinicName,
    });

    // You can send the data to backend using POST here
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 bg-center bg-no-repeat bg-cover py-4 rounded-lg shadow-md text-center">
        Book Telemedicine Appointment for {clinicName}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block font-semibold mb-1">👤 Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">🎂 Date of Birth</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div>
  <label className="block font-semibold mb-2">🕒 Select a Time Slot</label>
  {timeSlots.length === 0 ? (
    <p className="text-gray-500">No available slots.</p>
  ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {timeSlots.map((slot, index) => {
                const label = `${slot.date} at ${slot.time}`;
                const isAvailable = slot.status === "available";

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-md ${
                      isAvailable ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <label className="flex items-center text-sm text-black w-full">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={label}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        disabled={!isAvailable}
                        className="mr-3"
                      />
                      {label}
                    </label>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                      {slot.status}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>


        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          ✅ Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
