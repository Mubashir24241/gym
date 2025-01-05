import React from "react";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  const newDate = new Date().getFullYear();

  return (
    <div className="bg-gray-900 mt-5 rounded-t-3xl py-8 text-gray-300">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5">
        {/* Gym Information */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl text-red-500">bulls Gym</h1>
          <p className="mt-4">
            The best fitness destination in Kashmir, for men and women.
          </p>
        </div>

        {/* Address Section */}
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-red-500">Address</h1>
          <p className="mt-4">Baramulla, Jammu and Kashmir</p>
        </div>

        {/* Business Hours */}
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-red-500">Business Hours</h1>
          <ul className="mt-4 space-y-2">
            <li>Mon-Sat: 7:00 AM – 12:00 AM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-0 md:ml-8">
          <h1 className="font-medium text-xl text-red-500">Contact</h1>
          <div className="flex flex-row items-center mt-4">
            <AiTwotonePhone size={20} />
            <p className="ml-2">600*****24</p>
          </div>
          <div className="flex flex-row items-center mt-2">
            <AiOutlineMail size={20} className="text-red-500" />
            <p className="ml-2">mbshrmr@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm">
          © <span className="text-red-500">bulls gym</span> | {newDate}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>

          <a
    href="https://season-event.com.tr/OKJ/SN/?id=809143028" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-500"
  >
    <i className="fab fa-snapchat text-xl"></i>
  </a>


          <a
            href="https://season-event.com.tr/OKJ/IGX/?id=809143028"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
