import { forwardRef, useContext } from "react";
import Profile from "./Profile/Profile";
import "./Home.css";
import { ThemeContext } from "../Main/MainContainer";

const Home = forwardRef((props, ref) => {
  const darkTheme = useContext(ThemeContext);

  const style = {
    backgroundColor: darkTheme ? "#222222" : "#f9f9f9",
  };
  return (
    <div className="home-container" id={props.id || ""} ref={ref} style={style}>
      <Profile
        onComponentClick={props.onComponentClick}
        contactRef={props.contactRef}
      />
    </div>
  );
});

export default Home;
