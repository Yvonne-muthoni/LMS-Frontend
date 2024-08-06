import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RecommendedSection() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // Use navigate from useNavigate hook

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5001/courses'); // Adjust URL based on your backend
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleCardClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="my-16">
      <h3 className="text-3xl font-semibold mb-10 text-center">Recommended Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ width: '100%', maxWidth: '350px' }}
              onClick={() => handleCardClick(course.id)}
            >
              {/* Thumbnail */}
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <img
                  src={course.image} // Use the image property from the course data
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col">
                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 mb-2 truncate">{course.title}</h4>
                {/* Description */}
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                {/* Tags */}
                {course.techStack && course.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {course.techStack.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#FF6247] text-white text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <Link to="/courses" className="inline-block px-6 py-3 bg-[#F86C6B] text-white rounded-lg text-base hover:bg-[#E55A59] transition-colors duration-300">
          View More Courses
        </Link>
      </div>
    </section>
  );
}

export default RecommendedSection;
