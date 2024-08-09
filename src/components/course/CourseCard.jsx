import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Skeleton } from '@chakra-ui/react';
import LoginModal from '../common/LoginModal';

function CourseCard({ id, title, description, image, tags }) {
  const { isAuthenticated, login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time for the skeleton effect
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
      setShowModal(false);
      navigate(`/courses/${id}`);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignUp = () => {
    setShowModal(false);
    navigate('/signup');
  };

  const displayTags = tags?.slice(0, 3) || [];

  return (
    <>
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 flex flex-col cursor-pointer"
        style={{ height: '400px', width: '300px' }}
        onClick={handleClick}
      >
        {loading ? (
          <div className="relative h-[45%] w-full">
            <Skeleton height="100%" width="100%" borderRadius="none" />
          </div>
        ) : (
          <div className="relative h-[45%] w-full">
            <img
              src={image || '/default-thumbnail.jpg'}
              alt={`${title} thumbnail` || 'Course thumbnail'}
              className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {loading ? (
            <>
              <Skeleton height="20px" width="80%" mb="2" />
              <Skeleton height="14px" width="100%" mb="2" />
              <div className="mt-2 flex flex-wrap">
                {[1, 2, 3].map((_, index) => (
                  <Skeleton key={index} height="24px" width="50px" borderRadius="full" mr="2" mb="2" />
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{title}</h3>
              <p className="text-gray-700 text-sm flex-grow overflow-hidden">{description}</p>
              {displayTags.length > 0 && (
                <div className="mt-2 flex flex-wrap">
                  {displayTags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-coral-500 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </>
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
