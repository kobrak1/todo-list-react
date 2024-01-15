import React from "react";
import { useTodo } from "../context/TodoContext";

const ContentFooter = () => {
  const { itemCount, filter, setFilter, todos, setTodos } = useTodo();
  return (
    <footer className="footer">
      <meta property="todo_done" content="[count(todo where done)]" />
      <meta property="todo_left" content="[count(todo where !done)]" />

      <span className="todo-count">
        <b>{itemCount}</b> item{itemCount > 1 && "s"} left
      </span>

      <meta property="active_filter" content="all" mv-storage="none" />
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => setTodos(todos.filter((item) => !item.completed))}>
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
