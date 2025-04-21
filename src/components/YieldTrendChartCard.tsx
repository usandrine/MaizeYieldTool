import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai'; // Ant Design Icons for a line chart

function YieldTrendChartCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center space-x-2">
        <span className="text-2xl"><AiOutlineLineChart /></span>
        <span>Yield Trend Chart</span>
      </h2>
      {/* Placeholder for the actual chart */}
      <div className="bg-gray-100 rounded-md p-8 text-center text-gray-500 flex items-center justify-center h-32">
        <span className="text-xl">📈 Chart will be displayed here</span>
      </div>
    </div>
  );
}

export default YieldTrendChartCard;