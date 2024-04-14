import React from "react";
import { useContext } from "react";
import "./Skills.css";
import { ThemeContext } from "../Main/MainContainer";

function Skill(props) {
  const darkTheme = useContext(ThemeContext);

  const style = {
    backgroundColor: darkTheme ? "#313131" : "#f9f9f9",
    color: darkTheme ? "#cccccc" : "#505050",
    boxShadow: darkTheme
      ? "2px 2px 5px rgba(10, 10, 10, 0.7)"
      : "2px 2px 5px rgba(110, 110, 110, 0.5)",
    iconStyle: {
      backgroundColor: darkTheme ? "#dddddd" : "#303030",
    },
  };

  return (
    <div className="skill" style={style}>
      <div className="skillConfidence">
        <div className="icon-div" style={style.iconStyle}>
          <img src={props.icon} width="60px" height="60px" alt="no"></img>
        </div>
      </div>
      <div className="skillIcon">
        <h6 className="skill-title">{props.name}</h6>
      </div>
    </div>
  );
}

export default Skill;
