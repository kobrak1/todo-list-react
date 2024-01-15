import { useTodo } from "../../context/TodoContext";
import Item from "./Item";

export default function TodoList() {
  const { todos, filter } = useTodo();
  const filtered =
    filter !== "all"
      ? todos.filter((item) =>
          filter === "active"
            ? !item.completed
            : item.completed
        )
      : todos;

  console.log("Filtered:", filtered);
  return (
    <ul className="todo-list">
      {filtered.map((data) => (
        <Item data={data} key={data.id} />
      ))}
    </ul>
  );
}
