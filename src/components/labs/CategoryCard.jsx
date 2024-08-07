import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from '../common/LoginModal';
import { FaHtml5, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';

const icons = {
  html: FaHtml5,
  javascript: FaJsSquare,
  react: FaReact,
  python: FaPython,
};

function CategoryCard({ name }) {
  const { isAuthenticated, login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const IconComponent = icons[name.toLowerCase()];

  const handleClick = () => {
    if (isAuthenticated) {
      navigate(`/quiz/${name.toLowerCase()}`);
    } else {
      setShowModal(true);
    }
  };

  const handleLogin = () => {
    login();
    setShowModal(false);
    navigate(`/quiz/${name.toLowerCase()}`);
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    setShowModal(false);
  };

  return (
    <>
      <div 
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <IconComponent className="w-16 h-16 mb-2 text-gray-700" />
        <span className="font-semibold text-lg text-gray-800">{name}</span>
      </div>
      {showModal && (
        <LoginModal 
          onClose={() => setShowModal(false)}
          onLogin={handleLogin}
          onSignUp={handleSignUp}
        />
      )}
    </>
  );
}

export default CategoryCard;
