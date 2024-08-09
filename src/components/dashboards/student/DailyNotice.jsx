import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const DailyNotice = () => (
  <section className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Daily Notice</h2>
    <p className="text-gray-600 mb-4">Prelim payment due</p>
    <p className="text-gray-600 mb-6">Always stay updated in your student portal</p>
    <a href="#" className="text-primary hover:text-primary-dark font-medium flex items-center">
      See all notices <FaAngleRight className="ml-2" />
    </a>
  </section>
);

export default DailyNotice;
