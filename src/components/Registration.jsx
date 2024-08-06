// src/components/Registration.jsx
import React from 'react';

const Registration = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-yellow-500 text-white p-4 rounded">
        <h1 className="text-2xl">Registration</h1>
      </header>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Sign Up for a New Course</h2>
        <p className="mt-2">Fill out the form below to register for a new course.</p>
        <form className="mt-4">
          <label className="block mb-2">
            Full Name:
            <input type="text" className="block w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>
          <label className="block mb-2">
            Email:
            <input type="email" className="block w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>
          <label className="block mb-2">
            Course:
            <select className="block w-full mt-1 p-2 border border-gray-300 rounded">
              <option>Web Development Fundamentals</option>
              <option>Front-end Development with React</option>
              <option>Backend Development with Node.js</option>
              <option>Full-Stack Web Development</option>
            </select>
          </label>
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
      </section>
    </div>
  );
};

export default Registration;
