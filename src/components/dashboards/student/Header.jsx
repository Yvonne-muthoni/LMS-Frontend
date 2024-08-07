import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ username, onLogout }) => (
  <header className="bg-white shadow-sm p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-800">Welcome, {username}</h1>
    <div className="flex items-center space-x-6">
      <button className="text-gray-600 hover:text-[#FF6247] transition-colors">
        <FontAwesomeIcon icon={faBell} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-[#FF6247] transition-colors">
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </button>
      <button className="text-gray-600 hover:text-[#FF6247] transition-colors" onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
      </button>
    </div>
  </header>
);

export default Header;
