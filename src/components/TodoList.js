import React from "react";
import playPic from "../image/play.png";
import plusPic from "../image/plus.png";
import checkPic from "../image/checked.png";

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
          {todos.map((todo) => (
            <li>
              <div class="todo_item">
                <input className="todo_toggle" type="checkbox" />
                <label className="todo_content">{todo}</label>
                <button className="todo_play">
                  <img
                    src={playPic}
                    className="todo_playPic"
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
              src={plusPic}
              className="todo_plusPic"
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
          <img
            src={checkPic}
            className="complete_checkPic"
            alt="todo play button"
          />
          <label className="complete_content">
            The Complete Thing To Do Today
          </label>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
