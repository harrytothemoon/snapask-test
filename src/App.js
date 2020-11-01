import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import RightNavbar from "./components/RightNavbar";
import TitlePic from "./image/tomato-title.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "./components/Backdrop";
import "./App.css";

function App() {
  const [timesUp, setTimesUp] = useState("idle");
  const [taskAmount, setTaskAmount] = useState(4);
  const [displayModal, setDisplayModal] = useState(false);
  const hanldeTimesrunStatus = (status) => {
    setTimesUp(status);
  };
  const hanldeTaskAmount = (amount) => {
    setTaskAmount(amount);
  };
  const hanldeDisplayModal = (status) => {
    setDisplayModal(status);
  };

  return (
    <div className="App">
      <div className="App_namePart">
        <h2 className="App_namePart_week">WEEK 1</h2>
        <div className="App_namePart_title">
          <span>POMODOR</span>
          <img
            src={TitlePic}
            className="name_titlePic"
            alt="title pic"
            height="100px"
          />
        </div>
      </div>
      <div className="App_content">
        <TodoList
          hanldeTimesrunStatus={hanldeTimesrunStatus}
          hanldeTaskAmount={hanldeTaskAmount}
          hanldeDisplayModal={hanldeDisplayModal}
          timesUp={timesUp}
          toast={toast}
        />
        <Counter
          hanldeTimesrunStatus={hanldeTimesrunStatus}
          timesUp={timesUp}
          toast={toast}
          taskAmount={taskAmount}
        />
        <RightNavbar />
        <ToastContainer />
      </div>
      <Backdrop displayModal={displayModal} />
    </div>
  );
}

export default App;
