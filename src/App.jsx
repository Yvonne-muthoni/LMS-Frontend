import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import CourseVideo from './pages/CourseVideo';
import Labs from './pages/Labs';
import Home from './pages/Home';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthForm from './components/user/AuthForm';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseVideo />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<PublicRoute><AuthPageLayout formType="login" /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><AuthPageLayout formType="register" /></PublicRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

const AuthPageLayout = ({ formType }) => (
  <div className="flex min-h-screen">
    <AuthForm formType={formType} />
  </div>
);

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/home" replace /> : children;
};

export default App;