import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBook, FaBell, FaCog } from 'react-icons/fa';

const NavigationSidebar = () => (
  <aside className="bg-[#FF6247] text-white w-full md:w-64 space-y-6 py-7 px-2">
    <nav>
      <Link to="/admin-dashboard" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#FF3E3E]">
        <FaTachometerAlt className="mr-3" /> Dashboard
      </Link>
      <Link to="/user-management" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#FF3E3E]">
        <FaUsers className="mr-3" /> User Management
      </Link>
      <Link to="/course-management" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#FF3E3E]">
        <FaBook className="mr-3" /> Course Management
      </Link>
      <Link to="/notifications" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#FF3E3E]">
        <FaBell className="mr-3" /> Notifications
      </Link>
      <Link to="/settings" className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-[#FF3E3E]">
        <FaCog className="mr-3" /> System Settings
      </Link>
    </nav>
  </aside>
);

export default NavigationSidebar;
