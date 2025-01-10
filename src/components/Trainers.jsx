import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import TrainerCard from "../layouts/TrainerCard";

const Trainers = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-5 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        Meet Our Expert Trainers
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
        <TrainerCard
          img={img1}
          name="Maham"
          description="Strength & Conditioning Specialist"
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg overflow-hidden"
        />
        <TrainerCard
          img={img2}
          name="Aliyan"
          description="Cardio & HIIT Expert"
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg overflow-hidden"
        />
        <TrainerCard
          img={img3}
          name="Fatima"
          description="Yoga & Mindfulness Coach"
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg overflow-hidden"
        />
      </div>

      <p className="text-center text-gray-700 mt-8 text-lg animate-bounce">
        Our trainers are dedicated to helping you achieve your fitness goals.
      </p>
    </div>
  );
};

export default Trainers;
