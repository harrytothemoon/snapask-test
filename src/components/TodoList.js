import React, { useState, useEffect } from "react";
import icon_play_todolist from "../image/play.png";
import icon_plus_todolist from "../image/plus.png";
import { uuid } from "uuidv4";
import { Zoom } from "react-toastify";

const TodoList = (props) => {
  const { hanldeTimesrunStatus, timesUp, toast } = props;
  const todos = [
    {
      id: uuid(),
      title: "The First Thing To Do Today",
      completed: false,
    },
    {
      id: uuid(),
      title: "The Second Thing To Do Today",
      completed: false,
    },
    {
      id: uuid(),
      title: "The Third Thing To Do Today",
      completed: false,
    },
    {
      id: uuid(),
      title: "The Forth Thing To Do Today",
      completed: false,
    },
    {
      id: uuid(),
      title: "The Completed Thing To Do Today",
      completed: true,
    },
  ];
  const [todo, setTodo] = useState(todos);
  const [addTodo, setAddTodo] = useState("");

  useEffect(() => {
    if (timesUp !== "over") return;
    let newTodo = [...todo];
    newTodo[0].completed = true;
    newTodo.push(newTodo.splice(0, 1)[0]);
    setTodo(newTodo);
  }, [timesUp]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckChange = (e, id) => {
    let targetIndex;
    let newTodo = [...todo].map((item, i) => {
      if (item.id === id) {
        item.completed = e.checked;
        targetIndex = i;
      }
      return item;
    });
    newTodo.push(newTodo.splice(targetIndex, 1)[0]);
    setTodo(newTodo);
  };

  const handleChangeTask = (id) => {
    hanldeTimesrunStatus("start");
    let newTodo = [...todo];
    let targetIndex = newTodo.findIndex((item) => item.id === id);
    newTodo.unshift(newTodo.splice(targetIndex, 1)[0]);
    setTodo(newTodo);
  };

  const handleAddInput = (value) => {
    if (todo.filter((x) => !x.completed).length > 4) {
      return toast.info("Please do not exceed five to-do tasks!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "exceed-five",
      });
    }
    if (value.length > 25) {
      return toast.info("Please do not enter more than 25 characters!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "25-characters",
      });
    }
    if (value.length === 0) {
      return toast.info("Input value cannot be empty!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "value-empty",
      });
    }
    let newTodo = [...todo];
    newTodo.push({
      id: uuid(),
      title: value,
      completed: false,
    });
    setAddTodo("");
    setTodo(newTodo);
  };

  const filterKey = (key) => {
    if (key === "Enter") return handleAddInput(addTodo);
    return;
  };

  const Msg = () => (
    <div>
      <h1>Completed Task</h1>
      {todo
        .map((todo) => {
          return todo.completed ? (
            <div className="complete_item">
              <input
                id={"complete_content-" + todo.id}
                className="complete_check"
                type="checkbox"
                checked={todo.completed}
                disabled={true}
                style={{
                  cursor: "default",
                }}
              />
              <label
                className="complete_content"
                style={{
                  cursor: "default",
                }}
              >
                <p>{todo.title}</p>
              </label>
            </div>
          ) : null;
        })
        .reverse()}
    </div>
  );
  const moreShow = () => {
    toast(Msg, {
      transition: Zoom,
      autoClose: false,
      position: toast.POSITION.TOP_CENTER,
      toastId: "completed-item-all",
      closeOnClick: false,
    });
  };
  return (
    <div className="todolist_container">
      <div className="todolist">
        <ul className="todolist_list">
          {todo.map((todo) => {
            return !todo.completed ? (
              <li>
                <div class="todo_item">
                  <input
                    id={"todo_toggle-" + todo.id}
                    className="todo_toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => handleCheckChange(e.target, todo.id)}
                  />
                  <label
                    className="todo_content"
                    for={"todo_toggle-" + todo.id}
                  >
                    <p>{todo.title}</p>
                  </label>
                  <button
                    className="todo_play"
                    style={{
                      cursor: timesUp === "start" ? "not-allowed" : "pointer",
                    }}
                    onClick={() => handleChangeTask(todo.id)}
                  >
                    <img
                      src={icon_play_todolist}
                      className="icon_play_todolist"
                      alt="todo play button"
                      style={{
                        filter: timesUp === "start" ? "grayscale(60%)" : null,
                      }}
                    />
                  </button>
                </div>
              </li>
            ) : null;
          })}
        </ul>
        <div className="todo_inputPart">
          <input
            className="todo_input"
            type="text"
            placeholder="Add A New Mission..."
            value={addTodo}
            onChange={(e) => setAddTodo(e.target.value)}
            onKeyDown={(e) => filterKey(e.key)}
          />
          <button className="todo_plus">
            <img
              src={icon_plus_todolist}
              className="icon_plus_todolist"
              alt="todo plus button"
              onClick={() => handleAddInput(addTodo)}
            />
          </button>
        </div>
      </div>
      <div className="todo_completePart">
        <div className="complete_title">
          <span>Recently completed--</span>
          <button onClick={moreShow}>More</button>
        </div>
        {todo
          .map((todo) => {
            return todo.completed ? (
              <div className="complete_item">
                <input
                  id={"complete_content-" + todo.id}
                  className="complete_check"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleCheckChange(e.target, todo.id)}
                />
                <label
                  className="complete_content"
                  for={"complete_content-" + todo.id}
                >
                  <p>{todo.title}</p>
                </label>
              </div>
            ) : null;
          })
          .reverse()}
      </div>
    </div>
  );
};

export default TodoList;
