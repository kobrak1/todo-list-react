import { useTodo } from "../../context/TodoContext";

export default function TodoList() {
  const { todos, handleDelete, handleChange } = useTodo();

  return (
    <ul className="todo-list">
      {todos.map((data) => (
        <li className={data.completed ? "completed" : ""} key={data.id}>
          <div className="view">
            <input
              property="done"
              className="toggle"
              type="checkbox"
              checked={data.completed}
              onChange={() => handleChange(data.id)}
            />
            <label property="text">{data.todo}</label>
            <button
              className="destroy"
              onClick={() => handleDelete(data.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
