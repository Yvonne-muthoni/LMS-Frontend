import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


function RecommendedSection({ courses, searchTerm }) {
  const navigate = useNavigate();

  const handleCardClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.techStack.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="my-16">
      <h3 className="text-3xl font-semibold mb-10 text-center">
        {searchTerm ? `Search Results for "${searchTerm}"` : "Recommended Courses"}
      </h3>
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{ width: '100%', maxWidth: '350px' }}
              onClick={() => handleCardClick(course.id)}
            >
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 truncate">{course.title}</h4>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
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
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No courses found matching "{searchTerm}". Please try a different search term.
        </p>
      )}
      {!searchTerm && (
        <div className="text-center mt-8">
          <Link to="/courses" className="inline-block px-6 py-3 bg-[#F86C6B] text-white rounded-lg text-base hover:bg-[#E55A59] transition-colors duration-300">
            View More Courses
          </Link>
        </div>
      )}
    </section>
  );
}

export default RecommendedSection;