// pages/Labs.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/labs/SearchBar';
import CategoryGrid from '../../components/labs/CategoryGrid';

function Labs() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="text-blue-600 hover:text-blue-800 transition-colors mr-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-4xl font-bold text-gray-800">LABS</h1>
        </div>
        <p className="text-xl text-gray-600 mb-8 text-center">Test Your Knowledge with Quizzes</p>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Categories</h2>
        <CategoryGrid searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Labs;