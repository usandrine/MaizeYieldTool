import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserDashboardPage from './pages/UserDashboardPage'; // Or FarmerDashboardPage
import YieldPredictionPage from './pages/YieldPredictionPage';
import SettingsPage from './pages/SettingsPage';
import PlantingHarvestingRecordsPage from './pages/PlantingHarvestingRecordsPage'; // Import the new page
import InputManagementPage from './pages/InputManagementPage'; // Make sure this import exists
import ReportsAnalyticsPage from './pages/ReportsAnalyticsPage'; // Import the new page
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage'; // Import AboutPage
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import PrivacyPolicyPage
import TermsOfServicePage from './pages/TermsOfServicePage'; // Import TermsOfServicePage
import AdminDashboardPage from './pages/AdminDashboardPage';
// import AdminDashboardPage from './pages/AdminDashboardPage'; // We'll import this later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} /> {/* Update the route */}
        <Route path="/yield-prediction" element={<YieldPredictionPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/planting-harvesting" element={<PlantingHarvestingRecordsPage />} /> {/* Add the new route */}
        <Route path="/input-management" element={<InputManagementPage />} /> {/* Ensure this route is present */}
        <Route path="/reports-analytics" element={<ReportsAnalyticsPage />} /> {/* Ensure this route is present */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Route for About Page */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Route for Privacy Policy */}
                <Route path="/terms-of-service" element={<TermsOfServicePage />} /> {/* Route for Terms of Service */}
                {/* ... other routes */}
                <Route path="/Admin-Dashboard" element={<AdminDashboardPage />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboardPage />} /> */} {/* Example route for admin */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;