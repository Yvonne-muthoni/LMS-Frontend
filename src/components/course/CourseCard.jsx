import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from '../common/LoginModal';

function CourseCard({ id, title, description, url, tags }) {
  const { isAuthenticated, login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate(`/courses/${id}`);
    } else {
      setShowModal(true);
    }
  };

  const handleLogin = async () => {
    try {
      await login();
      setShowModal(false);  // Close the modal
      navigate(`/courses/${id}`);  // Navigate to the course page
    } catch (error) {
      console.error('Login failed', error);
      // Optionally, show an error message or handle the login failure
    }
  };

  const handleSignUp = () => {
    setShowModal(false);  // Close the modal
    navigate('/signup');  // Navigate to the sign-up page
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
            alt={title || 'Course Thumbnail'}
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
          {/* Description */}
          <p className="text-gray-700 text-sm flex-grow overflow-hidden">{description}</p>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
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

export default CourseCard;