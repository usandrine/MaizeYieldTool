import React from 'react';

function WeatherDataCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-600 mb-4">Weather Data</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 font-semibold">Temperature:</p>
          <p className="text-lg">25°C</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Humidity:</p>
          <p className="text-lg">70%</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Wind Speed:</p>
          <p className="text-lg">5 m/s</p> {/* Placeholder */}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Rainfall:</p>
          <p className="text-lg">0 mm</p> {/* Placeholder */}
        </div>
        {/* You can add more weather data points here */}
      </div>
    </div>
  );
}

export default WeatherDataCard;