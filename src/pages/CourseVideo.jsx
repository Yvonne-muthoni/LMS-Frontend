import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Spinner, VStack } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import TechStack from '../components/course/TechStack';
import LearningOutcomes from '../components/course/LearningOutcomes';

const CourseVideo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/courses/${courseId}`); // Adjust URL based on your backend
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Spinner size="xl" />
    </Box>
  );

  if (error) return <Box textAlign="center" padding={4}>Error: {error}</Box>;
  if (!courseData) return <Box textAlign="center" padding={4}>No course data available</Box>;

  return (
    <Box maxWidth="6xl" margin="auto" padding={6}>
      <Button colorScheme="red" variant="link" marginBottom={6} fontSize="lg" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Box bg="gray.200" borderRadius="lg" overflow="hidden" marginBottom={6}>
        {courseData.videoUrl && (
          <video controls width="100%" height="auto" style={{ maxHeight: '70vh' }}>
            <source src={courseData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Box>

      <Box marginBottom={8}>
        <Heading as="h1" size="2xl" marginBottom={4}>{courseData.title || 'Intro'}</Heading>
        <Button colorScheme="red" size="lg">
          Mark as Complete
        </Button>
      </Box>

      <VStack spacing={8} align="stretch">
        <TechStack techStack={courseData.techStack} />
        <LearningOutcomes outcomes={courseData.learningOutcomes} />
      </VStack>
    </Box>
  );
};

export default CourseVideo;
