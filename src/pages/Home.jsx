import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RecommendedSection from '../components/home/RecommendedSection';
import LabsSection from '../components/home/LabsSection';
import { useAuth } from '../contexts/AuthContext';
import '../index.css';

function Home() {
  const { username, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // You might want to redirect to login page or show a different message
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-custom">
          <h2 className="text-5xl font-semibold text-gray-900">Hi, {username} 👋</h2>
        </div>
      </header>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <RecommendedSection />
        <LabsSection />
      </main>
    </div>
  );
}

export default Home;