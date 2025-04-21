import React from 'react';
import { BiTask, BiBell } from 'react-icons/bi'; // Bootstrap Icons for tasks and alerts

function TasksAlertsCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center space-x-2">
        <span className="text-2xl"><BiBell /></span>
        <span>Tasks & Alerts</span>
      </h2>
      <ul className="list-none pl-0 text-gray-700">
        <li className="mb-2 flex items-center space-x-2">
          <span className="text-green-500"><BiTask /></span>
          <span>Irrigation in 2 days</span>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <span className="text-orange-500"><BiTask /></span>
          <span>Fertilization soon</span>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <span className="text-blue-500"><BiTask /></span>
          <span>Check soil pH level</span>
        </li>
        <li className="mb-2 flex items-center space-x-2">
          <span className="text-red-500"><BiBell /></span>
          <span className="font-semibold">High pest activity detected in sector B</span>
        </li>
        {/* Add more tasks and alerts as needed */}
      </ul>
    </div>
  );
}

export default TasksAlertsCard;