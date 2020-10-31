import React, { useState, useEffect } from "react";
import icon_play＿counter from "../image/play.png";
import icon_cancle_counter from "../image/cancle.png";
import icon_tomato_counter from "../image/tomatobig.svg";

const Counter = (props) => {
  const { hanldeTimesrunStatus, timesUp, toast } = props;
  const [mins, setMins] = useState("0");
  const [timerStatus, setTimerStatus] = useState("idle");
  const [time, setTime] = useState(0);
  //TODO 判斷有代辦事項才能按開始
  const handleClickStart = (min) => {
    const minutes = Number(min);
    if (minutes <= 0) {
      hanldeTimesrunStatus("idle");
      toast.info("Please enter a value greater than zero!", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "greater-than-zero",
      });
      return;
    } else if (isNaN(minutes)) {
      hanldeTimesrunStatus("idle");
      toast.info("Please enter a valid value!", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "valid-value",
      });
      return;
    } else if (minutes > 30) {
      hanldeTimesrunStatus("idle");
      toast.info("Please enter a time within 30 minutes!", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "30-minutes",
      });
      return;
    }
    setTimerStatus("start");
    hanldeTimesrunStatus("start");
  };

  const handleStop = () => {
    setTimerStatus("idle");
    hanldeTimesrunStatus("idle");
    document.title = "Pomodor App";
  };

  const render = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    const formatTime = `${minutes}:${String(seconds).padStart(2, 0)}`;
    document.title = `remaining time: ${formatTime}`;
    setTime(formatTime);
  };

  useEffect(() => {
    if (timerStatus === "idle") return;
    render(mins * 60);
    const endTime = Date.now() + mins * 60 * 1000 + 1000;
    let timerId = setInterval(() => {
      const remainingSeconds = Math.floor((endTime - Date.now()) / 1000);
      if (remainingSeconds < 0) {
        document.title = "Pomodor App";
        clearInterval(timerId);
        hanldeTimesrunStatus("over");
        toast.info("Time's up!", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "Times-up",
          autoClose: 2000,
          hideProgressBar: true,
        });
        setTimerStatus("idle");
        return;
      }
      render(remainingSeconds);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timerStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (timesUp !== "start") return;
    handleClickStart(mins);
  }, [timesUp]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="counter_container">
      <div className="timer">
        <img
          src={icon_tomato_counter}
          className="icon_tomato_counter"
          alt="counter background"
        />
        <div
          className="input_time_part"
          style={{ display: timerStatus === "idle" ? "block" : "none" }}
        >
          <input
            type="text"
            className="input_time_idle"
            placeholder="25"
            onChange={(e) => setMins(e.target.value)}
          />
          mins
        </div>
        <div
          className="input_time_part"
          style={{ display: timerStatus === "start" ? "block" : "none" }}
        >
          <div className="input_time_start">{time}</div>
        </div>
      </div>
      <div className="counter_divider"></div>
      <div className="counter_footer">
        <button
          onClick={() => handleClickStart(mins)}
          className="start_button"
          disabled={timerStatus === "start" ? true : null}
          style={{
            cursor: timerStatus === "start" ? "not-allowed" : "pointer",
          }}
        >
          <img
            src={icon_play＿counter}
            className="icon_play＿counter"
            alt="counter play button"
            style={{
              filter: timerStatus === "start" ? "grayscale(60%)" : null,
            }}
          />
        </button>
        <button onClick={() => handleStop()} className="cancle_button">
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
