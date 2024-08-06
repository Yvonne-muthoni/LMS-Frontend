import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


const Header = ({ notifications, onNotificationClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (onNotificationClick) {
      onNotificationClick(); 
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Admin!</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="text-gray-600 hover:text-gray-800"
            onClick={handleNotificationClick}
          >
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>
          {showNotifications && notifications.length > 0 && (
            <div className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 w-48 rounded-lg z-10">
              {notifications.map((notification, index) => (
                <div key={index} className="px-4 py-2 border-b border-gray-200">
                  {notification}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
};


const Sidebar = () => (
  <aside className="bg-[#EF4444] text-white w-full md:w-64 space-y-6 py-7 px-2">
    <div>
    <img
        src="https://i.pinimg.com/564x/37/27/bc/3727bc3fe8ef9c43b046207d09494314.jpg"
        alt=""
        className="rounded-lg"
      />
    </div>
    <nav>
      <Link to="/admin-dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Dashboard</Link>
      <Link to="/user-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">User Management</Link>
      <Link to="/course-management" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Course Management</Link>
      <Link to="/notifications" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Notifications</Link>
      <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">System Settings</Link>
    </nav>
  </aside>
);


const KeyMetrics = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-blue-700">Active Users</h3>
        <p className="text-xl font-bold">1,234</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-green-700">Active Courses</h3>
        <p className="text-xl font-bold">123</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-yellow-700">Revenue</h3>
        <p className="text-xl font-bold">$50,000</p>
      </div>
    </div>
  </section>
);


const RecentActivity = ({ activities }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedActivities = showAll ? activities : activities.slice(0, 5);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div>
        {displayedActivities.length > 0 ? (
          displayedActivities.map((activity, index) => (
            <p key={index} className="border-b border-gray-300 py-2">{activity}</p>
          ))
        ) : (
          <p>No recent activities.</p>
        )}
      </div>
      {activities.length > 5 && (
        <button 
          onClick={() => setShowAll(!showAll)} 
          className="text-blue-500 hover:underline"
        >
          {showAll ? 'Show less' : 'See all'}
        </button>
      )}
    </section>
  );
};


const UserManagement = ({ addActivity }) => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(`User ${username} (${email}) was added.`);
    setUsername('');
    setEmail('');
    setShowForm(false);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showForm ? 'Hide Form' : 'Add New User'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};


const CourseManagement = ({ addActivity }) => {
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { name: courseName, description: courseDescription };
    setCourses([newCourse, ...courses]);
    addActivity(`Course "${courseName}" was added.`);
    setCourseName('');
    setCourseDescription('');
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    addActivity(`Course "${courses[index].name}" was deleted.`);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Course Management</h2>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {showForm ? 'Hide Form' : 'Add New Course'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">Course Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter course name" 
              value={courseName} 
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Course Description</label>
            <textarea 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter course description" 
              value={courseDescription} 
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      )}
      {courses.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Course List</h3>
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                <div>
                  <h4 className="font-medium">{course.name}</h4>
                  <p>{course.description}</p>
                </div>
                <button 
                  onClick={() => handleDelete(index)} 
                  className="text-red-500 hover:underline"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};


const AdminDashboard = () => {
  const [notifications, setNotifications] = useState([
    'New user registered.',
    'Course "React Basics" updated.',
    'System maintenance scheduled.',
  ]);
  const [activities, setActivities] = useState([
    'User JohnDoe registered.',
    'Course "Advanced JavaScript" updated.',
    'User JaneDoe profile updated.',
    'New course "CSS Flexbox" added.',
    'User AlexSmith deleted.',
    'System update applied.',
  ]);

  const [notificationText, setNotificationText] = useState('');

  const addActivity = (activity) => {
    setActivities([activity, ...activities]);
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    setNotifications([notificationText, ...notifications]);
    setNotificationText('');
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header notifications={notifications} />
        <KeyMetrics />
        <RecentActivity activities={activities} />
        <UserManagement addActivity={addActivity} />
        <CourseManagement addActivity={addActivity} />
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Notification</h2>
          <form onSubmit={handleNotificationSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Notification Text</label>
              <textarea 
                className="w-full border border-gray-300 p-2 rounded" 
                placeholder="Enter notification text" 
                value={notificationText} 
                onChange={(e) => setNotificationText(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;

