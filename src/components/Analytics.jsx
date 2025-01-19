import React from "react";
import { assests } from "../assets/assets";

const Analytics = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-center w-full">
        <div className="inline-flex items-center justify-center border border-red-500 rounded-full p-2 sm:p-1 w-full sm:w-auto text-center sm:text-left">
          <span className="bg-red-50 text-red-500 font-bold rounded-full border border-red-500 px-4 py-1 text-xs sm:text-sm">
            New feature
          </span>
          <span className="text-red-500 font-bold ml-2 text-xs sm:text-sm">
            Check out the team dashboard
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Beautiful analytics to grow smarter
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-500">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, <br /> and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="flex flex-col sm:flex-row mt-6 w-full sm:w-auto space-y-4 sm:space-x-4 sm:space-y-0 justify-center">
          <button className="flex items-center justify-center w-full sm:w-auto rounded-full p-4 border border-gray-500 text-sm sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7-7 7V5z"
              />
            </svg>
            Demo
          </button>
          <button className="bg-red-600 text-white rounded-full p-4 pt-2 pb-2 mb-10">
            Sign up
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8 px-4">
        <img src={assests.image_1} alt="" className="p-4" />
      </div>
      <p className="text-gray-500 flex justify-center mt-8 px-4">
        Join 4,000+ companies already growing
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 mt-8 px-4">
        <img
          src={assests.fictional}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
        <img
          src={assests.lightbox}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
        <img
          src={assests.featherdev}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
        <img
          src={assests.spherule}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
        <img
          src={assests.globalbank}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
        <img
          src={assests.nietzsche}
          alt=""
          className="w-32 h-24 object-contain mx-auto"
        />
      </div>
      <hr className="my-4 mt-16 border-t-2 border-gray-100" />
    </div>
  );
};

export default Analytics;
