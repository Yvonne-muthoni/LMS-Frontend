import React from 'react';

const EnrolledCourses = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-purple-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-purple-700">Object Oriented Programming</h3>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
      <div className="bg-purple-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-purple-700">Fundamentals of Database Systems</h3>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
    </div>
    <a href="#" className="text-blue-500 hover:underline">See all</a>
  </section>
);

export default EnrolledCourses;
