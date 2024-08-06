// src/components/Instructors.jsx
import React from 'react';

const Instructors = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-teal-500 text-white p-4 rounded">
        <h1 className="text-2xl">Instructors</h1>
      </header>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Meet Our Instructors</h2>
        <p className="mt-2">Learn more about our experienced instructors who will guide you through your web development journey.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <h3 className="font-semibold">John Doe</h3>
            <p>Specializes in Front-end Development with expertise in React and JavaScript.</p>
          </li>
          <li>
            <h3 className="font-semibold">Jane Smith</h3>
            <p>Expert in Backend Development with a focus on Node.js and databases.</p>
          </li>
          <li>
            <h3 className="font-semibold">Alex Johnson</h3>
            <p>Full-stack developer with experience in both front-end and back-end technologies.</p>
          </li>
          <li>
            <h3 className="font-semibold">Emily Davis</h3>
            <p>UI/UX designer with a passion for creating intuitive and engaging user experiences.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Instructors;
