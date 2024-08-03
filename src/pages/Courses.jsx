// pages/Courses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoursesList from '../components/course/CoursesList';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/courses');
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('An error occurred while fetching courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          Courses
        </h1>
        <p className="text-gray-600 text-center mb-16 text-lg font-medium">
          Challenging multi-step experiences with quizzes and progress-tracking
        </p>
        <CoursesList courses={courses} />
      </div>
    </div>
  );
};

export default Courses;