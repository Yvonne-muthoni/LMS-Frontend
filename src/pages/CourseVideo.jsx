import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseVideo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/courses/${courseId}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError('An error occurred while fetching the course. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return <div className="text-center mt-8">Loading course...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (!course) {
    return <div className="text-center mt-8">Course not found.</div>;
  }

  const videoId = new URL(course.url).searchParams.get('v');
  if (!videoId) {
    return <div className="text-center mt-8">Invalid video URL.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <button 
        onClick={() => navigate('/courses')}
        className="mb-4 text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← Back to Courses
      </button>
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={course.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="text-gray-700">{course.description}</p>
    </div>
  );
};

export default CourseVideo;