import "./App.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import RightNavbar from "./components/RightNavbar";
import TitlePic from "./image/tomato-title.svg";

function App() {
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
        <TodoList />
        <Counter />
        <RightNavbar />
      </div>
    </div>
  );
}

export default App;
