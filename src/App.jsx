import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import CourseVideo from './pages/CourseVideo';
import Labs from './pages/Labs';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Import useAuth from AuthContext
import AuthForm from './components/user/AuthForm';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Routes>
            <Route path="/" element={<LandingPageLayout />} />
            <Route path="/courses" element={<CoursesPageLayout />} />
            <Route path="/courses/:courseId" element={<CourseVideoPageLayout />} />
            <Route path="/labs" element={<LabsPageLayout />} />
            <Route path="/home" element={<ProtectedRoute><HomePageLayout /></ProtectedRoute>} />
            <Route path="/login" element={<AuthPageLayout formType="login" />} />
            <Route path="/register" element={<AuthPageLayout formType="register" />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const LandingPageLayout = () => (
  <>
    <Navbar />
    <LandingPage />
    <Footer />
  </>
);

const CoursesPageLayout = () => (
  <>
    <Navbar />
    <Courses />
    <Footer />
  </>
);

const CourseVideoPageLayout = () => (
  <>
    <Navbar />
    <CourseVideo />
    <Footer />
  </>
);

const LabsPageLayout = () => (
  <>
    <Navbar />
    <Labs />
    <Footer />
  </>
);

const HomePageLayout = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
);


const AuthPageLayout = ({ formType }) => (
  <div className="flex min-h-screen">
    <AuthForm formType={formType} />
  </div>
);

// ProtectedRoute component to handle authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use useAuth instead of useContext

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default App;
