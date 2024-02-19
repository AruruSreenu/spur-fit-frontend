import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Footer = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 4;

      if (window.scrollY > scrollThreshold) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      className="mt-14 bg-navBgTransperent bg-opacity-25 backdrop-opacity-95 backdrop-blur-lg flex flex-col items-center box-css-shadow"
      id="contact"
    >
      <div className="mt-5 mb-10 w-11/12 md:w-3/5 md:gap-2 gap-y-10 md:flex-nowrap flex-wrap flex flex-row justify-between items-center ">
        <motion.form
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="fullName" className="mt-3 text-white">
            Full Name
          </label>

          <input
            className="text-lightPink outline-none border-b-2 bg-transparent border-lightPink"
            type="text"
            id="fullName"
            name="fullName"
            required
          />

          <label className="mt-3 text-white" htmlFor="email">
            Email
          </label>
          <input
            className="text-lightPink  outline-none border-b-2 bg-transparent border-lightPink"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message" className="mt-3 text-white">
            Message
          </label>
          <textarea
            className="text-lightPink  outline-none w-72 border-b-2 bg-transparent border-lightPink"
            id="message"
            rows="3"
            required
          ></textarea>

          <button
            type="button"
            className="w-24 mt-4 bg-skyblue self-start text-white"
          >
            Submit
          </button>
        </motion.form>

        <div className="">
          <p className="mt-2 text-lightWhite">Phone Number</p>
          <p className="mt-2 text-lightWhite">85028585939</p>
          <p className="mt-2 text-lightWhite">Email</p>
          <p className="mt-2 text-lightWhite">SreenuAruru@gmail</p>
          <div className="flex flex-row gap-4 mt-4">
            <RiInstagramFill className="size-7 text-lightPink box-css-shadow" />
            <FaTwitter className="size-7 text-lightPink box-css-shadow" />
            <FaFacebookSquare className="size-7 text-lightPink box-css-shadow" />
            <IoLogoYoutube className="size-7 text-lightPink box-css-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
