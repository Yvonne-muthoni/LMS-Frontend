import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CourseCard = ({
  id,
  title,
  description,
  image,
  tags,
  techStack,
  onDelete,
  index,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate(`/courses/${id}`);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      await axios.delete(`http://127.0.0.1:5000/courses/${id}`);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const displayTags = tags?.slice(0, 3) || [];
  const displayTechStack = techStack?.slice(0, 3) || [];

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 flex flex-col cursor-pointer relative"
          style={{ height: "450px", width: "300px" }}
          onClick={handleClick}
        >
          {loading ? (
            <div className="relative h-[45%] w-full bg-gray-200 animate-pulse" />
          ) : (
            <div className="relative h-[45%] w-full">
              <img
                src={image || "/default-thumbnail.jpg"}
                alt={`${title} thumbnail`}
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
              />
            </div>
          )}

          <div className="p-6 flex flex-col flex-grow">
            {loading ? (
              <>
                <div
                  className="h-5 bg-gray-200 rounded mb-2 animate-pulse"
                  style={{ width: "80%" }}
                />
                <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="flex mt-2 space-x-2">
                  <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-12 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm flex-grow overflow-hidden">
                  {description}
                </p>
                {displayTags.length > 0 && (
                  <div className="mt-2 flex flex-wrap">
                    {displayTags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-coral-500 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {displayTechStack.length > 0 && (
                  <div className="mt-2 flex flex-wrap">
                    {displayTechStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block text-white bg-[#FF6247] text-xs px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  onClick={handleDelete}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete Course
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

const CourseAdministration = ({ addActivity }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/courses");
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(
          "An error occurred while fetching courses. Please try again later."
        );
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
    addActivity(`Course with ID "${id}" was deleted.`);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCourses = Array.from(courses);
    const [movedCourse] = reorderedCourses.splice(result.source.index, 1);
    reorderedCourses.splice(result.destination.index, 0, movedCourse);

    setCourses(reorderedCourses);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Admin Course Management System
      </h2>
      <h1>
        View Course: Browse through the list of courses & DELETE SPECIFIC
        COURSE.
      </h1>
      <h1>Click to check: Completed courses (By Students).</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="courses">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
            >
              {courses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.name || course.title}
                  description={course.description}
                  image={course.image}
                  tags={course.tags}
                  techStack={course.techStack}
                  onDelete={handleDeleteCourse}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default CourseAdministration;
