import React, { useState } from "react";

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Lite",
      price: 7,
      description:
        "Just using this for yourself? Lite is the way to go for the lite platform.",
      features: [
        "Unlimited access to PRO courses",
        "Quizzes with hand-picked meme prizes",
        "30-day moneyback guarantee",
      ],
    },
    {
      name: "Pro",
      price: 19,
      description:
        "Want to go beyond the basics? Pro offers advanced features for serious users.",
      features: [
        "All PRO-tier benefits",
        "Invite to private Discord chat",
        "30-day moneyback guarantee",
      ],
    },
    {
      name: "Team",
      price: 31,
      description:
        "Managing a team? Team plan offers bulk pricing and exclusive benefits.",
      features: [
        "Better bulk pricing",
        "Invite to private Discord chat",
        "All PRO-tier benefits",
        "30-day moneyback guarantee",
      ],
    },
  ];

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  const calculatePrice = (price) => {
    return isYearly ? price * 12 : price;
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">
        Pick the price{" "}
        <span className="text-red-500">that's right for you</span>
      </h1>
      <p className="text-gray-700 mb-4 text-center">
        Join millions of other customers on this platform
      </p>
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
      <div className="flex flex-col items-center pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-start"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
