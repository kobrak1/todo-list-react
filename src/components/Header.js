import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <form mv-action="set(new_todo, new_todo.trim()), if(new_todo != '', add(new_todo, todo) & set(new_todo, ''))">
        <input
          property="new_todo"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
