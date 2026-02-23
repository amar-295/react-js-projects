import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual chnage in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4">
        <div className="w-full max-w-sm flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
