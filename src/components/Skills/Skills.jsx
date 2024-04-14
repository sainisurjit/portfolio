import { forwardRef, useContext } from "react";
import "./Skills.css";
import Skill from "./Skill";
import { ThemeContext } from "../Main/MainContainer";

const Skills = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const style = {
    backgroundColor: darkTheme ? "#262626" : "#e7f0f8ef",
    textStyle: {
      color: darkTheme ? "#f8f8f8" : "#212529",
    },
    tagLine: {
      color: darkTheme ? "#ACBCFF" : "#4C4C6D",
    },
  };
  const skills = [
    {
      name: "Python",
      confidence: 90,
      icon: require("./../../../Assets/python.png"),
    },
    {
      name: "Javascript",
      confidence: 80,
      icon: require("./../../../Assets/js.png"),
    },
    {
      name: "Java",
      confidence: 75,
      icon: require("./../../../Assets/java.png"),
    },
    { name: "C", confidence: 65, icon: require("./../../../Assets/c.png") },
    { name: "C++", confidence: 67, icon: require("./../../../Assets/c++.png") },
    { name: "Git", confidence: 80, icon: require("./../../../Assets/git.png") },
    {
      name: "ML",
      confidence: 68,
      icon: require("./../../../Assets/ml.png"),
    },
    {
      name: "AI",
      confidence: 73,
      icon: require("./../../../Assets/ai.png"),
    },
    {
      name: "Tensorflow",
      confidence: 63,
      icon: require("./../../../Assets/tf.png"),
    },
    {
      name: "Node.js",
      confidence: 80,
      icon: require("./../../../Assets/node.png"),
    },
    {
      name: "React.js",
      confidence: 67,
      icon: require("./../../../Assets/react.png"),
    },
    {
      name: "Next.js",
      confidence: 65,
      icon: require("./../../../Assets/next.png"),
    },
    {
      name: "Express.js",
      confidence: 90,
      icon: require("./../../../Assets/express.png"),
    },
    {
      name: "Haskell",
      confidence: 80,
      icon: require("./../../../Assets/haskell.png"),
    },
    { name: "SQL", confidence: 90, icon: require("./../../../Assets/sql.png") },
    {
      name: "GCP",
      confidence: 80,
      icon: require("./../../../Assets/GCP.png"),
    },
    {
      name: "Kubernetes",
      confidence: 30,
      icon: require("./../../../Assets/kubernetes.png"),
    },
    {
      name: "Swift",
      confidence: 40,
      icon: require("../../../Assets/swift.png"),
    },
    {
      name: "Docker",
      confidence: 90,
      icon: require("./../../../Assets/docker.png"),
    },
    {
      name: "Django",
      confidence: 75,
      icon: require("./../../../Assets/dj.png"),
    },
    {
      name: "Dart",
      confidence: 65,
      icon: require("./../../../Assets/dart.png"),
    },
    {
      name: "MongoDB",
      confidence: 82,
      icon: require("./../../../Assets/mongodb.png"),
    },
    {
      name: "MySQL",
      confidence: 60,
      icon: require("../../../Assets/mysql.png"),
    },
  ];

  return (
    <div className="skills-container" style={style}>
      <div className="skills-heading">
        <h1 className="skills-heading-title" style={style.tagLine}>
          Skills
        </h1>
        <p className="skills-tagline" style={style.tagLine}>
          {props.tagline}
        </p>
      </div>
      <div className="skills-section">
        <div className="illustration"></div>
        <div className="skill-container" id={props.id || ""} ref={ref}>
          <div className="skills">
            {skills.map((skill) => (
              <Skill
                name={skill.name}
                icon={skill.icon}
                key={skill.name}
                confidence={skill.confidence}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
