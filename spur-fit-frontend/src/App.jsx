import { useState, useEffect } from "react";
import Header from "./components/Header";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import "./App.css";

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
    <div className="bg-primary">
      <Header />
      {useMe && (
        <MdKeyboardDoubleArrowUp
          fontSize="30px"
          onClick={scrollToTop}
          className=" text-darkPink fixed bottom-10 right-16  cursor-pointer animate-bounce"
        />
      )}
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">
        fasdf adsf a df adlf dfad; fdas fad; f fad; fd fad f; df dalkf adkf adf
        kad;f adk jtst
      </p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p className="text-white">tst</p>
      <p>tst</p>
      <p>tst</p>
      <p>tst</p>
      <p>tst</p>
      <p>tst</p>
    </div>
  );
}

export default App;
