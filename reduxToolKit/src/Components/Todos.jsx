import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos({ setCurrentEdit }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-700/30 rounded-lg border border-gray-600/50 border-dashed">
        <p className="text-gray-400">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-600 hover:border-indigo-500/50 transition-colors duration-200 group"
        >
          <span className="text-gray-100 font-medium wrap-break-words w-full pr-4">
            {todo.text}
          </span>

          <div className="flex gap-2 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setCurrentEdit(todo)}
              className="p-2 bg-gray-600 hover:bg-blue-600 text-gray-300 hover:text-white rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Edit Todo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 bg-gray-600 hover:bg-red-600 text-gray-300 hover:text-white rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500"
              title="Delete Todo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
