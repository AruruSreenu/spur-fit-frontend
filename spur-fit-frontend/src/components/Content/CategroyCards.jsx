import { IoIosArrowForward } from "react-icons/io";
import Reveal from "../../assets/Reveal";

const CategroyCards = () => {
  const animationCategory = [
    {
      title: "Traditional Animation",
      descritptio:
        "This is the classic form of animation that involves creating each frame by hand-drawing.",
    },
    {
      title: "Computer Animation",
      descritptio:
        "Uses computer-generated imagery (CGI) to create three-dimensional objects and characters.",
    },
    {
      title: "Cutout Animation",
      descritptio:
        "Characters and objects are created by cutting out shapes from paper, photographs,video editng.",
    },
  ];
  return (
    <div className="w-full gap-3 mt-10 flex md:justify-normal justify-center md:flex-nowrap flex-wrap flex-row ">
      {animationCategory.map((item) => (
        <div
          key={item.title}
          className="shadow-sm shadow-white justify-between flex flex-col p-2 w-5/6 md:w-1/3 gap-x-2 border border-lightWhite rounded-lg category-card"
        >
          <Reveal>
            <h1 className="m-0 text-skyblue text-lg">{item.title}</h1>
          </Reveal>
          <Reveal>
            <p className="mt-1 text-lightWhite text-sm">{item.descritptio}</p>
          </Reveal>
          <div className="mt-2 flex flex-row self-end justify-self-end items-center justify-center w-24 h-6 border-2 pl-2 pr-2 rounded text-sm  text-lightPink font-bold border-none">
            <button className="" type="button">
              more
            </button>
            <IoIosArrowForward />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategroyCards;
