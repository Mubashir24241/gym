import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-5 md:px-32 bg-gradient-to-b from-teal-50 to-teal-50">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-10 tracking-wider animate-fade-in">
        Gym Membership Plans
      </h1>

      <div className=" flex flex-col md:flex-row justify-between items-center gap-8 mt-10 animate-slide-in ">
        <PlansCard
          title="Trial Plan"
          price="500"
          className="hover:scale-105 hover:shadow-2xl transform transition-transform duration-300 ease-out  text-gray-900 border-none rounded-2xl p-6 text-center shadow-lg"
        />
        <PlansCard
          title="Gold Plan"
          price="700"
          className="hover:scale-105 hover:shadow-2xl transform transition-transform duration-300 ease-out  text-gray-900 border-none rounded-2xl p-6 text-center shadow-lg"
        />
        <PlansCard
          title="Platinum Plan"
          price="2000"
          className="hover:scale-105 hover:shadow-2xl transform transition-transform duration-300 ease-out text-gray-900 border-none rounded-2xl p-6 text-center shadow-lg"
        />
      </div>

      <p className="text-center text-gray-700 mt-8 text-lg sm:text-xl animate-bounce">
        Choose the perfect plan for your fitness journey!
      </p>
    </div>
  );
};

export default Plans;
