// src/dashboard/Results.jsx
import React, { useState } from 'react';
import SemesterSelector from '../../components/dashboards/results/SemesterSelector';
import SubjectCard from '../../components/dashboards/results/SubjectCard';

const resultsData = [
  {
    semester: 'Fall 2023',
    subjects: [
      { name: 'Object Oriented Programming', grade: 'A', details: '90% (Midterm: 45%, Final: 45%)' },
      { name: 'Fundamentals of Database Systems', grade: 'B+', details: '85% (Midterm: 40%, Final: 45%)' },
    ],
  },
  {
    semester: 'Spring 2023',
    subjects: [
      { name: 'Web Development', grade: 'A-', details: '88% (Midterm: 43%, Final: 45%)' },
      { name: 'Data Structures', grade: 'B', details: '82% (Midterm: 40%, Final: 42%)' },
    ],
  },
];

const Results = () => {
  const [selectedSemester, setSelectedSemester] = useState(resultsData[0].semester);

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const renderResults = () => {
    const semesterData = resultsData.find((sem) => sem.semester === selectedSemester);
    return semesterData ? (
      semesterData.subjects.map((subject, index) => (
        <SubjectCard key={index} subject={subject} />
      ))
    ) : (
      <p>No results available for this semester.</p>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-purple-500 text-white p-4 rounded">
        <h1 className="text-2xl">Results</h1>
      </header>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">View Your Results</h2>
        <p className="mt-2">Check your exam results, grades, and academic progress here.</p>
        <SemesterSelector
          semesters={resultsData}
          selectedSemester={selectedSemester}
          onSemesterChange={handleSemesterChange}
        />
        <div className="mt-4">
          {renderResults()}
        </div>
      </section>
    </div>
  );
};

export default Results;
