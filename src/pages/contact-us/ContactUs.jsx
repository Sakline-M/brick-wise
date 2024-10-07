/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        {/* Header */}
        <Link to={"/support"} className="flex items-center space-x-2 mb-6">
          <button className="text-gray-700 hover:text-gray-900">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Nachricht News</h1>
        </Link>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 p-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="E-Mail-Adresse"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <textarea
              id="message"
              rows="4"
              className="mt-1 p-4 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nachricht eingeben"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E9F3F2]  py-3 rounded-md focus:outline-none focus:ring-2 "
          >
            Senden 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
