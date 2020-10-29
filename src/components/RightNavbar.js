import React from "react";
import icon_home_rightbar from "../image/tomato.png";
import icon_music_rightbar from "../image/music.png";
import icon_statistic_rightbar from "../image/chart.png";

const { useState } = React;

const RightNavbar = () => {
  const [toggleClass, setToggleClass] = useState("home");
  const handleClick = (type) => {
    setToggleClass(type);
  };

  return (
    <div className="rightNavbar_container">
      <button
        onClick={() => handleClick("home")}
        className={`Home_page ${toggleClass === "home" ? "nav_choose" : null}`}
      >
        <img
          src={icon_home_rightbar}
          className="icon_home_rightbar"
          alt="home"
        />
      </button>
      <button
        onClick={() => handleClick("music")}
        className={`Music_page ${
          toggleClass === "music" ? "nav_choose" : null
        }`}
      >
        <img
          src={icon_music_rightbar}
          className="icon_music_rightbar"
          alt="home"
        />
      </button>
      <button
        onClick={() => handleClick("statistic")}
        className={`Statistic_page ${
          toggleClass === "statistic" ? "nav_choose" : null
        }`}
      >
        <img
          src={icon_statistic_rightbar}
          className="icon_statistic_rightbar"
          alt="home"
        />
      </button>
    </div>
  );
};

export default RightNavbar;
