import React from 'react';

const InstructorsList = () => {
  const instructors = [
    { name: 'John Doe', description: 'Specializes in Front-end Development with expertise in React and JavaScript.' },
    { name: 'Jane Smith', description: 'Expert in Backend Development with a focus on Node.js and databases.' },
    { name: 'Alex Johnson', description: 'Full-stack developer with experience in both front-end and back-end technologies.' },
    { name: 'Emily Davis', description: 'UI/UX designer with a passion for creating intuitive and engaging user experiences.' },
  ];

  return (
    <ul className="list-disc pl-5 mt-2">
      {instructors.map((instructor, index) => (
        <li key={index}>
          <h3 className="font-semibold">{instructor.name}</h3>
          <p>{instructor.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default InstructorsList