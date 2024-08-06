import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/landing/LandingPage';
import Courses from './pages/course/Courses';
import CourseVideo from './pages/course/CourseVideo';
import Labs from './pages/labs/Labs';
import Home from './pages/home/Home';
import NotFoundPage from './pages/NotFoundPage';
import Finance from './pages/dashboard/Finance';
import Instructors from './pages/dashboard/Instructors';
import Results from './pages/dashboard/Results';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import AuthForm from './components/user/AuthForm';
import Subscription from './pages/subscriptions/Subscription';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

function AppRoutes() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <LandingPageLayout />} />
        <Route path="/courses" element={<CoursesPageLayout />} />
        <Route path="/courses/:courseId" element={<CourseVideoPageLayout />} />
        <Route path="/labs" element={<LabsPageLayout />} />
        <Route path="/home" element={<HomePageLayout />} />
        <Route path="/subscription" element={<SubscriptionPageLayout />} />
        <Route path="/login" element={!isAuthenticated ? <AuthPageLayout formType="login" /> : <Navigate to="/home" replace />} />
        <Route path="/register" element={!isAuthenticated ? <AuthPageLayout formType="register" /> : <Navigate to="/home" replace />} />
        
        {/* Protected routes */}
        <Route path="/student-dashboard" element={
          <ProtectedRoute>
            <StudentDashboardPageLayout />
          </ProtectedRoute>
        } />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboardPageLayout />
          </ProtectedRoute>
        } />
        <Route path="/finance" element={
          <ProtectedRoute requiredRole="admin">
            <FinancePageLayout />
          </ProtectedRoute>
        } />
        <Route path="/results" element={
          <ProtectedRoute>
            <ResultsPageLayout />
          </ProtectedRoute>
        } />
        <Route path="/instructors" element={
          <ProtectedRoute requiredRole="admin">
            <InstructorsPageLayout />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/home" replace />;
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

const FinancePageLayout = () => (
  <>
    <Finance />
  </>
);

const ResultsPageLayout = () => (
  <>
    <Results />
  </>
);

const InstructorsPageLayout = () => (
  <>
    <Instructors />
  </>
);

export default App;