import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faAddressCard,
  faUserGraduate,
  faCode,
  faBriefcase,
  faMessage,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ThemeContext } from "./../Main/MainContainer";

import "./MyNavbar.css";

export default function MyNavbar(props) {
  const [show, setShow] = useState(false);
  const darkTheme = useContext(ThemeContext);
  const [activeComponent, setActiveComponent] = useState(props.homeRef);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 576 && windowWidth <= 850) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const componentRefs = [
        props.homeRef,
        props.aboutRef,
        props.projectRef,
        props.resumeRef,
        props.skillsRef,
        props.contactRef,
      ];
      const components = componentRefs.map((ref) => {
        return {
          ref: ref,
          top: ref.current.offsetTop - 50,
          bottom: ref.current.offsetTop + ref.current.offsetHeight - 50,
        };
      });
      const visibleComponent = components.find(
        (c) => scrollPosition >= c.top && scrollPosition < c.bottom
      );
      if (visibleComponent) {
        setActiveComponent(visibleComponent.ref);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    props.homeRef,
    props.aboutRef,
    props.projectRef,
    props.resumeRef,
    props.skillsRef,
    props.contactRef,
  ]);

  const style = {
    variant: darkTheme ? "dark" : "light",
    color: darkTheme ? "#a3a4a5" : "#606262",
  };

  const offCanvasStyle = {
    backgroundColor: darkTheme ? "#212121" : "#fff",
    color: darkTheme ? "#a3a4a5" : "#606262",
  };
  const navStyle = {
    boxShadow: darkTheme ? "0 2px 4px rgb(1, 1, 1)" : "0 2px 4px gray",
  };

  const icons = {
    user: show ? <FontAwesomeIcon icon={faUser} size="lg" /> : null,
    house: show ? <FontAwesomeIcon icon={faHouse} size="lg" /> : null,
    addressCard: show ? (
      <FontAwesomeIcon icon={faAddressCard} size="lg" />
    ) : null,
    userGraduate: show ? (
      <FontAwesomeIcon icon={faUserGraduate} size="lg" />
    ) : null,
    code: show ? <FontAwesomeIcon icon={faCode} size="lg" /> : null,
    message: show ? <FontAwesomeIcon icon={faMessage} size="lg" /> : null,
    circleHalfStroke: show ? (
      <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
    ) : null,
  };

  const handleToggleClick = () => setShow((prevShow) => !prevShow);

  return (
    <div className="Navbar">
      <Navbar
        key="sm"
        bg={style.variant}
        variant={style.variant}
        fixed="top"
        expand="sm"
        className="mb-3"
        style={navStyle}
      >
        <Container fluid>
          <Navbar.Brand href="#/">Surjit Saini</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-sm`}
            onClick={handleToggleClick}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            style={offCanvasStyle}
            show={show}
            onHide={handleToggleClick}
          >
            <Offcanvas.Header
              closeButton
              closeVariant={darkTheme ? "white" : null}
            >
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-sm`}
                style={{
                  color: darkTheme ? "white" : "black",
                  fontFamily: "Rubik Vinyl",
                }}
              >
                {icons.user} Surjit Saini
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Navbar.Text
                  className={activeComponent === props.homeRef ? "active" : ""}
                  onClick={() => {
                    props.onComponentClick(props.homeRef);
                    setShow(false);
                    setActiveComponent(props.homeRef);
                  }}
                >
                  {icons.house}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faHouse} size="lg" />
                  ) : (
                    "Home"
                  )}
                </Navbar.Text>
                <Navbar.Text
                  className={activeComponent === props.aboutRef ? "active" : ""}
                  onClick={() => {
                    props.onComponentClick(props.aboutRef);
                    setShow(false);
                    setActiveComponent(props.aboutRef);
                  }}
                >
                  {icons.addressCard}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                  ) : (
                    "About Me"
                  )}
                </Navbar.Text>
                <Navbar.Text
                  className={
                    activeComponent === props.projectRef ? "active" : ""
                  }
                  onClick={() => {
                    props.onComponentClick(props.projectRef);
                    setShow(false);
                    setActiveComponent(props.projectRef);
                  }}
                >
                  {icons.addressCard}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                  ) : (
                    "Projects"
                  )}
                </Navbar.Text>
                <Navbar.Text
                  className={
                    activeComponent === props.resumeRef ? "active" : ""
                  }
                  onClick={() => {
                    props.onComponentClick(props.resumeRef);
                    setShow(false);
                    setActiveComponent(props.resumeRef);
                  }}
                >
                  {icons.userGraduate}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                  ) : (
                    "Education"
                  )}
                </Navbar.Text>
                <Navbar.Text
                  className={
                    activeComponent === props.skillsRef ? "active" : ""
                  }
                  onClick={() => {
                    props.onComponentClick(props.skillsRef);
                    setShow(false);
                    setActiveComponent(props.skillsRef);
                  }}
                >
                  {icons.code}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faCode} size="lg" />
                  ) : (
                    "Skills"
                  )}
                </Navbar.Text>
                <Navbar.Text
                  className={
                    activeComponent === props.contactRef ? "active" : ""
                  }
                  onClick={() => {
                    props.onComponentClick(props.contactRef);
                    setShow(false);
                    setActiveComponent(props.contactRef);
                  }}
                >
                  {icons.message}{" "}
                  {showIcon ? (
                    <FontAwesomeIcon icon={faMessage} size="lg" />
                  ) : (
                    "Contact Me"
                  )}
                </Navbar.Text>
                <div className="dark-theme">
                  <span style={style}> {icons.circleHalfStroke} Dark Mode</span>
                  <div className="toggle-switch">
                    <input
                      id="toggle-switch"
                      className="toggle-switch-checkbox"
                      type="checkbox"
                      checked={props.switch}
                      onChange={props.onClickAction}
                    ></input>
                    <label
                      htmlFor="toggle-switch"
                      className="toggle-switch-label"
                    >
                      <span className="toggle-switch-inner"></span>
                    </label>
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
