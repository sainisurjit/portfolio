import React, { useContext } from "react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import "./Profile.css";
import CV from "./../../../assets/CV_Dr_Saini.pdf";
import { ThemeContext } from "../../Main/MainContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Profile(props) {
  const darkTheme = useContext(ThemeContext);
  const [resumeBtnColor, setResumeBtnColor] = React.useState(
    darkTheme ? "#212529 !important" : "#f8f8f8 !important"
  );
  const [contactBtnColor, setContactBtnColor] = React.useState("#f61be0");

  const style = {
    profileInfoStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    iconStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    lineStyle: {
      boderColor: darkTheme ? "#f8f8f8" : "#212529",
    },
    profilePicStyle: {
      boxShadow: darkTheme
        ? "0 1px 0px 0px rgb(249, 248, 248)"
        : "0 1px 0px 0px rgb(29, 27, 27)",
    },
    resumeBtn: {
      boxShadow: darkTheme
        ? "2px 5px 5px rgb(22, 21, 21)"
        : "2px 5px 5px rgb(180, 180, 180)",
      color: resumeBtnColor,
      transition: "background-color 0.1s ease, color 0.1s ease",
    },
    contactBtn: {
      boxShadow: darkTheme
        ? "2px 5px 5px rgb(22, 21, 21)"
        : "2px 5px 5px rgb(180, 180, 180)",
      color: contactBtnColor,
      transition: "background-color 0.1s ease, color 0.1s ease",
    },
    downloadStyle: {
      color: resumeBtnColor,
      transition: "color 0.1s ease",
    },
    btnTheme: {
      color: darkTheme ? "light" : "dark",
    },
    statsStyle: {
      backgroundColor: darkTheme ? "#292929" : "#e7f0f8ef",
      boxShadow: darkTheme ? "5px 10px 10px #121212" : "5px 10px 10px #aaaaaa",
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
  };

  return (
    <div className="profile-container " style={style.profileContainerStyle}>
      <div className="profile">
        <div className="profile-pic" style={style.profilePicStyle}>
          <div className="profile-background"></div>
        </div>
        <div className="profile-info" style={style.profileInfoStyle}>
          <h1 className="profile-tagline">
            Hi, I am <b className="funky-name">Dr. Surjit Saini </b>
          </h1>
          <h1 className="profile-tagline">
            I am a{" "}
            <strong className="funky-name" style={style.profileInfoStyle}>
              Urban Planner/GIS Expert
            </strong>
          </h1>
          <hr className="line" style={style.lineStyle}></hr>
          <div className="social-media-icons">
            <Tooltip
              title="Instagram profile"
              position="top"
              arrow="true"
              theme="light"
              trigger="mouseenter"
              distance="40"
              touchHold="true"
              inertia="true"
            >
              <a
                className="link"
                href="https://instagram.com/vikas.s.12?igshid=OGQ5ZDc2ODk2ZA=="
              >
                {<i className="bi bi-instagram" style={style.iconStyle}></i>}
              </a>
            </Tooltip>
            <Tooltip
              title="Linkedin profile"
              position="top"
              arrow="true"
              trigger="mouseenter"
              inertia="true"
              theme="light"
              distance="40"
              touchHold="true"
            >
              <a
                className="link"
                href="https://www.linkedin.com/in/vikas-saini-a65919a4"
              >
                <i className="bi bi-linkedin" style={style.iconStyle}></i>
              </a>
            </Tooltip>
            <Tooltip
              title="Github profile"
              position="top"
              arrow="true"
              trigger="mouseenter"
              theme="light"
              distance="40"
              touchHold="true"
              inertia="true"
            >
              <a className="link" href="https://github.com/CodewithSaini">
                <i className="bi bi-github" style={style.iconStyle}></i>
              </a>
            </Tooltip>
            <Tooltip
              title="Twitter profile"
              position="top"
              arrow="true"
              trigger="mouseenter"
              theme="light"
              distance="40"
              touchHold="true"
              inertia="true"
            >
              <a className="link" href="https://twitter.com/Vikas_s_12">
                <i className="bi bi-twitter" style={style.iconStyle}></i>
              </a>
            </Tooltip>
          </div>
          <div className="buttons">
            <a
              type="button"
              className={
                "btn btn-lg btn-md btn-outline-" +
                style.btnTheme.color +
                " resume-btn"
              }
              href={CV}
              style={style.resumeBtn}
              onMouseOver={() => setResumeBtnColor("#369bdd")}
              onMouseOut={() => setResumeBtnColor()}
              onTouchStart={() => setResumeBtnColor("#369bdd")}
              onTouchEnd={() => setResumeBtnColor()}
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ color: resumeBtnColor }}
              />
              Resume
            </a>
            <button
              className={
                "btn btn-lg btn-md btn-outline-" +
                style.btnTheme.color +
                " contact-btn"
              }
              style={style.contactBtn}
              onClick={() => props.onComponentClick(props.contactRef)}
              onMouseOver={() =>
                setContactBtnColor(darkTheme ? "#f8f8f8" : "#212529")
              }
              onMouseOut={() => setContactBtnColor("#f61be0")}
              onTouchStart={() =>
                setContactBtnColor(darkTheme ? "#f8f8f8" : "#212529")
              }
              onTouchEnd={() => setContactBtnColor("#f61be0")}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="stats" style={style.statsStyle}>
          <div className="first">
            <h3 className="main-line">12000+</h3>
            <p>Lines of code</p>
          </div>
          <div className="second">
            <h3 className="main-line">20+</h3>
            <p>Years of experience</p>
          </div>
          <div className="third">
            <h3 className="main-line">15</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
