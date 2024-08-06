import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSidebar = () => (
  <aside className="bg-[#EF4444] text-white w-full md:w-64 space-y-6 py-7 px-2">
    <nav>
      <Link to="/admin-dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      <Link to="/user-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">User Management</Link>
      <Link to="/course-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Course Management</Link>
      <Link to="/notifications" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Notifications</Link>
      <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">System Settings</Link>
    </nav>
  </aside>
);

export default NavigationSidebar;
