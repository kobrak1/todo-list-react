import React from "react";
import { useTodo } from "../context/TodoContext";

const ContentFooter = () => {
  const {itemCount, todos, setTodos} = useTodo();
  return (
    <footer className="footer">
      <meta property="todo_done" content="[count(todo where done)]" />
      <meta property="todo_left" content="[count(todo where !done)]" />

      <span className="todo-count"> <b>{itemCount}</b> item{itemCount > 1 && 's' } left</span>

      <meta property="active_filter" content="all" mv-storage="none" />
      <ul className="filters">
        <li>
          <a href="#" onClick={() => setTodos(todos)}>All</a>
        </li>
        <li>
          <a href="#" onClick={() => setTodos(todos.filter((item) => item.completed === true))}>Active</a>
        </li>
        <li>
          <a href="#" onClick={() => setTodos(todos.filter((item) => item.completed === false))}>Completed</a>
        </li>
      </ul>

      <button hidden="[todo_done = 0]" className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
