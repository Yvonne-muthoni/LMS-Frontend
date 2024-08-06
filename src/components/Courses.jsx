// src/components/Courses.jsx
import React from 'react';

const Courses = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-indigo-500 text-white p-4 rounded">
        <h1 className="text-2xl">Courses</h1>
      </header>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Available Courses</h2>
        <p className="mt-2">Browse through our range of courses designed to enhance your web development skills.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Web Development Fundamentals</li>
          <li>Front-end Development with React</li>
          <li>Backend Development with Node.js</li>
          <li>Full-Stack Web Development</li>
        </ul>
      </section>
    </div>
  );
};

export default Courses
