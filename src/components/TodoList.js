import React from "react";
import icon_play_todolist from "../image/play.png";
import icon_plus_todolist from "../image/plus.png";

const TodoList = () => {
  const todos = [
    "The First Thing To Do Today",
    "The Second Thing To Do Today",
    "The Third Thing To Do Today",
    "The Forth Thing To Do Today",
  ];
  return (
    <div className="todolist_container">
      <div className="todolist">
        <ul className="todolist_list">
          {todos.map((todo, i) => (
            <li>
              <div class="todo_item">
                <input
                  id={"todo_toggle-" + i}
                  className="todo_toggle"
                  type="checkbox"
                />
                <label className="todo_content" for={"todo_toggle-" + i}>
                  <p>{todo}</p>
                </label>
                <button className="todo_play">
                  <img
                    src={icon_play_todolist}
                    className="icon_play_todolist"
                    alt="todo play button"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="todo_inputPart">
          <input
            className="todo_input"
            type="text"
            placeholder="Add A New Mission..."
          />
          <button className="todo_plus">
            <img
              src={icon_plus_todolist}
              className="icon_plus_todolist"
              alt="todo plus button"
            />
          </button>
        </div>
      </div>
      <div className="todo_completePart">
        <div className="complete_title">
          <span>Recently completed--</span>
          <a href="/">More</a>
        </div>
        <div className="complete_item">
          <input
            id="complete_content"
            className="complete_check"
            type="checkbox"
            checked
          />
          <label className="complete_content" for="complete_content">
            <p>The Complete Thing To Do Today</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
