import { IoSearchOutline } from "react-icons/io5";

const HeadingSearch = () => {
  return (
    <>
      <h1
        id="home"
        className="font-mainHeading text-lightWhite text-4xl sm:text-5xl text-center mt-7"
      >
        World's lead and biggest <br />
        <span className="heading-animi">animation</span> studio
      </h1>
      <div className="flex flex-row items-center justify-between mt-8  w-full md:w-2/5 h-12 rounded-full bg-transparent border-2 border-lightWhite">
        <input
          className="ml-5 h-4/5 w-80 bg-transparent outline-none text-lightPink"
          type="search"
          placeholder="Find your animation"
        />
        <div className="border border-lightWhite rounded-full h-4/5 w-10 flex flex-row items-center justify-center mr-2 cursor-pointer">
          <IoSearchOutline className="text-lightWhite" />
        </div>
      </div>
    </>
  );
};

export default HeadingSearch;
