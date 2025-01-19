import React, { useState } from "react";
import { assests } from "../assets/assets";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#" },
    {
      name: "Products",
      link: "#",
      subMenu: ["Product 1", "Product 2", "Product 3"],
    },
    {
      name: "Resources",
      link: "#",
      subMenu: ["Resource 1", "Resource 2", "Resource 3"],
    },
    { name: "Pricing", link: "#" },
  ];

  const renderSubMenu = (subMenu) =>
    subMenu?.map((item, index) => (
      <a
        key={index}
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        {item}
      </a>
    ));

  return (
    <nav className="flex items-center justify-between px-6 md:px-28 py-4 text-gray">
      <div className="flex items-center space-x-4 md:space-x-8">
        <a href="#" className="">
          <img src={assests.zysk_logo} alt="Logo" className="h-8" />
        </a>

        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ name, link, subMenu }, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() =>
                subMenu &&
                (name === "Products"
                  ? setIsProductsOpen(true)
                  : setIsResourcesOpen(true))
              }
              onMouseLeave={() =>
                subMenu &&
                (name === "Products"
                  ? setIsProductsOpen(false)
                  : setIsResourcesOpen(false))
              }
            >
              <a
                href={link}
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <span>{name}</span>
                {subMenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform ${
                      (isProductsOpen && name === "Products") ||
                      (isResourcesOpen && name === "Resources")
                        ? "rotate-180"
                        : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>

              {(name === "Products" && isProductsOpen) ||
              (name === "Resources" && isResourcesOpen) ? (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 hidden md:block">
                  {renderSubMenu(subMenu)}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
          {menuItems.map(({ name, subMenu }, index) => (
            <React.Fragment key={index}>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                {name}
              </a>
              {name === "Products" || name === "Resources"
                ? null
                : renderSubMenu(subMenu)}{" "}
              {/* Hide submenus */}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="hidden md:flex items-center">
        <img
          src={assests.profile}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
