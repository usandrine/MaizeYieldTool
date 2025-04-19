import React from 'react';
import CropStatusCard from '../components/CropStatusCard';
import YieldTrendChartCard from '../components/YieldTrendChartCard';
import TasksAlertsCard from '../components/TasksAlertsCard';
import WeatherDataCard from '../components/WeatherDataCard'; // Import the new card
import AIRecommendationsCard from '../components/AIRecommendationsCard'; // Import the new card

function UserDashboardPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="bg-white w-64 p-6 shadow-md">
        <div className="mb-8">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img src="/your-logo.png" alt="AgriYield Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-lg text-green-700">AgriYield</span>
          </div>
          {/* Navigation Links */}
          <nav>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Dashboard</h3>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">📊</span> Dashboard
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🌱</span> Crop Status
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🌤️</span> Weather Data
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🧠</span> AI Recommendations
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">📈</span> Yield Prediction
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🔔</span> Alerts
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">⚙️</span> Settings
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {/* User Info Bar */}
        <div className="bg-green-200 p-4 rounded-md shadow-sm mb-6">
          <div className="flex items-center justify-start space-x-4">
            <span>👤 User Name</span>
            <span>🔔 Notifications</span>
            <span>⚙️ Settings</span>
            <span>Profile</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Crop Status Card */}
          <CropStatusCard />

          {/* Yield Trend Chart Card */}
          <YieldTrendChartCard />

          {/* Tasks & Alerts Card */}
          <TasksAlertsCard />

          {/* Weather Data Card */}
          <WeatherDataCard />

          {/* AI Recommendations Card */}
          <AIRecommendationsCard />

          {/* You can add more grid items here if needed */}
        </div>
      </main>
    </div>
  );
}

export default UserDashboardPage;