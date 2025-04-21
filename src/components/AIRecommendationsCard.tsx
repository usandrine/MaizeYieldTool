import React from 'react';
import { BiBrain } from 'react-icons/bi'; // Bootstrap Icons for AI

function AIRecommendationsCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center space-x-2">
        <span className="text-2xl"><BiBrain /></span>
        <span>AI Recommendations</span>
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li className="mb-2">Consider applying nitrogen fertilizer in the next 3-5 days based on growth stage and soil analysis.</li>
        <li className="mb-2">Monitor for signs of common maize pests like fall armyworm; early detection is crucial.</li>
        <li className="mb-2">Optimal irrigation schedule suggests watering every 4 days given current soil moisture and weather forecast.</li>
        {/* Add more AI recommendations as needed */}
      </ul>
    </div>
  );
}

export default AIRecommendationsCard;