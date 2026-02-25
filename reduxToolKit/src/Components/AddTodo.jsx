import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo({ currentEdit, setCurrentEdit }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentEdit) {
      setInput(currentEdit.text);
    } else {
      setInput("");
    }
  }, [currentEdit]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (currentEdit) {
      dispatch(updateTodo({ id: currentEdit.id, text: input }));
      setCurrentEdit(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-3">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
        className="w-full border border-gray-600 rounded-lg px-4 outline-none transition-all duration-200 bg-gray-700 text-white py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
      />
      <button
        type="submit"
        className={`rounded-lg px-6 py-2 font-medium text-white shadow-sm transition-all duration-200 shrink-0 hover:-translate-y-0.5
                ${currentEdit ? "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500" : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"} 
                focus:ring-2 focus:outline-none`}
      >
        {currentEdit ? "Update" : "Add Task"}
      </button>
      {currentEdit && (
        <button
          type="button"
          onClick={() => {
            setCurrentEdit(null);
            setInput("");
          }}
          className="rounded-lg px-4 py-2 font-medium bg-gray-600 text-white shadow-sm transition-all duration-200 shrink-0 hover:bg-gray-500 hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;
