import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as necessary

// Header Component
const Header = ({ username, onLogout }) => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {username}!</h1>
    <div className="flex items-center space-x-4">
      <button className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-gray-800" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
      </button>
    </div>
  </header>
);

// Sidebar Component
const Sidebar = () => (
  <aside className="bg-[#EF4444] text-white w-full md:w-64 space-y-6 py-7 px-2">
    <div>
      <a href="#" className="text-white text-3xl font-semibold">Logo</a>
    </div>
    <nav>
      <Link to="/student-dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      <Link to="/courses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Courses</Link>
      <Link to="/registration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Registration</Link>
      <Link to="/finance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Finance</Link>
      <Link to="/results" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Results</Link>
      <Link to="/instructors" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Course Instructors</Link>
    </nav>
  </aside>
);

// Key Metrics Component
const KeyMetrics = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Payment Info</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-blue-700">Total Payable</h3>
        <p className="text-xl font-bold">$10,000</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-green-700">Total Paid</h3>
        <p className="text-xl font-bold">$5,000</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-yellow-700">Others</h3>
        <p className="text-xl font-bold">$300</p>
      </div>
    </div>
  </section>
);

// Daily Notice Component
const DailyNotice = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Daily Notice</h2>
    <p>Prelim payment due</p>
    <p>Always stay updated in your student portal</p>
    <a href="#" className="text-blue-500 hover:underline">See all</a>
  </section>
);

// Enrolled Courses Component
const EnrolledCourses = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-purple-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-purple-700">Object Oriented Programming</h3>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-purple-700">Fundamentals of Database Systems</h3>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
    </div>
    <a href="#" className="text-blue-500 hover:underline">See all</a>
  </section>
);

// Schedule Component
const Schedule = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Schedule</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-red-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-red-700">Exam Schedule</h3>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
    </div>
    <a href="#" className="text-blue-500 hover:underline">See more</a>
  </section>
);

const StudentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header username={user?.name} onLogout={logout} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100 space-y-6">
          <KeyMetrics />
          <DailyNotice />
          <EnrolledCourses />
          <Schedule />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;