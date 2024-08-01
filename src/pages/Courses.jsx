// src/pages/Courses.js
import React from 'react';
import CoursesList from '../components/course/CoursesList';

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          Courses
        </h1>
        <p className="text-gray-600 text-center mb-16 text-lg font-medium ">
        challenging multi-step experiences with quizzes and progress-tracking
        </p>
        <CoursesList />
      </div>
    </div>
  );
};

export default Courses;
