import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <ul className="list-none" key={todo.id}>
          <li className="mt-4">
            <div className="flex justify-between items-center bg-zinc-800 py-4 py-2 rounded">
              
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}
