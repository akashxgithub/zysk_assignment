import React from "react";
import { assests } from "../assets/assets";

const Features = () => {
  return (
    <div>
      <p className="text-red-500 flex justify-center mt-24 text-xl">Features</p>
      <p className="text-center text-3xl mt-4">
        Analytics that feel like it's from future
      </p>
      <p className="text-gray-500 text-center mt-4">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, <br />
        and retain more users.Trusted by over 4,000 startups
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col items-center">
          <img src={assests.icon_1} alt="" className="border rounded-lg p-2" />
          <p className="text-xl font-bold mt-2">Share team inboxes</p>
          <p className="text-gray-500 text-center mt-2">
            Whether you have a team of 2 or 200, our shared <br /> team boxes
            keep everyone on the same page <br /> and in the loop
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={assests.icon_2} alt="" className="border rounded-lg p-2" />
          <p className="text-xl font-bold mt-2">Deliver instant answers</p>
          <p className="text-gray-500 text-center mt-2">
            An all-in-one customer service platform that helps <br /> you
            balance everything your customers need to be <br /> happy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assests.chart_breakout_square}
            alt=""
            className="border rounded-lg p-2"
          />
          <p className="text-xl font-bold mt-2">Manage your team reports</p>
          <p className="text-gray-500 text-center mt-2">
            Measure what matters with Untitled's easy-to-use <br /> reports.You
            can filter,export,and drilldown on the
            <br /> data in a couple clicks
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={assests.message_smile_circle}
            alt=""
            className="border rounded-lg p-2"
          />
          <p className="text-xl font-bold mt-2">Connect with customers</p>
          <p className="text-gray-500 text-center mt-2">
            Solve a problem or close a sale in real-time with
            <br /> chat.If no one is available,customers are
            <br /> seemlessly routed to email without confusion
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={assests.icon_5} alt="" className="border rounded-lg p-2" />
          <p className="text-xl font-bold mt-2">
            Connect the tools you already use
          </p>
          <p className="text-gray-500 text-center mt-2">
            Explore 100+ integrations that make your
            <br /> day-to-day workflow more efficient and familiar. <br />
            Plus our extensive developer tools
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={assests.heart} alt="" className="border rounded-lg p-2" />
          <p className="text-xl font-bold mt-2">
            Our people make the difference
          </p>
          <p className="text-gray-500 text-center mt-2">
            We're an extension of your customer service team, <br /> and all of
            our resources are free.Chat to our <br /> friendly team 24/7 when
            you need help
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100 p-6 mt-24">
        <img src={assests.sisyphus} alt="" className="mb-4 mt-24" />
        <p className="text-center mb-4 text-4xl leading-relaxed mt-6">
          We've been using Untitled to kick-start every new project
          <br />
          and can't imagine working without it.
        </p>

        <img src={assests.avatar} alt="" className="mb-2" />
        <p className="text-bold text-center mb-1">Candice Wu</p>
        <p className="text-gray-500 text-center mb-24">
          Product Manager, Sisyphus
        </p>
      </div>
    </div>
  );
};

export default Features;
