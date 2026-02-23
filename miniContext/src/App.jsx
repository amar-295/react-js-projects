import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-pink-500/30">
        <div className="text-center mb-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight mb-4">
            React Context{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-indigo-400">
              API
            </span>
          </h1>
          <p className="text-slate-400 max-w-sm mx-auto">
            A minimal React application demonstrating the Context API setup.
          </p>
        </div>

        <div className="w-full max-w-md">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
