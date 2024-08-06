import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ username, onLogout }) => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {username}!</h1>
    <div className="flex items-center space-x-4">
      <button className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-gray-800">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-gray-800" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
      </button>
    </div>
  </header>
);

export default Header;
