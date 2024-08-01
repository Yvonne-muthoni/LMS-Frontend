import React from 'react';
import { Link } from 'react-router-dom';

function TutorialCard({ title, description, tags, isNew, imageUrl, courseId }) {
  return (
    <Link
      to={`/courses/${courseId}`} 
      className="block bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <span className="absolute top-2 right-2 bg-[#FF6247] text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#FF6247] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#FF6247] bg-opacity-10 text-[#FF6247] text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default TutorialCard;
