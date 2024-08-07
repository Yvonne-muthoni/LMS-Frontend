import React from 'react';

const KeyMetrics = () => (
  <section className="bg-white rounded-lg shadow-md p-8">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Payment Summary</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#FFE8E7] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#FF6247] mb-2">Total Payable</h3>
        <p className="text-3xl font-bold text-[#FF6247]">$10,000</p>
      </div>
      <div className="bg-[#E8FFE8] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#4CAF50] mb-2">Total Paid</h3>
        <p className="text-3xl font-bold text-[#4CAF50]">$5,000</p>
      </div>
      <div className="bg-[#FFF7E8] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-[#FFB74D] mb-2">Other Fees</h3>
        <p className="text-3xl font-bold text-[#FFB74D]">$300</p>
      </div>
    </div>
  </section>
);

export default KeyMetrics;
