import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center gap-10 px-6 md:px-32 py-16 bg-white ">
      <div className="md:w-1/2 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center md:text-left mb-8">
          About Us
        </h1>

        <div className="text-lg md:text-xl text-orange-900 leading-relaxed space-y-6 animate-pulse">
          <p>
            Your well-being is your greatest wealth. Whether it's achieving
            optimal health or enhancing your fitness journey, we're here to
            support you every step of the way.
          </p>
          <p>
            At our fitness center, our team of certified personal trainers,
            attentive staff, and experienced management are dedicated to
            fostering a nurturing environment.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src={img}
          alt="About Us"
          className="rounded-xl shadow-lg max-w-full md:max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default About;
