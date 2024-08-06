import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-[#EF4444] text-white w-full md:w-64 space-y-6 py-7 px-2">
    <nav>
      <Link to="/student-dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      <Link to="/courses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Courses</Link>
      <Link to="/finance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Finance</Link>
      <Link to="/results" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Results</Link>
      <Link to="/instructors" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Course Instructors</Link>
    </nav>
  </aside>
);

export default Sidebar;
