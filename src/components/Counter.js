import React from "react";

const Counter = () => {
  return (
    <div className="counter-container">
      <div className="timer">
        <div className="select-time">
          <input type="text" className="input-time" placeholder="25:00" />
        </div>
      </div>
      <div>
        <button className="start-button">Start</button>
        <button className="top-button">Stop</button>
      </div>
    </div>
  );
};

export default Counter;
