// src/components/Finance.jsx
import React from 'react';

const SubscriptionPlans = () => {
  const plans = [
    { name: 'Basic Plan', price: '$10/month', features: ['Access to basic courses', 'Monthly webinars'] },
    { name: 'Standard Plan', price: '$20/month', features: ['Access to all courses', 'Weekly webinars', 'Priority support'] },
    { name: 'Premium Plan', price: '$30/month', features: ['All Standard Plan features', '1-on-1 mentorship', 'Exclusive content'] },
  ];

  return (
    <section className="mt-4">
      <h2 className="text-xl font-semibold">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul className="mt-2 space-y-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
};

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

const PaymentHistory = () => {
  // Example data, replace with actual data fetching logic
  const payments = [
    { date: '2024-08-01', amount: '$20', description: 'Standard Plan - Monthly Renewal' },
    { date: '2024-07-01', amount: '$20', description: 'Standard Plan - Monthly Renewal' },
    { date: '2024-06-01', amount: '$20', description: 'Standard Plan - Monthly Renewal' },
  ];

  return (
    <section className="mt-4">
      <h2 className="text-xl font-semibold">Payment History</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-2">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className="py-2">{payment.date}</td>
                <td className="py-2">{payment.amount}</td>
                <td className="py-2">{payment.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Finance = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-gray-500 text-white p-4 rounded">
        <h1 className="text-2xl">Finance</h1>
      </header>
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Manage Your Finances</h2>
        <p className="mt-2">Track your course payments, view invoices, and manage subscriptions here.</p>
      </section>
      <SubscriptionPlans />
      <CurrentSubscription />
      <PaymentHistory />
    </div>
  );
};

export default Finance;
