import React, { forwardRef, useContext } from "react";
import "./AboutMe.css";
import { ThemeContext } from "../Main/MainContainer";

const AboutMe = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const imageStyle = {
    backgroundColor: darkTheme ? "#f2f2f2" : "#303030",
    textColor: { color: darkTheme ? "#000000" : "#ffffff" },
  };
  const btnStyle = darkTheme ? "btn-dark" : "btn-light";
  const styles = {
    backgroundColor: darkTheme ? "#292929" : "#e7f0f8ef",
    textcolor: {
      color: darkTheme ? "#f5f5f5" : "#212529",
    },
    tagLine: {
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
    pStyle: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
  };
  return (
    <div
      className="about-container"
      style={styles}
      id={props.id || ""}
      ref={ref}
    >
      <div className="about-heading">
        <h1 className="about-heading-title" style={styles.tagLine}>
          About Me
        </h1>
        <p className="about-tagline" style={styles.tagLine}>
          {props.tagline}
        </p>
      </div>
      <div id="section-aboutme" className="aboutme">
        <div className="blob"></div>
        <div className="blob2"></div>
        <div className="blob3"></div>
        <div className="blob4"></div>
        <div className="image">
          <section id="card1" className="card" style={imageStyle}>
            <img src="#" alt="Not found!"></img>
            <div className="card__content" style={imageStyle}>
              <p className="card__title">Vikas Saini</p>

              <p className="card__description" style={imageStyle.textColor}>
                <i className="bi bi-check-circle-fill"></i> AI/ML Developer
              </p>
              <p className="card__description" style={imageStyle.textColor}>
                <i className="bi bi-check-circle-fill"></i> Full-stack Developer
              </p>
              <p className="card__description" style={imageStyle.textColor}>
                <i className="bi bi-check-circle-fill"></i> Software Developer
              </p>
              <button
                onClick={() => props.onComponentClick(props.educationRef)}
                className={"btn info-btn " + btnStyle}
              >
                <i className="bi bi-info-circle"></i> More Info
              </button>
            </div>
          </section>
        </div>
        <div className="about" style={styles.textcolor}>
          <p style={styles.pStyle}>
            Dr. Saini has more than 15-years professional experience of applied
            GIS and Remote Sensing (i.e.Satellite/LiDAR/Drone) Technologies in
            planning, design,construction supervision for multi-sector projects
            which included Smart City Planning, Master Planning, SEZ Planning,
            Solid- waste management, utility network planning & asset management
            (water supply, drainage & sewer), roads & highways, Disaster
            Management in Flood hazard Context, Disaster risk reduction (DRR),
            Environment & Social Impact Assessment, GIS-based institutional
            strengthening & capacity building etc. He is also Functional Area
            Expert (FAE) accredited by National Accreditation Board for
            Education and Training (NABET) Quality Quality Council of India for
            assessment of Land use impact of construction projects (as component
            of EIA) . Also, as a resource person for Geospatial applications in
            above mentioned sectors, Dr Saini has been visiting faculty to many
            renowned institutions which includes School of Planning &
            Architecture Delhi, Central Road Research Institute (CRRI), Haryana
            Institute of Public Administration (HIPA) and Department of
            Geography, Himachal Pradesh University Shimla, Department of
            Geography, Kurukshetra University Kurukshetra, Haryana. In addition
            to India, he has been visited and worked in countries including
            Afghanistan and Mongolia.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
