import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const InstructorsList = () => {
  const instructors = [
    { name: 'John Doe', description: 'Specializes in Front-end Development with expertise in React and JavaScript.' },
    { name: 'Jane Smith', description: 'Expert in Backend Development with a focus on Node.js and databases.' },
    { name: 'Alex Johnson', description: 'Full-stack developer with experience in both front-end and back-end technologies.' },
    { name: 'Emily Davis', description: 'UI/UX designer with a passion for creating intuitive and engaging user experiences.' },
  ];

  return (
    <ul className="space-y-4 mt-4">
      {instructors.map((instructor, index) => (
        <li key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center">
          <UserIcon className="h-8 w-8 text-[#FF6247] mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-[#FF6247]">{instructor.name}</h3>
            <p className="text-gray-700">{instructor.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InstructorsList;
