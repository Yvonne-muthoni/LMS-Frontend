import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid'; // Import Heroicons

const InstructorsList = () => {
  const instructors = [
    { name: 'Eng Mustafe', description: 'Experienced Backend Developer with expertise in building scalable server-side applications and managing databases.' },
    { name: 'Eng Imran', description: 'Seasoned Backend Developer skilled in creating efficient APIs and handling server infrastructure.' },
    { name: 'Eng Iqra', description: 'Frontend Developer with a strong background in creating responsive and visually appealing user interfaces using modern frameworks.' },
    { name: 'Eng Victor', description: 'Full-stack Developer focused on frontend, creating dynamic interfaces and seamless user experiences.' },
    { name: 'Eng Yvone', description: 'Frontend Developer specializing in crafting user-friendly interfaces and enhancing user experiences through innovative design.' },
    { name: 'Eng Najib', description: 'UX/UI Designer focused on improving user interaction through thoughtful design and usability principles.' },
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
