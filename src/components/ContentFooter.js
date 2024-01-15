import React from "react";
import { useTodo } from "../context/TodoContext";

const ContentFooter = () => {
  const {itemCount} = useTodo();
  return (
    <footer className="footer">
      <meta property="todo_done" content="[count(todo where done)]" />
      <meta property="todo_left" content="[count(todo where !done)]" />

      <span className="todo-count">{itemCount} items left</span>

      <meta property="active_filter" content="all" mv-storage="none" />
      <ul className="filters">
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Completed</a>
        </li>
      </ul>

      <button hidden="[todo_done = 0]" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
