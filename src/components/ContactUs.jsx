import React from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl h-[100vh] mx-auto p-5">
      <i
        onClick={() => navigate(-1)}
        className="absolute left-10 top-6 font-black hover:text-[#6556CD] duration-150 cursor-pointer text-2xl ri-arrow-left-line"
      ></i>
      <h1 className="text-4xl font-bold mb-5">Contact Us</h1>
      <p className="mb-4 text-lg">
        If you have any questions, feedback, or suggestions, feel free to reach
        out to us through the following channels:
      </p>
      <h2 className="text-2xl font-bold mb-3">Mobile Number</h2>
      <p className="mb-4 text-lg text-red-400">+123-456-7890</p>
      <h2 className="text-2xl font-bold mb-3">Follow Us</h2>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <i className="text-2xl text-blue-600 ri-facebook-circle-fill"></i>
          <span className="text-lg">Facebook</span>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <i className="text-2xl text-zinc-600 ri-twitter-x-line"></i>
          <span className="text-lg">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <i className="text-2xl text-pink-400 ri-instagram-fill"></i>
          <span className="text-lg">Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
