import React, { useEffect, useState } from "react";
import axios from "axios";

const NotificationBell = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/notifications/notifications/${userId}`)
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setShowDropdown(!showDropdown)} className="relative">
        🔔
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg z-10">
          {notifications.length === 0 ? (
            <p className="p-2 text-gray-500">No notifications</p>
          ) : (
            <ul className="max-h-60 overflow-y-auto">
              {notifications.map((msg, idx) => (
                  <li key={idx} className="p-2 border-b text-sm">
                    <div className="font-medium text-black">{msg.message || "No message available"}</div>
                    <div className="text-xs text-gray-500">{new Date(msg.sent_date).toLocaleString()}</div>
                  </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
