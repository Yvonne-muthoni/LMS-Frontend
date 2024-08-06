// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import StudentDashboard from "./components/dashboards/StudentDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import Courses from './components/Courses';
import Registration from './components/Registration';
import Finance from './components/Finance';
// import DropSemester from './components/DropSemester';
import Results from './components/Results';
import Instructors from './components/Instructors';
import Header from './components/Header'; // Ensure this exists
import Navigation from './components/Navigation'; // Ensure this exists
// import NotFound from './components/NotFound'; // Ensure this exists
import './index.css';

const App = () => (
  <AuthProvider>
    <NotificationProvider>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/student-dashboard" />} /> {/* Default route */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/finance" element={<Finance />} />
          {/* <Route path="/drop-semester" element={<DropSemester />} /> */}
          <Route path="/results" element={<Results />} />
          <Route path="/instructors" element={<Instructors />} />
          {/* <Route path="*" element={<NotFound />} /> Fallback route */}
        </Routes>
      </Router>
    </NotificationProvider>
  </AuthProvider>
);

export default App;
