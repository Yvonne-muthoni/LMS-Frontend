import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import CourseVideo from './pages/CourseVideo';
import Labs from './pages/Labs';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import StudentDashboard from "./components/dashboards/StudentDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import Registration from './components/Registration';
import Finance from './components/Finance';
import Results from './components/Results';
import Instructors from './components/Instructors';
import Header from './components/Header';

import AuthForm from './components/user/AuthForm';
import './index.css';
import Subscription from './pages/Subscription';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path="/" element={<><Navbar /><LandingPage /><Footer /></>} />
              <Route path="/courses" element={<><Navbar /><Courses /><Footer /></>} />
              <Route path="/courses/:courseId" element={<><Navbar /><CourseVideo /><Footer /></>} />
              <Route path="/labs" element={<><Navbar /><Labs /><Footer /></>} />
              <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
              <Route path="/subscription" element={<><Navbar /><Subscription /><Footer /></>} />
              <Route path="/login" element={<AuthPageLayout formType="login" />} />
              <Route path="/register" element={<AuthPageLayout formType="register" />} />
              <Route path="/student-dashboard" element={<><Header /><Navbar  /><StudentDashboard /></>} />
              <Route path="/admin-dashboard" element={<><Header /><Navbar /><AdminDashboard /></>} />
              <Route path="/registration" element={<><Header /><Navbar /><Registration /></>} />
              <Route path="/finance" element={<><Header /><Navbar /><Finance /></>} />
              <Route path="/results" element={<><Header /><Navbar /><Results /></>} />
              <Route path="/instructors" element={<><Header /><Navbar /><Instructors /></>} />
              <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

const AuthPageLayout = ({ formType }) => (
  <div className="flex min-h-screen">
    <AuthForm formType={formType} />
  </div>
);

export default App;
