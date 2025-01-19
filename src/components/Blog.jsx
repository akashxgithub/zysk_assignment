import React from "react";
import { assests } from "../assets/assets";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 sm:ml-24">
          <div className="flex flex-col space-y-2 text-center sm:text-left sm:ml-0">
            <p className="text-red-500 font-semibold">Our blog</p>
            <p className="text-lg">Latest blog post</p>
            <p className="text-gray-600">
              Tools and strategies modern teams need to help their companies
              grow
            </p>
          </div>

          <button className="bg-red-600 text-white rounded-lg p-6 pt-2 pb-2 mb-10 sm:mb-0 sm:mr-24 w-full sm:w-auto hidden sm:block">
            View posts
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-24">
          {/* Blog Post 1 */}
          <div className="flex flex-col items-start">
            <img
              src={assests.blog_1}
              alt="Blog 1"
              className="w-full h-auto mb-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-red-500 text-left">Design</p>
              <p className="font-semibold text-left text-2xl">
                UX review presentations
              </p>
              <p className="text-gray-500 text-sm text-left">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={assests.profile}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Olivia Rhye</p>
                  <p className="text-gray-500 text-sm">20 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <img
              src={assests.blog_2}
              alt="Blog 2"
              className="w-full h-auto mb-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-red-500 text-left">Product</p>
              <p className="font-semibold text-left text-2xl">
                Migrating to Liner 101
              </p>
              <p className="text-gray-500 text-sm text-left">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here's how to get started.
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={assests.avatar_2}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Phoenix Baker</p>
                  <p className="text-gray-500 text-sm">19 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <img
              src={assests.blog_3}
              alt="Blog 3"
              className="w-full h-auto mb-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-red-500 text-left">Software Engineering</p>
              <p className="font-semibold text-left text-2xl">
                Building your API stack
              </p>
              <p className="text-gray-500 text-sm text-left">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={assests.avatar_3}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Lana Steiner</p>
                  <p className="text-gray-500 text-sm">18 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden mt-8 flex justify-center">
          <button className="bg-red-600 text-white rounded-lg p-6 pt-2 pb-2 mb-4 sm:mb-0 w-full sm:w-auto">
            View posts
          </button>
        </div>
      </div>

      <div className="mt-32 bg-gray-100 pt-24 pb-24">
        <p className="text-center text-2xl font-bold">Start your free trial</p>
        <p className="text-center text-gray-500 p-4">
          Join over 4,000+ startups already growing with Untitled
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <button className="border rounded-lg py-2 px-6 w-full sm:w-auto lg:w-auto text-sm">
            Learn more
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg w-full sm:w-auto lg:w-auto text-sm">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
