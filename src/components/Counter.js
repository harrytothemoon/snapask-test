import React from "react";
import playPic from "../image/play.png";
import canclePic from "../image/cancle.png";
import counterPic2 from "../image/tomatobig.svg";

const Counter = () => {
  return (
    <div className="counter_container">
      <div className="timer">
        <img
          src={counterPic2}
          className="counterPic"
          alt="counter background"
        />
        <h1 className="input_time">25:00</h1>
      </div>
      <div className="counter_divider"></div>
      <div className="counter_footer">
        <button className="start_button">
          <img
            src={playPic}
            className="counter_playPic"
            alt="counter play button"
          />
        </button>
        <button className="cancle_button">
          <img
            src={canclePic}
            className="counter_canclePic"
            alt="counter cancle button"
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
