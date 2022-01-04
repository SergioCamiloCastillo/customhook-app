import React from "react";
import useTodos from "./hooks/useTodos";

const initialTodos = [
  {
    id: 1,
    title: "Aprender react",
  },
  {
    id: 2,
    title: "Aprender node",
  },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
  return (
    <div>
      <button onClick={()=>addTodo({ title: "Nueva Tarea" })}>Add</button>
      <ul>
        {todos.map((item) => (
          <li>
            {item.title}&nbsp;<button onClick={()=>deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
