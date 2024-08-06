// src/dashboard/CurrentSubscription.jsx
import React from 'react';

const CurrentSubscription = () => {
  // Example data, replace with actual data fetching logic
  const currentPlan = {
    name: 'Standard Plan',
    expiry: '2024-12-31',
    renewalPrice: '$20/month',
  };

  return (
    <section className="mt-4">
      <h2 className="text-xl font-semibold">Current Subscription</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-2">
        <h3 className="text-lg font-semibold">Plan: {currentPlan.name}</h3>
        <p>Expiry Date: {currentPlan.expiry}</p>
        <p>Renewal Price: {currentPlan.renewalPrice}</p>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700">Renew Subscription</button>
      </div>
    </section>
  );
};

export default CurrentSubscription;
