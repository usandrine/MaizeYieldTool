import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserDashboardPage from './pages/UserDashboardPage'; // Or FarmerDashboardPage
// import AdminDashboardPage from './pages/AdminDashboardPage'; // We'll import this later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} /> {/* Update the route */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboardPage />} /> */} {/* Example route for admin */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;