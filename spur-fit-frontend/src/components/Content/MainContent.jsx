import About from "./About";
import CategroyCards from "./CategroyCards";
import HeadingSearch from "./HeadingSearch";
import Partners from "./Partners";
import Projects from "./Projects";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12 flex flex-col items-center  border-solid">
        <HeadingSearch />
        <CategroyCards />
        <Projects />
        <About />
        <Partners />
      </div>
    </div>
  );
};

export default MainContent;
