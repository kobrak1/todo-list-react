import React from "react";
import TodoForm from "./TodoForm";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const {theme} = useTheme();
  return (
    <header className="header">
      <h1 style={{color:`${theme === true ? '#bfa17a' : ''}`}}>your todos</h1>
      <TodoForm />
    </header>
  );
};

export default Header;
