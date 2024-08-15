import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faCog,
  faSignOutAlt,
  faCrown,
  faGraduationCap,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          SkillQuest 🧠
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                to="/subscription"
                className="text-coral-500 font-bold border-2 border-coral-500 px-2 py-0.5 rounded-md hover:bg-coral-500 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faCrown} className="mr-1" />
                PRO
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  to="/home"
                  className="text-black font-bold hover:text-coral-500 transition-colors"
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/labs"
                className="text-black font-bold hover:text-coral-500 transition-colors"
              >
                Labs
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-black font-bold hover:text-coral-500 transition-colors"
              >
                Courses
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6247] text-white hover:bg-[#FF6247]/80 transition-colors"
                  aria-label="User menu"
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg py-1 z-10">
                    {user && user.role === "student" && (
                      <Link
                        to="/student-dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="mr-2 w-4"
                        />
                        Student Dashboard
                      </Link>
                    )}
                    {user && user.role === "admin" && (
                      <Link
                        to="/admin-dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FontAwesomeIcon
                          icon={faUserShield}
                          className="mr-2 w-4"
                        />
                        Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="mr-2 w-4"
                      />
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-white font-bold bg-coral-500 px-4 py-2 rounded-md hover:bg-coral-600 transition-colors"
                >
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
