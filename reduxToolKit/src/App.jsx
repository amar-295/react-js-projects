import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  const [currentEdit, setCurrentEdit] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden text-white border border-gray-700">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-center shadow-md">
          <h1 className="text-3xl font-bold tracking-tight">
            Redux Toolkit Todo
          </h1>
          <p className="text-indigo-100 mt-2 text-sm">
            Organize your tasks efficiently
          </p>
        </div>
        <div className="p-6">
          <AddTodo currentEdit={currentEdit} setCurrentEdit={setCurrentEdit} />
          <div className="mt-8">
            <Todos setCurrentEdit={setCurrentEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
