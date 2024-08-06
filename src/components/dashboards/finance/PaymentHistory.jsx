// src/dashboard/PaymentHistory.jsx
import React from 'react';

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

export default PaymentHistory;
