
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ITEMS_PER_PAGE = 4;

const CoursesList = () => {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/courses'); // Adjust this URL to your API endpoint
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

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
                {paginatedCourses.map((course) => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        url={course.url}
                        icon={<img src="/path-to-default-icon.png" alt="Course Icon" className="w-16 h-16" />}
                    />
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
