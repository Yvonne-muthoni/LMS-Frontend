import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppContent />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/courses" element={<CoursesPageLayout />} />
        <Route path="/courses/:courseId" element={<CourseVideoPageLayout />} />
        <Route path="/labs" element={<LabsPageLayout />} />
        <Route path="/home" element={<HomePageLayout />} />
        <Route path="/subscription" element={<SubscriptionPageLayout />} />
        <Route path="/login" element={<AuthPageLayout formType="login" />} />
        <Route path="/register" element={<AuthPageLayout formType="register" />} />
        <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboardPageLayout /></ProtectedRoute>} />
        <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboardPageLayout /></ProtectedRoute>} />
        <Route path="/registration" element={<ProtectedRoute><RegistrationPageLayout /></ProtectedRoute>} />
        <Route path="/finance" element={<ProtectedRoute><FinancePageLayout /></ProtectedRoute>} />
        <Route path="/results" element={<ProtectedRoute><ResultsPageLayout /></ProtectedRoute>} />
        <Route path="/instructors" element={<ProtectedRoute><InstructorsPageLayout /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

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

const SubscriptionPageLayout = () => (
  <>
    <Navbar />
    <Subscription />
    <Footer />
  </>
);

const AuthPageLayout = ({ formType }) => (
  <div className="flex min-h-screen">
    <AuthForm formType={formType} />
  </div>
);

const StudentDashboardPageLayout = () => (
  <>
    <StudentDashboard />
  </>
);

const AdminDashboardPageLayout = () => (
  <>
    <AdminDashboard />
  </>
);

const RegistrationPageLayout = () => (
  <>
    <Header />
    <Navbar />
    <Registration />
  </>
);

const FinancePageLayout = () => (
  <>
    <Header />
    <Navbar />
    <Finance />
  </>
);

const ResultsPageLayout = () => (
  <>
    <Header />
    <Navbar />
    <Results />
  </>
);

const InstructorsPageLayout = () => (
  <>
    <Header />
    <Navbar />
    <Instructors />
  </>
);

export default App;