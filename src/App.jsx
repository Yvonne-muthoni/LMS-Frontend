import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import CourseVideo from './pages/CourseVideo';
import Labs from './pages/Labs';
import Home from './pages/Home';
import { AuthProvider } from './contexts/AuthContext';
import WelcomeSection from './components/user/WelcomeSection';
import AuthForm from './components/user/AuthForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<><Navbar /><LandingPage /><Footer /></>} />
            <Route path="/courses" element={<><Navbar /><Courses /><Footer /></>} />
            <Route path="/courses/:courseId" element={<><Navbar /><CourseVideo /><Footer /></>} />
            <Route path="/labs" element={<><Navbar /><Labs /><Footer /></>} />
            <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/login" element={<AuthPageLayout formType="login" />} />
            <Route path="/register" element={<AuthPageLayout formType="register" />} />
          </Routes>
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

export default App;
