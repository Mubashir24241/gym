import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-gradient-to-r from-indigo-100 to-purple-50">
      <div className="flex flex-col md:flex-row justify-between w-full md:space-x-10">
        {/* Form Section */}
        <form className="w-full md:w-2/5 space-y-5 p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
          <h1 className="text-5xl font-bold text-center text-purple-700">
            Contact Us 
          </h1>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="userName" className="text-lg font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your Name"
                className="py-3 px-5 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-md transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userEmail" className="text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter your Email"
                className="py-3 px-5 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-md transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userNumber" className="text-lg font-medium text-gray-700">
                Your Number
              </label>
              <input
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Enter your Number"
                className="py-3 px-5 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-md transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="userMessage" className="text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="userMessage"
                id="userMessage"
                rows="4"
                placeholder="Enter your Message"
                className="py-3 px-5 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-md transition-all"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="mailto:mbshrmr@gmail.com"
              className="bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105 transition-all px-6 py-2 rounded-lg text-center"
            >
              Send Message
            </a>
            <a
              href="tel:6005782424"
              className="bg-green-500 text-white hover:bg-green-600 transform hover:scale-105 transition-all px-6 py-2 rounded-lg text-center"
            >
              Start a Call
            </a>
          </div>
        </form>

        {/* Google Map Section */}
        <div className="hidden md:flex w-full md:w-2/4 items-center justify-center">
          <div className="relative w-full h-[400px] md:h-[450px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300">
            <iframe
              title="Location"
              src="https://www.google.co.in/maps/place/Baramulla+193101/@34.2013013,74.3577294,4545m/data=!3m1!1e3!4m6!3m5!1s0x38e10768ae7739dd:0xc5cefc0b98abbd8!8m2!3d34.1990498!4d74.3499496!16s%2Fg%2F11cs018pxw?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              className="absolute inset-0 w-full h-full rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
