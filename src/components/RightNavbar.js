import React from "react";
import homePicNav from "../image/tomato.png";
import musicPicNav from "../image/music.png";
import statisticPicNav from "../image/chart.png";

const RightNavbar = () => {
  return (
    <div className="rightNavbar-container">
      <a className="Home-page nav-choose" href="/" target="_blank">
        <img src={homePicNav} className="homePic" alt="home" />
      </a>
      <a className="Music-page" href="/" target="_blank">
        <img src={musicPicNav} className="musicPic" alt="home" />
      </a>
      <a className="Statistic-page" href="/" target="_blank">
        <img src={statisticPicNav} className="statisticPic" alt="home" />
      </a>
    </div>
  );
};

export default RightNavbar;
