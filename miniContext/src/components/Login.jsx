import React, { useState, useContext } from "react";
import UserContext from "../Context/Context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="w-full bg-slate-800/50 backdrop-blur-md shadow-2xl border border-slate-700/50 rounded-2xl p-8 mb-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
        Login
      </h2>

      <div className="flex flex-col gap-4">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          placeholder="Username"
        />

        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          placeholder="Password"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-linear-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
