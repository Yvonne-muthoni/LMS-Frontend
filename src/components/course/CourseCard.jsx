import React from 'react';

const CourseCard = ({ title, description, tags, icon }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100 flex flex-col" style={{ height: '400px', width: '300px' }}>
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-center flex-grow">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-[#FF6247] text-white font-semibold">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
