import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faCog, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'; // Key icons

function AdminDashboardPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Sidebar Navigation */}
            <aside className="bg-white w-64 p-6 shadow-md flex flex-col justify-between h-screen">
                <div>
                    {/* Logo */}
                    <div className="flex items-center mb-8">
                        <img src="/your-logo.png" alt="AgriYield Admin Logo" className="w-10 h-10 mr-3" />
                        <span className="font-bold text-xl text-indigo-700">AgriYield Admin</span>
                    </div>
                    {/* Navigation Links - Focusing on key admin features */}
                    <nav>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Admin Menu</h3>
                        <Link to="/admin/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition duration-150 ease-in-out">
                            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" /> Dashboard
                        </Link>
                        <Link to="/admin/users" className="block py-2 px-4 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition duration-150 ease-in-out">
                            <FontAwesomeIcon icon={faUsers} className="mr-3" /> User Management
                        </Link>
                        <Link to="/admin/reports" className="block py-2 px-4 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition duration-150 ease-in-out">
                            <FontAwesomeIcon icon={faChartBar} className="mr-3" /> Reports & Analytics
                        </Link>
                        <Link to="/admin/settings" className="block py-2 px-4 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-md transition duration-150 ease-in-out">
                            <FontAwesomeIcon icon={faCog} className="mr-3" /> Settings
                        </Link>
                        {/* Removed Alerts and Send Alerts for absolute simplicity - can add back later */}
                    </nav>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-200">
                    <Link to="/logout" className="block py-2 px-4 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-md transition duration-150 ease-in-out">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
                {/* Admin Info Bar - Simplified, removed notifications for now */}
                <div className="bg-white p-4 rounded-md shadow-sm mb-6 flex items-center justify-end">
                    <span className="text-gray-700">👤 Admin Name</span>
                </div>

                {/* Main Content - Simplified Placeholder */}
                <div className="bg-white rounded-md shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin Dashboard</h2>
                    <p className="text-gray-600">Welcome to the Admin Dashboard.</p>
                    {/* You will add actual admin content here */}
                </div>
            </main>
        </div>
    );
}

export default AdminDashboardPage;