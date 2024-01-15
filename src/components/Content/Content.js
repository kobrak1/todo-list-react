import React from "react";
import ContentFooter from "../ContentFooter";
import TodoList from "./TodoList";
import { useTodo } from "../../context/TodoContext";

const Content = () => {
  const { todos } = useTodo();
  console.log("from Content.js",todos);
  return (
    <section className="main">
      <input
        property="toggle_all"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
      <ContentFooter />
    </section>
  );
};

export default Content;
