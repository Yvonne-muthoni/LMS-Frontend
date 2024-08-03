import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from '../common/LoginModal';

function CourseCard({ id, title, description, url }) {
  const { isAuthenticated, login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Card clicked');
    if (isAuthenticated) {
      navigate(`/courses/${id}`);
    } else {
      console.log('Showing modal');
      setShowModal(true);
    }
  };

  const handleLogin = () => {
    console.log('Login button clicked');
    login();
    setShowModal(false);  // Close the modal
    navigate(`/courses/${id}`);  // Navigate to the course page
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
    // Implement sign-up logic or navigate to a sign-up page
    setShowModal(false);  // Close the modal
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl border border-gray-200 flex flex-col cursor-pointer"
        style={{ height: '400px', width: '300px' }}
        onClick={handleClick}
      >
        {/* Thumbnail */}
        <div className="relative" style={{ width: '100%', height: '45%' }}>
          <img
            src={`https://img.youtube.com/vi/${url.split('v=')[1]}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
          {/* Description */}
          <p className="text-gray-700 text-sm flex-grow overflow-hidden">{description}</p>
        </div>
      </div>
      {showModal && (
        <LoginModal 
          onClose={() => {
            console.log('Modal close button clicked');
            setShowModal(false);
          }}
          onLogin={handleLogin}
          onSignUp={handleSignUp}
        />
      )}
    </>
  );
}

export default CourseCard;