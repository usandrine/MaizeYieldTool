import React from 'react';

function TasksAlertsCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4">Tasks & Alerts</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Irrigation in 2 days</li>
        <li>Fertilization soon</li>
        <li>Check soil pH level</li>
        {/* Add more tasks and alerts as needed */}
      </ul>
    </div>
  );
}

export default TasksAlertsCard;