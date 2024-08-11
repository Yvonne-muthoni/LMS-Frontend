import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TutorialCard from "./TutorialCard";

const TutorialCards = () => {
  const [tutorials, setTutorials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courses");
        const courses = response.data.courses;
        if (Array.isArray(courses)) {
          setTutorials(courses);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching tutorials:", error);
        setError("Failed to fetch tutorials");
      }
    };

    fetchTutorials();
  }, []);

  // Limit the displayed tutorials to the first 3
  const displayedTutorials = tutorials.slice(0, 3);

  return (
    <section className="py-16 bg-[#FF6247]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">
          Tutorials That Actually Help
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-12 text-center max-w-7xl mx-auto">
          Our tutorials are designed to give you practical, hands-on experience.
        </p>
        {error && <p className="text-center text-red-500 mb-8">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTutorials.length > 0 ? (
            displayedTutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                url={tutorial.video}
                techStack={tutorial.tech_stack} // Pass tech stack
              />
            ))
          ) : (
            <p className="text-center text-white">No tutorials available</p>
          )}
        </div>
      </div>
    </section>
  );
};

TutorialCards.propTypes = {
  tutorials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      video: PropTypes.string,
      tech_stack: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default TutorialCards;
