import React from 'react';

import { Link } from 'react-router-dom';


const Sidebar = ({ setIsLoggedIn }) => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Doctor Portal</h2>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block hover:text-blue-300">Dashboard</Link>
        <Link to="/appointments" className="block hover:text-blue-300">Appointments</Link>
        <Link to="/patients" className="block hover:text-blue-300">Patients</Link>
        <Link to="/profile" className="block hover:text-blue-300">Profile</Link>
        <Link to="/settings" className="block hover:text-blue-300">Settings</Link>
        <Link to="/reports" className="block hover:text-blue-300">Reports</Link>
        <Link to="/messages" className="block hover:text-blue-300">Messages</Link>
        <Link to="/notifications" className="block hover:text-blue-300">Notifications</Link>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="mt-4 block text-left hover:text-red-300"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

