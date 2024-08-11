import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardMetrics = () => {
  const [activeCourses, setActiveCourses] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the number of active courses
    const fetchActiveCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/courses/count");
        setActiveCourses(response.data.count); // Adjust according to the response format
        setLoading(false);
      } catch (error) {
        console.error("Error fetching active courses:", error);
        setError(
          "An error occurred while fetching the number of active courses."
        );
        setLoading(false);
      }
    };

    fetchActiveCourses();
  }, []);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-[#2B8F4C]">Active Users</h3>
          <p className="text-2xl font-bold">4</p>
        </div>
        <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-[#2B8F4C]">Active Courses</h3>
          {loading ? (
            <p className="text-2xl font-bold">Loading...</p>
          ) : error ? (
            <p className="text-2xl font-bold text-red-500">{error}</p>
          ) : (
            <p className="text-2xl font-bold">{activeCourses}</p>
          )}
        </div>
        <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-[#FF6247]">Revenue</h3>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardMetrics;
