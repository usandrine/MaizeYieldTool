import React from 'react';

function CropStatusCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4">Current Crop Status</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 font-semibold">Moisture:</p>
          <p className="text-lg">42%</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">pH:</p>
          <p className="text-lg">6.5</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Temp:</p>
          <p className="text-lg">28°C</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Alerts:</p>
          <p className="text-lg text-red-500">⚠️</p> {/* Placeholder */}
        </div>
      </div>
    </div>
  );
}

export default CropStatusCard;