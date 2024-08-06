import React from 'react';

const DashboardMetrics = () => (
  <section className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Metrics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#FF6247]">Active Users</h3>
        <p className="text-2xl font-bold">1,234</p>
      </div>
      <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#FF6247]">Active Courses</h3>
        <p className="text-2xl font-bold">123</p>
      </div>
      <div className="bg-[#FFE4D9] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#FF6247]">Revenue</h3>
        <p className="text-2xl font-bold">$50,000</p>
      </div>
    </div>
  </section>
);

export default DashboardMetrics;
