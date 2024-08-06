import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TutorialCard from './TutorialCard';

function TutorialCards() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/courses'); 
        setTutorials(response.data);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    };

    fetchTutorials();
  }, []);

  const displayedTutorials = tutorials.slice(13,16);

  return (
    <section className="py-16 bg-[#FF6247]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 text-center text-white">
          Tutorials That Actually Help
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-12 text-center max-w-7xl mx-auto">
          Our tutorials are designed to give you practical, hands-on experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTutorials.map((tutorial) => (
            <TutorialCard
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              url={tutorial.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TutorialCards;