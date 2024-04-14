import { forwardRef, useContext } from "react";
import React from "react";
import "./Resume.css";
import { ThemeContext } from "../Main/MainContainer";

const Resume = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const styles = {
    backgroundColor: darkTheme ? "#292929" : "#e7f0f8ef",
    boxShadow: darkTheme ? "5px 10px 10px #121212" : "5px 10px 10px #aaaaaa",
    color: darkTheme ? "#f2f2f2" : "#404040",
    textStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    tagLine: {
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
  };
  const Education = [
    {
      Institution: "Carleton University",
      Location: "Ottawa",
      Program: "Bachelor of Computer Science",
      Stream: "Artificial Intelligence and Machine Learning",
      CGPA: "10.6/12.0",
      Award: "Entrance Scholarship Award",
      Year: "2023",
    },
    {
      Institution: "Algonquin College",
      Location: "Ottawa",
      Program: "Electro-Mechanical Technician",
      Stream: "Electro-Mechanical (Robotics)",
      CGPA: "3.92/4.00",
      Award: "Allen Ryan Scholarship Award",
      Year: "2017",
    },
    {
      Institution: "Shanti Gyan Niketan Public School",
      Location: "New Delhi",
      Program: "High School",
      Stream: "Non-Medical (Physics, Chemistry and Math)",
      CGPA: "9.1/10.0",
      Award: "",
      Year: "2014",
    },
  ];

  return (
    <div className="education-container" id={props.id || ""} ref={ref}>
      <div className="education-heading">
        <h1 className="education-heading-title" style={styles.tagLine}>
          Education
        </h1>
        <p className="education-tagline" style={styles.tagLine}>
          {props.tagline}
        </p>
      </div>
      <div className="timeline-container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {Education.map((edu) => (
                <div className="timeline" key={edu.Program}>
                  <div
                    className="timeline-content"
                    key={edu.Program}
                    style={styles}
                  >
                    <div className="timeline-year">{edu.Year}</div>
                    <h3 className="title">{edu.Program}</h3>
                    <p>Stream: {edu.Stream}</p>
                    <h6 className="institute">
                      {edu.Institution}, {edu.Location}
                    </h6>
                    <p className="description">CGPA: {edu.CGPA}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
