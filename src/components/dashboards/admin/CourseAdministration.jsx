import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CourseAdministration = ({ addActivity }) => {
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { name: courseName, description: courseDescription };
    setCourses([newCourse, ...courses]);
    addActivity(`Course "${courseName}" was added.`);
    setCourseName('');
    setCourseDescription('');
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    addActivity(`Course "${courses[index].name}" was deleted.`);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Course Management</h2>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="bg-[#FF6247] text-white px-4 py-2 rounded hover:bg-[#FF3E3E] transition"
      >
        {showForm ? 'Hide Form' : 'Add New Course'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700">Course Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter course name" 
              value={courseName} 
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Course Description</label>
            <textarea 
              className="w-full border border-gray-300 p-2 rounded" 
              placeholder="Enter course description" 
              value={courseDescription} 
              onChange={(e) => setCourseDescription(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="bg-[#FF6247] text-white px-4 py-2 rounded hover:bg-[#FF3E3E] transition"
          >
            Submit
          </button>
        </form>
      )}
      {courses.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Course List</h3>
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                <div>
                  <h4 className="font-medium">{course.name}</h4>
                  <p>{course.description}</p>
                </div>
                <button 
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CourseAdministration;
