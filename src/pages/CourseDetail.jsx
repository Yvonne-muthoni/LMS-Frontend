import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { courseId } = useParams();
  


  return (
    <div>
      <h1>Course Details for {courseId}</h1>

    </div>
  );
}

export default CourseDetail;
