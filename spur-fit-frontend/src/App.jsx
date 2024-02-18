import { useState, useEffect } from "react";
import Header from "./components/Header";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import "./App.css";
import MainContent from "./components/Content/MainContent";
import Footer from "./components/Footer";

function App() {
  const [useMe, setUseMe] = useState(false);

  useEffect(() => {
    const handleUseMeScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 300) {
        setUseMe(false);
      } else {
        setUseMe(true);
      }
    };

    window.addEventListener("scroll", handleUseMeScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-all bg-primary ">
      <Header />
      {useMe && (
        <MdKeyboardDoubleArrowUp
          fontSize="30px"
          onClick={scrollToTop}
          className=" text-lightOrange z-20 fixed bottom-10 right-16  cursor-pointer animate-bounce"
        />
      )}

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
