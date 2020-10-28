import React from "react";
import icon_home_rightbar from "../image/tomato.png";
import icon_music_rightbar from "../image/music.png";
import icon_statistic_rightbar from "../image/chart.png";

const RightNavbar = () => {
  return (
    <div className="rightNavbar_container">
      <a className="Home_page nav_choose" href="/">
        <img
          src={icon_home_rightbar}
          className="icon_home_rightbar"
          alt="home"
        />
      </a>
      <a className="Music_page" href="/">
        <img
          src={icon_music_rightbar}
          className="icon_music_rightbar"
          alt="home"
        />
      </a>
      <a className="Statistic_page" href="/">
        <img
          src={icon_statistic_rightbar}
          className="icon_statistic_rightbar"
          alt="home"
        />
      </a>
    </div>
  );
};

export default RightNavbar;
