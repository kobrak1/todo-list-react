import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const {theme} = useTheme();
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/ahmet-burak-karhan-972911153/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme ? '#bfa17a' : "#e0c5c5" }}
        >
          Burak Karhan
        </a>
      </p>
      <p>
        You can also check my other projects on{" "}
        <a
          href="https://github.com/kobrak1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme ? '#bfa17a' : "#e0c5c5" }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
