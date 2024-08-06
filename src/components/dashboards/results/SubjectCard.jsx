// src/dashboard/SubjectCard.jsx
import React from 'react';

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-2">
      <h3 className="text-lg font-semibold">{subject.name}</h3>
      <p>Grade: <span className="font-bold">{subject.grade}</span></p>
      <details className="mt-2">
        <summary className="cursor-pointer text-blue-500 hover:underline">View Details</summary>
        <p>{subject.details}</p>
      </details>
    </div>
  );
};

export default SubjectCard;
