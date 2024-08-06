// src/dashboard/Finance.jsx
import React from 'react';
import SubscriptionPlans from '../../components/dashboards/finance/SubscriptionPlans';
import CurrentSubscription from '../../components/dashboards/finance/CurrentSubscription';
import PaymentHistory from '../../components/dashboards/finance/PaymentHistory';

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
