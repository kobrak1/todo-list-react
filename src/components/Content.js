import React from "react";
import ContentFooter from "./ContentFooter";

const Content = () => {
  return (
    <section className="main">
      <input
        property="toggle_all"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul className="todo-list">
      <li className="completed">
          <div className="view">
            <input property="done" className="toggle" type="checkbox" defaultChecked />
            <label property="text">Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input property="done" className="toggle" type="checkbox" />
            <label property="text">Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input property="done" className="toggle" type="checkbox" />
            <label property="text">Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
      <ContentFooter />
    </section>
  );
};

export default Content;
