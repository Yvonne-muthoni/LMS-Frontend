import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LoginModal from '../common/LoginModal'; // Import LoginModal from common
import { useAuth } from '../../contexts/AuthContext'; // Import the AuthContext

const ITEMS_PER_PAGE = 4;

const CoursesList = () => {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const { isAuthenticated } = useAuth(); // Check if the user is authenticated

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                console.log('Fetching courses...');
                setLoading(true);
                const response = await axios.get('http://127.0.0.1:5000/courses');
                console.log('API response:', response);
                console.log('Response data:', response.data);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError(error.message || 'An error occurred while fetching courses');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    useEffect(() => {
        console.log('Courses state updated:', courses);
    }, [courses]);

    const pageCount = Math.ceil(courses.length / ITEMS_PER_PAGE);

    const handlePageClick = (page) => {
        console.log('Changing to page:', page);
        setCurrentPage(page);
    };

    const paginatedCourses = courses.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    console.log('Paginated courses:', paginatedCourses);

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

    const handleCourseCardClick = () => {
        if (!isAuthenticated) {
            setShowModal(true);
        } else {
            // Navigate to course details or perform the action for authenticated users
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (courses.length === 0) {
        return <div>No courses available.</div>;
    }

    return (
        <div>
            {showModal && (
                <LoginModal
                    onClose={() => setShowModal(false)}
                    onLogin={() => {
                        setShowModal(false);
                        // Handle login action if needed
                    }}
                    onSignUp={() => {
                        setShowModal(false);
                        // Handle sign-up action if needed
                    }}
                />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {paginatedCourses.map((course) => (
                    <div
                        key={course.id}
                        onClick={handleCourseCardClick}
                    >
                        <CourseCard
                            title={course.title}
                            description={course.description}
                            url={course.url}
                        />
                    </div>
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
