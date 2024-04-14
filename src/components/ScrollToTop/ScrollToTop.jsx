import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      {showScrollToTopButton && (
        <button className="btn btn-warning btn-scroll" onClick={scrollToTop}>
          {" "}
          <i className="bi bi-chevron-double-up"></i>
        </button>
      )}
    </div>
  );
}
