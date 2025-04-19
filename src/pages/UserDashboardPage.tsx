import React, { useEffect, useRef } from 'react';
import CropStatusCard from '../components/CropStatusCard';
import YieldTrendChartCard from '../components/YieldTrendChartCard';
import TasksAlertsCard from '../components/TasksAlertsCard';
import WeatherDataCard from '../components/WeatherDataCard';
import AIRecommendationsCard from '../components/AIRecommendationsCard';

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
            <a href="#crop-status-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">📊</span> Crop Status
            </a>
            <a href="#weather-data-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🌤️</span> Weather Data
            </a>
            <a href="#ai-recommendations-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🧠</span> AI Recommendations
            </a>
            <a href="#yield-trend-chart-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">📈</span> Yield Prediction
            </a>
            <a href="#tasks-alerts-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">🔔</span> Alerts
            </a>
            <a href="#settings-card" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">⚙️</span> Settings
            </a>
            <a href="#dashboard-top" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span className="mr-2">📊</span> Dashboard
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