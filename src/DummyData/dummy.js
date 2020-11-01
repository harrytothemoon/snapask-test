import { v4 as uuidv4 } from "uuid";
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

export default todos;
