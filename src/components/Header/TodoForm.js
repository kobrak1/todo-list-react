import { Field, Form, Formik } from "formik";
import validations from "./Validations";
import { useTodo } from "../../context/TodoContext";

const TodoForm = () => {
  // get TodoContext
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{ todo: "" }}
      validationSchema={validations}
      onSubmit={(values, bag) => {
        addTodo(values.todo)
        bag.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="todo"
          id="todo"
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </Form>
    </Formik>
  );
};

export default TodoForm;
