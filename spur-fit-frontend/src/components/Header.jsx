import logo from "../images/logo5.svg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const navPath = [
    { link: "Projects", path: "project" },
    { link: "About", path: "about" },
    { link: "Partners", path: "partners" },
    { link: "ContactUs", path: "contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="z-30 sticky top-0 bg-navBgTransperent bg-opacity-25 backdrop-opacity-95 backdrop-blur-lg shadow-lg flex items-center justify-between flex-row">
      <a href="#home">
        <img src={logo} alt="logo" className="md:w-24 w-28 md:ml-16 ml-4" />
      </a>

      {/* IoMenu icon */}
      <IoMenu
        className="w-6 h-6 text-white cursor-pointer mr-4 md:hidden"
        onClick={toggleMenu}
      />

      {/* Hidden menu for smaller screens */}
      {showMenu && (
        <ul className=" md:hidden absolute top-12 right-4 border bg-lightWhite p-4 shadow-md rounded-md space-y-2 text-gray-800">
          {navPath.map(({ link, path }) => (
            <li key={path} className="nav_menu">
              <a key={path} href={`#${path}`} className="font-semibold">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Navigation menu for larger screens */}
      <ul className="md:flex space-x-3.5 flex flex-row items-center mr-16 hidden">
        {navPath.map(({ link, path }) => (
          <li key={path} className="nav_menu">
            <a key={path} href={`#${path}`} className="font-semibold">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
