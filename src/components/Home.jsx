import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center md:flex-row bg-[url('./assets/img/hero.jpg')] bg-cover bg-center bg-no-repeat px-5 md:px-32 relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-80"></div>

      {/* Content */}
      <div className="z-10 text-center md:text-left text-white md:w-1/2 space-y-6 animate-slide-in">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#671515] animate-pulse">
          Discover Your Strength!
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-300 animate-fade-in">
          Join the ultimate fitness journey and redefine your limits.
        </p>
        <div>
          <Button
            title="Get Started"
            className="bg-[#ff3939] hover:bg-[#ff5e5e] transition-transform duration-300 transform hover:scale-105 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
