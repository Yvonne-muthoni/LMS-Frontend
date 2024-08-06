import React from "react";

const ToggleSwitch = ({ isYearly, togglePlan }) => {
  return (
    <div className="flex items-center mb-6">
      <span className="mr-2 text-sm md:text-base">Monthly</span>
      <div
        onClick={togglePlan}
        className={`cursor-pointer p-1 w-10 h-6 rounded-full flex items-center ${
          isYearly ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
            isYearly ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
      <span className="ml-2 text-sm md:text-base">Yearly</span>
    </div>
  );
};

export default ToggleSwitch;
