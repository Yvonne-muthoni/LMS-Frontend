import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = ({ notifications, onNotificationClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (onNotificationClick) {
      onNotificationClick();
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900">Welcome back, Admin!</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            className="text-gray-600 hover:text-gray-800"
            onClick={handleNotificationClick}
          >
            <FontAwesomeIcon icon={faBell} className="text-2xl" />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>
          {showNotifications && notifications.length > 0 && (
            <div className="absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 w-48 rounded-lg z-10">
              {notifications.map((notification, index) => (
                <div key={index} className="px-4 py-2 border-b border-gray-200">
                  {notification}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
