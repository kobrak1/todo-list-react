import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const storedTodos = localStorage.getItem('todo');
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState( storedTodos ? JSON.parse(storedTodos) : []);

  console.log(storedTodos);
  // set the todo data whenever a todo changed
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])

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

//   filter function
const handleFilter = (data) => {
    const clonedTodos = [...todos]
    const filteredTodos = clonedTodos.filter((e) => e.target.value === data)
    console.log(filteredTodos);
}

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
    handleFilter,
    filter,
    setFilter,
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
