import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const EnrolledCourses = () => (
  <section className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Enrolled Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-[#FFF2F1] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Object Oriented Programming</h3>
        <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center">
          View details <FaAngleRight className="ml-2" />
        </a>
      </div>
      <div className="bg-[#FFF2F1] p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fundamentals of Database Systems</h3>
        <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center">
          View details <FaAngleRight className="ml-2" />
        </a>
      </div>
    </div>
    <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center">
      See all courses <FaAngleRight className="ml-2" />
    </a>
  </section>
);

export default EnrolledCourses;
