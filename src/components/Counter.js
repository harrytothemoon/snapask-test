import React from "react";
import icon_play＿counter from "../image/play.png";
import icon_cancle_counter from "../image/cancle.png";
import icon_tomato_counter from "../image/tomatobig.svg";

const Counter = () => {
  return (
    <div className="counter_container">
      <div className="timer">
        <img
          src={icon_tomato_counter}
          className="icon_tomato_counter"
          alt="counter background"
        />
        <h1 className="input_time">25:00</h1>
      </div>
      <div className="counter_divider"></div>
      <div className="counter_footer">
        <button className="start_button">
          <img
            src={icon_play＿counter}
            className="icon_play＿counter"
            alt="counter play button"
          />
        </button>
        <button className="cancle_button">
          <img
            src={icon_cancle_counter}
            className="icon_cancle_counter"
            alt="counter cancle button"
          />
        </button>
      </div>
    </div>
  );
};

export default Counter;
