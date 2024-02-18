import logo from "../images/logo5.svg";

const Header = () => {
  const navPath = [
    { link: "Projects", path: "project" },
    { link: "About", path: "about" },
    { link: "Partners", path: "partners" },
    { link: "ContactUs", path: "contact" },
  ];
  return (
    <nav className="z-30 sticky top-0 bg-navBgTransperent bg-opacity-25 backdrop-opacity-95 backdrop-blur-lg shadow-lg flex items-center justify-between flex-row">
      <img src={logo} alt="logo" className="w-24 ml-16" />
      <ul className="md:flex space-x-3.5 flex flex-row items-center mr-16">
        {navPath.map(({ link, path }) => (
          <li key={path} className="nav_menu">
            <a key={path} href={path} className="font-semibold">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
