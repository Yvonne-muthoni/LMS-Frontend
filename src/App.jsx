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
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import WelcomeSection from './components/user/WelcomeSection';

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
            <Route path="/login" element={<LoginPageLayout />} />
            <Route path="/register" element={<RegisterPageLayout />} />
            <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const LoginPageLayout = () => (
  <div className="flex">
    <div className="w-1/2 pr-8">
      <WelcomeSection />
    </div>
    <div className="w-1/2 p-8">
      <Login />
    </div>
  </div>
);

const RegisterPageLayout = () => (
  <div className="flex">
    <div className="w-1/2 pr-8">
      <WelcomeSection />
    </div>
    <div className="w-1/2 p-8">
      <Register />
    </div>
  </div>
);

export default App;
