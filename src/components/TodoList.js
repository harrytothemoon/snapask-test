import React, { useState, useEffect } from "react";
import icon_play_todolist from "../image/play.png";
import icon_plus_todolist from "../image/plus.png";
import { v4 as uuidv4 } from "uuid";
import { Flip } from "react-toastify";

const TodoList = (props) => {
  const {
    hanldeTimesrunStatus,
    hanldeTaskAmount,
    hanldeDisplayModal,
    timesUp,
    toast,
  } = props;
  const todos = [
    {
      id: uuidv4(),
      title: "The First Thing To Do Today",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "The Second Thing To Do Today",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "The Third Thing To Do Today",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "The Forth Thing To Do Today",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "The Completed Thing To Do Today",
      completed: true,
    },
  ];
  const [todo, setTodo] = useState(todos);
  const [addTodo, setAddTodo] = useState("");
  const [ongoingIdex, setOngoingIdex] = useState(todo[0].id);
  const [animationId, setAnimationId] = useState("idle");

  useEffect(() => {
    let newTodo = [...todo];
    if (timesUp === "start") {
      setOngoingIdex(newTodo.findIndex((item) => item.completed === false));
    }
    if (timesUp !== "over") return;
    newTodo[ongoingIdex].completed = true;
    newTodo.push(newTodo.splice(ongoingIdex, 1)[0]);
    setTodo(newTodo);
  }, [timesUp]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    hanldeTaskAmount(todo.filter((item) => !item.completed).length);
  }, [todo]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckChange = (e, id) => {
    let targetIndex;
    if (!e.checked && todo.filter((x) => !x.completed).length > 4) {
      return toast.info("Please do not exceed five to-do tasks!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "exceed-five",
        closeButton: false,
      });
    }
    setAnimationId(e.id);
    setTimeout(() => {
      let newTodo = [...todo].map((item, i) => {
        if (item.id === id) {
          if (e.id.includes("complete_content")) item.completed = false;
          if (e.id.includes("todo_toggle")) item.completed = true;
          targetIndex = i;
        }
        return item;
      });
      newTodo.push(newTodo.splice(targetIndex, 1)[0]);
      setTodo(newTodo);
      setAnimationId("idle");
    }, 400);
  };

  const handleChangeTask = (id) => {
    let newTodo = [...todo];
    let targetIndex = newTodo.findIndex((item) => item.id === id);
    newTodo.unshift(newTodo.splice(targetIndex, 1)[0]);
    hanldeTimesrunStatus("start");
    setTodo(newTodo);
  };

  const handleAddInput = (value) => {
    if (todo.filter((x) => !x.completed).length > 4) {
      return toast.info("Please do not exceed five to-do tasks!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "exceed-five",
        closeButton: false,
      });
    }
    if (value.length > 25) {
      return toast.info("Please do not enter more than 25 characters!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "25-characters",
        closeButton: false,
      });
    }
    if (value.length === 0) {
      return toast.info("Input value cannot be empty!", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "value-empty",
        closeButton: false,
      });
    }
    let newTodo = [...todo];
    newTodo.push({
      id: uuidv4(),
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

  const completedTask = () => (
    <div>
      <h1 className="completedTask_title">Completed Task</h1>
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
    toast(completedTask, {
      transition: Flip,
      autoClose: false,
      position: toast.POSITION.TOP_CENTER,
      toastId: "completed-item-all",
      closeOnClick: false,
      onOpen: () => hanldeDisplayModal(true),
      onClose: () => hanldeDisplayModal(false),
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
                    checked={animationId === `todo_toggle-${todo.id}`}
                    onChange={(e) => handleCheckChange(e.target, todo.id)}
                  />
                  <label
                    className="todo_content"
                    for={"todo_toggle-" + todo.id}
                  >
                    <p
                      className={
                        animationId === `todo_toggle-${todo.id}`
                          ? "complete_line-through"
                          : null
                      }
                    >
                      {todo.title}
                    </p>
                  </label>
                  <button
                    className="todo_play"
                    disabled={timesUp === "start" ? true : null}
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
                  checked={animationId !== `complete_content-${todo.id}`}
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
