import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Button, Box } from '@chakra-ui/react';
import WelcomeSection from './WelcomeSection';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Login from '../../pages/Login';
import Register from './RegistrationForm';

const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUp, setIsSignUp] = useState(location.pathname === '/register');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300); // Delay for smooth transition
    return () => clearTimeout(timer);
  }, [isSignUp]);

  const toggleForm = (signUp) => {
    setFade(true);
    setTimeout(() => {
      setIsSignUp(signUp);
      navigate(signUp ? '/register' : '/login');
    }, 300); // Sync with the fade-out duration
  };

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      <div className="absolute top-4 left-4">
        <Button
          leftIcon={<ArrowBackIcon />}
          color="#FF6247"
          variant="ghost"
          fontSize="lg"
          onClick={() => navigate('/')}
        >
          Back
        </Button>
      </div>
      <div className="max-w-5xl w-full mx-auto flex rounded-lg overflow-hidden">
        {/* WelcomeSection */}
        <WelcomeSection />

        {/* Auth Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              SkillQuest <span role="img" aria-label="Brain icon">🧠</span>
            </h2>
            <div className="inline-flex rounded-lg overflow-hidden border border-coral-300">
              <button
                className={`py-2 px-6 text-sm font-medium transition-colors duration-200 ${
                  !isSignUp ? 'bg-coral-500 text-white' : 'bg-white text-coral-700 hover:bg-coral-100'
                }`}
                onClick={() => toggleForm(false)}
              >
                Login
              </button>
              <button
                className={`py-2 px-6 text-sm font-medium transition-colors duration-200 ${
                  isSignUp ? 'bg-coral-500 text-white' : 'bg-white text-coral-700 hover:bg-coral-100'
                }`}
                onClick={() => toggleForm(true)}
              >
                Register
              </button>
            </div>
          </div>
          {!isSignUp ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
