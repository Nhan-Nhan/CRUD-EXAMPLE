import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  { id: "todo-0", name: "Task1", completed: true },
  { id: "todo-1", name: "Task2", completed: false },
  { id: "todo-2", name: "Task3", completed: false },
  { id: "todo-3", name: "Task4", completed: false },
  { id: "todo-4", name: "Task5", completed: false },
  { id: "todo-5", name: "Task6", completed: true },
  { id: "todo-6", name: "Task7", completed: false },
  { id: "todo-7", name: "Task8", completed: true },
  { id: "todo-8", name: "Task9", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <TodoApp tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
