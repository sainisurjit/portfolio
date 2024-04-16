import { forwardRef, useContext } from "react";
import "./Resume.css";
import { ThemeContext } from "../Main/MainContainer";

// eslint-disable-next-line react/display-name
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
      Institution: "Kurukshetra University",
      Location: "Kurukshetra",
      Program: "Ph.D (Geography)",
      Stream: "Risk and Vulnerability Assessment of Flood Hazard",
      Year: "2017",
    },
    {
      Institution: "Institute of Town Planners India",
      Location: "New Delhi",
      Program: "Master Degree in Town & Country Planning",
      Stream: "Urban Planning",
      Year: "2015",
    },
    {
      Institution: "Indian Institute of Remote Sensing",
      Location: "Dehradun",
      Program: "Diploma in Remote Sensing & GIS",
      Stream: "Remote Sensing & GIS",
      Year: "2002",
    },
    {
      Institution: "Kurukshetra University",
      Location: "Kurukshetra",
      Program: "Master of Science",
      Stream: "Geography",
      Year: "2000",
    },
    {
      Institution: "Kurukshetra University",
      Location: "Kurukshetra",
      Program: "Bachelor of Science",
      Stream: "Geography",
      Year: "1997",
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
