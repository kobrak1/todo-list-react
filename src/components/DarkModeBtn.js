import React from "react";
import { useTheme } from "../context/ThemeContext";

const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`dark-mode-btn ${theme === true && "dark"}`}
      onClick={() => setTheme(!theme)}
    >
      Switch to {theme === false ? "Dark" : "Light"}
    </button>
  );
};

export default DarkModeBtn;
