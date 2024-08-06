import React from 'react';

const DashboardMetrics = () => (
  <section className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-blue-700">Active Users</h3>
        <p className="text-xl font-bold">1,234</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-green-700">Active Courses</h3>
        <p className="text-xl font-bold">123</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-yellow-700">Revenue</h3>
        <p className="text-xl font-bold">$50,000</p>
      </div>
    </div>
  </section>
);

export default DashboardMetrics;
