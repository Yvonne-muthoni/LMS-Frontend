// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-[#EF4444] p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/student-dashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Student Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Admin Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
