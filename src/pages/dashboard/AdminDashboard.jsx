import React, { useState } from 'react';
import TopBar from '../../components/dashboards/admin/TopBar';
import NavigationSidebar from '../../components/dashboards/admin/NavigationSidebar';
import DashboardMetrics from '../../components/dashboards/admin/DashboardMetrics';
import ActivityFeed from '../../components/dashboards/admin/ActivityFeed';
import UserAdministration from '../../components/dashboards/admin/UserAdministration';
import CourseAdministration from '../../components/dashboards/admin/CourseAdministration';

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
      <NavigationSidebar />
      <main className="flex-1 p-6">
        <TopBar notifications={notifications} />
        <DashboardMetrics />
        <ActivityFeed activities={activities} />
        <UserAdministration addActivity={addActivity} />
        <CourseAdministration addActivity={addActivity} />
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
