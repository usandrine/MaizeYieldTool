import React from 'react';
import { WiThermometer, WiHumidity, WiWindy, WiRaindrops } from 'react-icons/wi'; // Weather icons

function WeatherDataCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center space-x-2">
        <span className="text-2xl"><WiWindy /></span> {/* Using a general weather icon for the title */}
        <span>Weather Data</span>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl text-orange-500"><WiThermometer /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Temperature:</p>
            <p className="text-lg">25°C</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-blue-500"><WiHumidity /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Humidity:</p>
            <p className="text-lg">70%</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-gray-500"><WiWindy /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Wind Speed:</p>
            <p className="text-lg">5 m/s</p> {/* Placeholder */}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl text-blue-700"><WiRaindrops /></span>
          <div>
            <p className="text-gray-700 font-semibold text-sm">Rainfall:</p>
            <p className="text-lg">0 mm</p> {/* Placeholder */}
          </div>
        </div>
        {/* You can add more weather data points here */}
      </div>
    </div>
  );
}

export default WeatherDataCard;