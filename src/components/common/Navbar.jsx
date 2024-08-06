import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          SkillQuest 🧠
        </Link>
        <button
          className="block lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <Link
                to="/subscription"
                className="text-coral-500 font-bold border-2 border-coral-500 px-2 py-0.5 rounded-md hover:bg-coral-500 hover:text-white transition-colors"
              >
                PRO
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-black font-bold hover:text-coral-500 transition-colors"
              >
                Home
              </Link>
            </li>
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
              <li>
                <button
                  onClick={logout}
                  className="text-white font-bold bg-coral-500 px-4 py-2 rounded-md hover:bg-coral-600 transition-colors"
                  aria-label="Logout"
                >
                  Logout
                </button>
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
