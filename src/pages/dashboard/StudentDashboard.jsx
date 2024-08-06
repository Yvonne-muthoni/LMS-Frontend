import React from 'react';
import Header from '../../components/dashboards/student/Header'; // Correct path
import Sidebar from '../../components/dashboards/student/Sidebar'; // Corrected path
import KeyMetrics from '../../components/dashboards/student/KeyMetrics'; // Correct path
import DailyNotice from '../../components/dashboards/student/DailyNotice'; // Correct path
import EnrolledCourses from '../../components/dashboards/student/EnrolledCourses'; // Correct path
import Schedule from '../../components/dashboards/student/Schedule'; // Correct path
import { useAuth } from '../../contexts/AuthContext'; // Path remains the same

const StudentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header username={user?.name} onLogout={logout} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <KeyMetrics />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DailyNotice />
              <Schedule />
            </div>
            <EnrolledCourses />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
