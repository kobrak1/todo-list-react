import React from "react";

const Footer = () => {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/ahmet-burak-karhan-972911153/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3C45FA" }}
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
          style={{ color: "#3C45FA" }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
