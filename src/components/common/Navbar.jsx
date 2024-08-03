// components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          SkillQuest 🧠
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/subscription" className="text-black font-bold border-2 px-2 py-0.5 rounded-md border-coral-500 text-coral-500">
                PRO
              </Link>
            </li>
            <li>
              <Link to="/labs" className="text-black font-bold">
                Labs
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-black font-bold">
                Courses
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <button onClick={logout} className="text-black font-bold bg-coral-500 text-white px-4 py-2 rounded-md">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-black font-bold bg-coral-500 text-white px-4 py-2 rounded-md">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;