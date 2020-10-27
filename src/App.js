import "./App.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import RightNavbar from "./components/RightNavbar";

function App() {
  return (
    <div className="App">
      <div className="App-name">
        <h2>WEEK 1</h2>
        <h1>POMODOR</h1>
      </div>
      <div className="App-content">
        <TodoList />
        <Counter />
        <RightNavbar />
      </div>
    </div>
  );
}

export default App;
