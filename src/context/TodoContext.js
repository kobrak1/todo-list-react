import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 2,
      todo: "asdasd",
      completed: false,
    },
  ]);

  // addTodo function to add new items
  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), todo: text, completed: false }]);
  };

  // handle change function
  const handleChange = (id) => {
    const clonedTodos = [...todos];
    const itemIndex = clonedTodos.findIndex((item) => item.id === id);
    const item = clonedTodos[itemIndex];
    item.completed = !item.completed;
    setTodos(clonedTodos);
  };

  // delete function
  const handleDelete = (id) => {
    const clonedTodos = [...todos];
    const itemIndex = clonedTodos.findIndex((item) => item.id === id);
    console.log(itemIndex);
    const updatedTodos = clonedTodos.filter((e) => e.id !== id);
    setTodos(updatedTodos);
  };

  // shows how many items left
  const itemCount = todos.length;

  // exported values
  const values = {
    todos,
    setTodos,
    addTodo,
    itemCount,
    handleChange,
    handleDelete,
  };

  return (
    <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  // to check if the context used in the correct place
  if (context === undefined) {
    throw new Error(
      "This useTodo hook must be called inside the TodoProvider!"
    );
  }
  return context;
};
