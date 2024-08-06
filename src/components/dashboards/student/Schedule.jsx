import React from 'react';

const Schedule = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Schedule</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-red-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-red-700">Exam Schedule</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <a href="#" className="text-blue-500 hover:underline">View</a>
      </div>
    </div>
    <a href="#" className="text-blue-500 hover:underline">See more</a>
  </section>
);

export default Schedule;
