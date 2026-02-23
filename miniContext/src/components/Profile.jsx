import React, { useContext } from "react";
import UserContext from "../Context/Context";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="w-full p-4 text-center text-slate-400 bg-slate-800/30 border border-slate-700/50 rounded-xl animate-pulse">
        Waiting for authentication...
      </div>
    );

  return (
    <div className="w-full p-6 text-center bg-linear-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm shadow-lg shadow-emerald-500/5">
      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
        🚀
      </div>
      <h3 className="text-xl text-emerald-400 font-semibold mb-2">
        Login Successful!
      </h3>
      <p className="text-slate-300">
        Welcome back,{" "}
        <span className="text-white font-bold text-lg">{user.username}</span>
      </p>
    </div>
  );
}

export default Profile;
