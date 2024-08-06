import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../index.css'; 

function LoginModal({ onClose }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(() => {
      onClose(); 
    }, 300); 
  };

  const handleLogin = async () => {
    try {
      await login();
      handleClose();
      navigate('/login');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignUp = () => {
    handleClose();
    navigate('/register');
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back</h2>
        <p className="mb-8 text-center text-gray-600">Log in to access the labs</p>
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            className="w-full bg-[#FF6247] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
          >
            Log In
          </button>
          <button
            onClick={handleSignUp}
            className="w-full bg-white text-[#FF6247] px-6 py-3 rounded-lg font-semibold border-2 border-[#FF6247] hover:bg-[#FF6247] hover:text-white transition-all duration-200 transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to our <a href="#" className="text-[#FF6247] hover:underline">Terms of Service</a> and <a href="#" className="text-[#FF6247] hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
