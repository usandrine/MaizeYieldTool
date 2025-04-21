import React from 'react';
import { WiHumidity, WiThermometer, WiRaindrop } from 'react-icons/wi'; // Weather icons
// import { BiPlant, BiErrorCircleFill } from 'react-icons/bi'; // Bootstrap Icons (commented out)

function CropStatusCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center space-x-2">
        {/* <span className="text-2xl"><BiPlant /></span> */}
        <span>Current Crop Status</span>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl text-blue-500"><WiHumidity /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Moisture:</p>
            <p className="text-lg">42%</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-orange-500"><WiThermometer /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Temperature:</p>
            <p className="text-lg">28°C</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-blue-700"><WiRaindrop /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">pH:</p>
            <p className="text-lg">6.5</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <span className="text-xl text-red-500"><BiErrorCircleFill /></span> */}
          <div>
            <p className="text-gray-700 font-semibold text-sm">Alerts:</p>
            <p className="text-lg text-red-500">⚠️ High</p> {/* Placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropStatusCard;