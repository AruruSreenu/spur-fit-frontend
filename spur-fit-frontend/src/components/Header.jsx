import logo from "../images/logo5.svg";

const Header = () => {
  const navPath = [
    { link: "Projects", path: "project" },
    { link: "About", path: "about" },
    { link: "Partners", path: "partners" },
    { link: "ContactUs", path: "contact" },
  ];
  return (
    <nav className="sticky top-0 bg-navBgTransperent bg-opacity-25 backdrop-opacity-95 backdrop-blur-lg shadow-lg">
      <img src={logo} alt="logo" className="size-1/12" />
      <ul className="md:flex space-x-3.5">
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
