import React from "react";

const TodoList = () => {
  const todos = [1, 2, 3];
  return (
    <div className="todolist-container">
      <div className="todolist-input">
        <ul className="todolist-list">
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
        <input
          className="form-control form-control-sm"
          id="input"
          type="text"
          placeholder="Add A New Mission"
        />
      </div>
      <div className="todolist-cpmolete">4</div>
    </div>
  );
};

export default TodoList;
