import React from "react";
import { assests } from "../assets/assets";

const Footer = () => {
  const footerData = [
    {
      title: "Product",
      items: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      items: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      items: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      items: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    {
      title: "Legal",
      items: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <footer className="py-8 mt-24 lg:px-16 sm:py-16 sm:mt-28">
      <div className="container mx-auto flex justify-center flex-wrap">
        {footerData.map((column, index) => (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/6 px-4 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm">
                  {item}
                  {item === "Solutions" && (
                    <span className="inline-block bg-green-100 text-green-700 border border-green-500 rounded-full px-2 py-1 ml-1">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-4 mt-24 border-t-2 border-gray-100" />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center pb-8 pt-8">
        <img
          src={assests.zysk_logo}
          alt="Zysk Technologies Logo"
          className="w-16 mb-4 sm:w-16 lg:w-20 sm:mb-0"
        />

        <p className="text-gray-500 text-center sm:text-left sm:ml-8 mt-4">
          &copy; 2077 Zysk Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
