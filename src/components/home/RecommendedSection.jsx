import React from 'react';

const courses = [
  { id: 1, title: 'Introduction to Python', instructor: 'John Doe', image: '/images/python.jpg' },
  { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith', image: '/images/javascript.jpg' },
  { id: 3, title: 'React for Beginners', instructor: 'Bob Johnson', image: '/images/react.jpg' },
  { id: 4, title: 'Data Structures and Algorithms', instructor: 'Alice Brown', image: '/images/dsa.jpg' },
];

function RecommendedSection() {
  return (
    <section className="my-16">
      <h3 className="text-3xl font-semibold mb-8">Recommended Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
              <button className="mt-2 px-4 py-2 bg-[#F86C6B] text-white rounded-md text-sm hover:bg-[#E55A59] transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 px-8 py-4 bg-[#F86C6B] text-white rounded-lg text-base hover:bg-[#E55A59] transition-colors duration-300">
        View More Courses
      </button>
    </section>
  );
}

export default RecommendedSection;