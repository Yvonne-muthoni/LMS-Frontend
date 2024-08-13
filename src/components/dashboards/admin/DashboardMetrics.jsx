

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardMetrics = () => {
  const [activeCourses, setActiveCourses] = useState(0);
  const [revenue, setRevenue] = useState('$0.00');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActiveCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/courses/count');
        setActiveCourses(response.data.count);
      } catch (error) {
        console.error('Error fetching active courses:', error);
        setError('An error occurred while fetching the number of active courses.');
      }
    };

    const fetchPaymentSummary = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/payment-summary');
        if (!response.ok) {
          throw new Error('Failed to fetch payment summary');
        }
        const data = await response.json();
        setRevenue(`ksh ${data.total_paid}`);
      } catch (error) {
        setError('Failed to fetch payment summary');
        console.error('Error fetching payment summary:', error);
      }
    };

   
    const fetchData = async () => {
      setLoading(true);
      await fetchActiveCourses();
      await fetchPaymentSummary();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#E8F5E9] p-6 rounded-lg shadow-md"> 
          <h3 className="text-lg font-medium text-[#4CAF50]">Active Users</h3> 
          <p className="text-2xl font-bold text-[#2E7D32]">{loading ? 'Loading...' : error ? <span className="text-red-500">{error}</span> : '4'}</p> 
        </div>
        <div className="bg-[#E8F5E9] p-6 rounded-lg shadow-md"> 
          <h3 className="text-lg font-medium text-[#4CAF50]">Active Courses</h3> 
          <p className="text-2xl font-bold text-[#2E7D32]">{loading ? 'Loading...' : error ? <span className="text-red-500">{error}</span> : activeCourses}</p> 
        </div>
        <div className="bg-[#E8F5E9] p-6 rounded-lg shadow-md"> 
          <h3 className="text-lg font-medium text-[#4CAF50]">Revenue</h3> 
          <p className="text-2xl font-bold text-[#2E7D32]">{loading ? 'Loading...' : error ? <span className="text-red-500">{error}</span> : revenue}</p> 
        </div>
      </div>
    </section>
  );
};

export default DashboardMetrics;
