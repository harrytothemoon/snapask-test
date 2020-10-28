import React from "react";
import icon_home_rightbar from "../image/tomato.png";
import icon_music_rightbar from "../image/music.png";
import icon_statistic_rightbar from "../image/chart.png";

const RightNavbar = () => {
  return (
    <div className="rightNavbar_container">
      <button className="Home_page nav_choose">
        <img
          src={icon_home_rightbar}
          className="icon_home_rightbar"
          alt="home"
        />
      </button>
      <button className="Music_page">
        <img
          src={icon_music_rightbar}
          className="icon_music_rightbar"
          alt="home"
        />
      </button>
      <button className="Statistic_page">
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
