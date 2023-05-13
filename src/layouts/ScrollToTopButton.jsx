import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-12 right-4 p-2 bg-yellow-500 rounded-full text-white transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
