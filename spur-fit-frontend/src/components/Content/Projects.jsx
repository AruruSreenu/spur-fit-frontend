import { useState } from "react";
import Slider from "react-slick";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { animImage, animationArray } from "../../assets/all";
import Reveal from "../../assets/Reveal";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="text-lightPink text-2xl cursor-pointer ml-2"
    >
      <MdOutlineArrowForwardIos />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="text-lightPink text-2xl cursor-pointer mr-2"
    >
      <MdOutlineArrowBackIos />
    </div>
  );
  const settingsSlide = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    afterChange: (index) => setActiveIndex(index),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const calculateImageDimensions = (index) => {
    const baseHeight = 50;
    const baseWidth = 140;

    const scaleFactor = index === activeIndex ? 1.5 : 1;

    const height = baseHeight * scaleFactor;
    const width = baseWidth * scaleFactor;

    return { height, width };
  };

  return (
    <div className="flex flex-col w-full border border-lightPink mt-20">
      <h1 className="text-skyblue text-3xl">Projects</h1>

      {/* carousel */}
      <div className="mt-10 border border-white ">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl mt-0 text-darkPink">
            {animationArray[activeIndex].title}
          </h3>
          <p className="text-lightWhite mt-2 text-xl m-0 text-center w-4/5 h-20">
            <Reveal>{animationArray[activeIndex].description}</Reveal>
          </p>
        </div>
        <div className="slider-container flex flex-col items-center">
          <Slider
            {...settingsSlide}
            className="mt-2 w-5/12 flex flex-row items-center"
          >
            {animImage.map((item, index) => (
              <div key={item} className="">
                <img
                  src={item}
                  alt={item}
                  style={{
                    height: calculateImageDimensions(index).height,
                    width: calculateImageDimensions(index).width,
                  }}
                />
              </div>
            ))}
          </Slider>
          <p className="text-white">{activeIndex}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
