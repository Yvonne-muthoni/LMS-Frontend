import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const ITEMS_PER_PAGE = 4;

const courses = [
    { title: 'Linux Full Course', description: 'Master Linux and self-host your apps like a pro', icon: <img src="/path-to-linux-icon.png" alt="Linux" className="w-16 h-16" />, tags: [{ name: '#linux', color: 'bg-[#FF6247] text-white' }, { name: '#pro', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Stripe for SaaS', description: 'Implement Stripe payments in your SaaS product', icon: <img src="/path-to-stripe-icon.png" alt="Stripe" className="w-16 h-16" />, tags: [{ name: '#stripe', color: 'bg-[#FF6247] text-white' }, { name: '#typescript', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Next.js Full Course', description: 'Build modern web apps with Next.js and React', icon: <img src="/path-to-nextjs-icon.png" alt="Next.js" className="w-16 h-16" />, tags: [{ name: '#react', color: 'bg-[#FF6247] text-white' }, { name: '#nextjs', color: 'bg-[#FF6247] text-white' }] },
    { title: 'SvelteKit Full Course', description: 'Create fast, efficient web apps with SvelteKit', icon: <img src="/path-to-sveltekit-icon.png" alt="SvelteKit" className="w-16 h-16" />, tags: [{ name: '#svelte', color: 'bg-[#FF6247] text-white' }, { name: '#firebase', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Python for Data Science', description: 'Learn Python programming for data science and machine learning', icon: <img src="/path-to-python-icon.png" alt="Python" className="w-16 h-16" />, tags: [{ name: '#python', color: 'bg-[#FF6247] text-white' }, { name: '#datascience', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Full-Stack JavaScript', description: 'Become a full-stack JavaScript developer', icon: <img src="/path-to-javascript-icon.png" alt="JavaScript" className="w-16 h-16" />, tags: [{ name: '#javascript', color: 'bg-[#FF6247] text-white' }, { name: '#fullstack', color: 'bg-[#FF6247] text-white' }] },
    { title: 'UI/UX Design Principles', description: 'Master the fundamentals of UI/UX design', icon: <img src="/path-to-design-icon.png" alt="Design" className="w-16 h-16" />, tags: [{ name: '#design', color: 'bg-[#FF6247] text-white' }, { name: '#uiux', color: 'bg-[#FF6247] text-white' }] },
    { title: 'AWS Cloud Practitioner', description: 'Get started with AWS and cloud computing', icon: <img src="/path-to-aws-icon.png" alt="AWS" className="w-16 h-16" />, tags: [{ name: '#aws', color: 'bg-[#FF6247] text-white' }, { name: '#cloud', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Data Structures and Algorithms', description: 'Improve your coding skills with data structures and algorithms', icon: <img src="/path-to-dsa-icon.png" alt="DSA" className="w-16 h-16" />, tags: [{ name: '#datastructures', color: 'bg-[#FF6247] text-white' }, { name: '#algorithms', color: 'bg-[#FF6247] text-white' }] },
    { title: 'Kubernetes for Developers', description: 'Learn Kubernetes and container orchestration', icon: <img src="/path-to-kubernetes-icon.png" alt="Kubernetes" className="w-16 h-16" />, tags: [{ name: '#kubernetes', color: 'bg-[#FF6247] text-white' }, { name: '#devops', color: 'bg-[#FF6247] text-white' }] },
  ];

const CoursesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(courses.length / ITEMS_PER_PAGE);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedCourses = courses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderPageNumbers = () => {
    return Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold transition-colors duration-200 ${
          currentPage === page
            ? 'bg-[#FF6247] text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {paginatedCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-3 mt-8">
        <button
          onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#FF6247] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageClick(Math.min(pageCount, currentPage + 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#FF6247] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={currentPage === pageCount}
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CoursesList;
