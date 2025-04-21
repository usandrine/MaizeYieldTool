import React, { useEffect, useRef } from 'react';
import CropStatusCard from '../components/CropStatusCard';
import YieldTrendChartCard from '../components/YieldTrendChartCard';
import TasksAlertsCard from '../components/TasksAlertsCard';
import WeatherDataCard from '../components/WeatherDataCard';
import AIRecommendationsCard from '../components/AIRecommendationsCard';
//import { Link } from 'react-router-dom'; // Import the Link component
function UserDashboardPage() {
  const cropStatusRef = useRef<HTMLDivElement>(null);
  const yieldTrendRef = useRef<HTMLDivElement>(null);
  const tasksAlertsRef = useRef<HTMLDivElement>(null);
  const weatherDataRef = useRef<HTMLDivElement>(null);
  const aiRecommendationsRef = useRef<HTMLDivElement>(null);
  const dashboardTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const links = document.querySelectorAll('aside nav a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust offset if needed
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="bg-white w-64 p-6 shadow-md flex flex-col justify-between h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center mb-8">
            {/* Replace with your actual logo image path */}
            <img src="/your-logo.png" alt="AgriYield Logo" className="w-10 h-10 mr-3" />
            <span className="font-bold text-xl text-green-700">AgriYield</span>
          </div>
          {/* Navigation Links */}
          <nav>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Dashboard</h3>
            <a href="#crop-status-card" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">📊</span> Crop Status
            </a>
            <a href="#weather-data-card" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">🌤️</span> Weather Data
            </a>
            <a href="#ai-recommendations-card" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">🧠</span> AI Recommendations
            </a>
            <a href="/yield-prediction" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">📈</span> Yield Prediction
            </a>
            <a href="#tasks-alerts-card" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">🔔</span> Alerts
            </a>
            <a href="settings" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">⚙️</span> Settings
            </a>
            <a href="#dashboard-top" className="block py-2 px-4 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-md transition duration-150 ease-in-out">
              <span className="mr-3">📊</span> Dashboard
            </a>
          </nav>
        </div>
        {/* Logout link remains at the bottom */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <a href="/logout" className="block py-2 px-4 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-md transition duration-150 ease-in-out">
            <span>🚪</span> Logout
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        {/* User Info Bar */}
        <div className="bg-white p-4 rounded-md shadow-sm mb-6 flex items-center justify-end space-x-4">
          <span className="text-gray-700">👤 User Name</span>
          <button className="relative">
            <span className="text-gray-700">🔔 Notifications</span>
            <span className="absolute top-0 right-[-8px] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">3</span> {/* Example notification count */}
          </button>
          <span className="text-gray-700">Profile</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Crop Status Card */}
          <div ref={cropStatusRef} id="crop-status-card">
            <CropStatusCard />
          </div>

          {/* Yield Trend Chart Card */}
          <div ref={yieldTrendRef} id="yield-trend-chart-card">
            <YieldTrendChartCard />
          </div>

          {/* Tasks & Alerts Card */}
          <div ref={tasksAlertsRef} id="tasks-alerts-card">
            <TasksAlertsCard />
          </div>

          {/* Weather Data Card */}
          <div ref={weatherDataRef} id="weather-data-card">
            <WeatherDataCard />
          </div>

          {/* AI Recommendations Card */}
          <div ref={aiRecommendationsRef} id="ai-recommendations-card">
            <AIRecommendationsCard />
          </div>
        </div>
      </main>
      <div ref={dashboardTopRef} id="dashboard-top" style={{ position: 'absolute', top: 0 }}></div>
    </div>
  );
}

export default UserDashboardPage;