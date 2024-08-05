import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { Spinner, Alert, Box, Flex, Grid } from '@chakra-ui/react';

const ITEMS_PER_PAGE = 4;

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:5001/courses');
        setCourses(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching courses');
      } finally {
        setLoading(false);
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

  if (loading) return (
    <Flex justify="center" align="center" height="100vh">
      <Spinner size="xl" />
    </Flex>
  );

  if (error) return (
    <Alert status="error" mb={4}>
      <AlertIcon />
      <Box>
        <AlertTitle>Error fetching courses</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Box>
    </Alert>
  );

  if (courses.length === 0) return (
    <Box textAlign="center" p={4}>
      No courses available.
    </Box>
  );

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} mb={12}>
        {paginatedCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            tags={course.tags}
          />
        ))}
      </Grid>
      <Flex justify="center" align="center" mt={8}>
        <button
          onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#FF6247] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={currentPage === 1}
        >
          <FaChevronLeft size={24} />
          <span className="sr-only">Previous</span>
        </button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
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
        ))}
        <button
          onClick={() => handlePageClick(Math.min(pageCount, currentPage + 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#FF6247] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={currentPage === pageCount}
        >
          <FaChevronRight size={24} />
          <span className="sr-only">Next</span>
        </button>
      </Flex>
    </Box>
  );
};

export default CoursesList;
