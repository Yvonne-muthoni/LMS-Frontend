// WelcomeSection.js
import React from 'react';
import welcome from '../../assets/images/welcome.jpg';

function WelcomeSection() {
  return (
    <div className="w-1/2 pr-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-900">
        Welcome to<br />SkillQuest<br />Learning Platform
      </h1>
      <img src={welcome} alt="Learning illustration" className="w-full" />
    </div>
  );
}

export default WelcomeSection;
