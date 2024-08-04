import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Ensure Link is imported

function RecommendedSection() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/courses'); // Adjust URL based on your backend
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const extractVideoId = (url) => {
    if (!url) return ''; // Handle undefined or null URL
    const match = url.match(/youtube\.com\/.*v=([^&]*)|youtu\.be\/([^?]*)/);
    return match ? (match[1] || match[2]) : '';
  };

  const handleCardClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  // Limit to the first 4 courses
  const displayedCourses = courses.slice(0, 4);

  return (
    <section className="my-16">
      <h3 className="text-3xl font-semibold mb-8">Recommended Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedCourses.map((course) => {
          const videoId = extractVideoId(course.videoUrl);
          const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/default-thumbnail.jpg';

          return (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(course.id)}
            >
              <img src={thumbnailUrl} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/courses" className="mt-8 inline-block px-8 py-4 bg-[#F86C6B] text-white rounded-lg text-base hover:bg-[#E55A59] transition-colors duration-300">
        View More Courses
      </Link>
    </section>
  );
}

export default RecommendedSection;
