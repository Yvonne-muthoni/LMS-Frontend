import React from 'react';

const labs = [
  { id: 1, title: 'Web Development', image: '/images/web-dev.jpg' },
  { id: 2, title: 'Data Science', image: '/images/data-science.jpg' },
  { id: 3, title: 'Machine Learning', image: '/images/machine-learning.jpg' },
  { id: 4, title: 'Mobile App Development', image: '/images/mobile-app.jpg' },
];

function LabsSection() {
  return (
    <section className="my-16">
      <h3 className="text-3xl font-semibold mb-8">Labs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {labs.map((lab) => (
          <div key={lab.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={lab.image} alt={lab.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{lab.title}</h4>
              <button className="mt-2 px-4 py-2 bg-[#F86C6B] text-white rounded-md text-sm hover:bg-[#E55A59] transition-colors duration-300">
                Start Lab
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 px-8 py-4 bg-[#F86C6B] text-white rounded-lg text-base hover:bg-[#E55A59] transition-colors duration-300">
        View More Labs
      </button>
    </section>
  );
}

export default LabsSection;