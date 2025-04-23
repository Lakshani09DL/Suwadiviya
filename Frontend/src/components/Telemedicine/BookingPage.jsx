import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookingPage() {
  const { clinicName } = useParams();
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [zoomLink, setZoomLink] = useState("");

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

  const handleConfirm = async () => {
    if (!name || !dob || !selectedSlot) {
      alert("Please fill all fields and select a slot");
      return;
    }

    try {
        const response = await fetch("http://localhost:8000/tm-gampaha/clinics/appointments/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          dob,
          clinic_name: clinicName,
          time_slot: selectedSlot,
        }),
      });

      const data = await response.json();
      setZoomLink(data.zoom_link); // Show generated link
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Book Appointment - {clinicName}
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">🕒 Select a Time Slot</label>
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
        </div>

        <button
          onClick={handleConfirm}
          className="bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-800 transition"
        >
          Confirm Appointment
        </button>

        {zoomLink && (
          <div className="mt-6 p-4 border rounded bg-green-50">
            <p className="font-semibold text-green-700">✅ Appointment confirmed!</p>
            <a href={zoomLink} target="_blank" className="text-blue-700 underline">
              Join Zoom Meeting
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingPage;
