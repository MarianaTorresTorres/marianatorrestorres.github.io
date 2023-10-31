import "../styles/App.css";
import home from "../json-data/home.json";
import aboutme from "../json-data/aboutme.json";

import { useState, useEffect } from "react";

const Home = ({ delay, infinite }) => {
  const [text, setText] = useState(home[0].title);
  const [reverse, setReverse] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // run every time text changes
    let timeout;
    if (reverse == false && currentIndex <= text.length - 1) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else if (reverse == false && currentIndex == text.length) {
      setReverse(true);
      setCurrentIndex(text.length - 1);
    } else if (reverse == true && currentIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText.substring(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, 100);
    } else if (reverse == true && currentIndex == 0) {
      setReverse(false);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex]); // <-- dependency array

  return (
    <div
      id="home"
      className="grid grid-cols-6 gap-4 p-20 bg-blob bg-cover bg-no-repeat w-full h-screen"
    >
      <div className="col-span-5 pl-15 pt-5">
        <p className="font-normal font-grotesk md:text-2xl lg:text-3xl text-textColor pb-5">
          Hi! My name is
        </p>
        <h2 className="font-league text-4xl md:text-7xl lg:text-7xl text-textColor pb-5">
          {aboutme.name}
        </h2>
        <div className="flex">
          <h2 className="font-league text-4xl md:text-7xl lg:text-7xl text-textColor">
            {"I'm a"}
            {currentText}
          </h2>
          <span
            id="cursor"
            className="font-grotesk text-4xl md:text-7xl lg:text-7xl text-textColor"
          >
            |
          </span>
        </div>
      </div>
      <div>
        <button
          className="text-lg font-light font-grotesk mt-40 text-textColor border-2 border-textColor rounded-lg bg-home hover:text-home hover:bg-purpleShade duration-300 w-40 h-8"
          onClick={(e) => {
            setCurrentIndex(0);
            setCurrentText("");
            setText(home[Math.floor(Math.random() * 6)].title);
          }}
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
};

export default Home;
