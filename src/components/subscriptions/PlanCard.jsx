import React from "react";

const PlanCard = ({ plan, isYearly, calculatePrice }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-start">
      <h2 className="text-xl font-semibold mb-2 text-center sm:text-left">
        {plan.name}
      </h2>
      <p className="text-2xl sm:text-4xl font-bold mb-2 text-center sm:text-left">
        ${calculatePrice(plan.price).toLocaleString()}
        <span className="text-sm sm:text-base">
          /{isYearly ? "year" : "month"}
        </span>
      </p>
      <p className="text-gray-700 mb-4 text-center sm:text-left">
        {plan.description.split(" ").slice(0, 7).join(" ")}
        <br />
        {plan.description.split(" ").slice(7).join(" ")}
      </p>
      <button className="bg-coral-500 text-white py-2 px-4 rounded-md hover:bg-coral-600 transition duration-300 mb-6 w-full">
        Select {plan.name}
      </button>
      <hr className="w-full border-t border-gray-200 mb-4" />
      <ul className="text-gray-700">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            ✔ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
