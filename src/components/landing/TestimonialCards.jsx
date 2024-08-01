import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const sectionTop = document.querySelector('.testimonial-section').offsetTop;

      if (scrollTop + clientHeight > sectionTop + 150) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    { name: 'John Doe', comment: 'This course changed my life!' },
    { name: 'Jane Smith', comment: 'I\'m now confident in my coding skills.' },
    { name: 'Bob Johnson', comment: 'The tutorials are easy to follow and very effective.' },
    { name: 'Alice Brown', comment: 'I landed my dream job thanks to SkillQuest!' },
    { name: 'Charlie Davis', comment: 'The community support is amazing.' },
    { name: 'Eva Wilson', comment: 'I\'ve tried many platforms, but this is the best by far.' },
    { name: 'Michael Lee', comment: 'The practical projects are fantastic!' },
    { name: 'Sophie Green', comment: 'Exceptional course quality and support.' },
    { name: 'Oliver White', comment: 'My skills improved drastically after these tutorials.' },
  ];

  return (
    <section className="py-16 testimonial-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#FF6247]">
          What Our Students Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialCards;
