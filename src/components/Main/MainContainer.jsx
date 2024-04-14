import { useState, createContext, useRef, useEffect } from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./MainContainer.css";

export const ThemeContext = createContext(false);

export default function MainContainer() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  const tagLines = {
    aboutme:
      "From passion to profession: Illuminating the essence of who I am.",
    projects:
      "Unveiling Digital Creations: Where Innovation Meets Implementation.",
    education:
      "Learning to code, coding to learn: How education paved the path to my digital ambitions.",
    skills: "From Vision to Execution: Skills that Bring Ideas to Life.",
    contact: "Code, coffee, and collaboration: Let's connect and talk ideas!",
  };

  const homeComponentRef = useRef();
  const aboutComponentRef = useRef();
  const resumeComponentRef = useRef();
  const skillsComponentRef = useRef();
  const contactComponentRef = useRef();
  const projectsComponentRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const storedSwitch = localStorage.getItem("themeSwitch");
    const storedTheme = localStorage.getItem("darkTheme");
    if (storedTheme === "dark" || storedSwitch === "dark") {
      setSwitchOn(true);
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeSwitch", switchOn ? "dark" : "light");
    localStorage.setItem("darkTheme", darkTheme ? "dark" : "light");
  }, [switchOn, darkTheme]);

  const handleTheme = () => {
    setSwitchOn(!switchOn);
    setDarkTheme(!darkTheme);
  };

  const handleScrollToComponent = (eleRef) => {
    console.log(eleRef.current);
    window.scrollTo({ top: eleRef.current.offsetTop, behavior: "smooth" });
  };

  const mainContainerStyle = {
    backgroundColor: darkTheme ? "#222222" : "#f9f9f9",
  };
  return (
    <div className="main-container" style={mainContainerStyle}>
      <ThemeContext.Provider value={darkTheme}>
        <MyNavbar
          switch={switchOn}
          onClickAction={handleTheme}
          onComponentClick={handleScrollToComponent}
          homeRef={homeComponentRef}
          aboutRef={aboutComponentRef}
          projectRef={projectsComponentRef}
          skillsRef={skillsComponentRef}
          resumeRef={resumeComponentRef}
          contactRef={contactComponentRef}
        />
        <Home
          id="home"
          ref={homeComponentRef}
          onComponentClick={handleScrollToComponent}
          contactRef={contactComponentRef}
        />
        <AboutMe
          id="aboutme"
          ref={aboutComponentRef}
          tagline={tagLines.aboutme}
          onComponentClick={handleScrollToComponent}
          educationRef={resumeComponentRef}
        />
        <Contact
          id="contactme"
          ref={contactComponentRef}
          tagline={tagLines.contact}
        />
        <ScrollToTop />
      </ThemeContext.Provider>
    </div>
  );
}
