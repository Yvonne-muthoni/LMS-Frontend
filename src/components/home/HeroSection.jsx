import React, { useState } from 'react';

function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="bg-gradient-to-r from-[#FF6247] to-[#FF8C7A] py-20 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Start your learning</span>
            <span className="block text-[#FFF0ED]">journey today</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-[#FFF0ED] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover courses, expand your skills, and unlock your potential with our cutting-edge learning platform.
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full py-3 px-4 pr-12 text-gray-900 placeholder-gray-500 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;