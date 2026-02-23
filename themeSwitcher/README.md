# Theme Switcher 🌓

A React application demonstrating how to implement a global Light/Dark mode toggle using the **React Context API** and **Tailwind CSS**.

## 🎯 What this project does

This project contains a minimal UI with a theme toggle button and a display card. Clicking the toggle switches the entire application between light and dark themes, updating the appearance of the card and background instantly.

## 🧠 Concepts Learned

- **React Context API (`createContext`, `useContext`, `Provider`)**: Instead of passing props down manually through every component (prop drilling), this project uses a global `ThemeProvider` to share the current `themeMode` and the `lightTheme`/`darkTheme` functions across the app.
- **Custom Hooks**: Wrapping the Context usage into a custom `useTheme()` hook for cleaner imports and usage inside components like the toggle button and the card.
- **`useEffect` for DOM Manipulation**: Using `useEffect` to watch for state changes in `themeMode` and dynamically injecting or removing the `"dark"` and `"light"` CSS classes directly on the root `<html>` element.
- **Tailwind Dark Mode**: Using Tailwind's built-in `dark:` variant classes (like `dark:bg-gray-800` or `dark:text-white`) which are automatically applied when the `dark` class is present on the HTML tag.

## 🚀 How to run it locally

1. Ensure Node.js is installed.
2. Clone this repository and open your terminal in the `themeSwitcher` directory.
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Follow the local link (e.g., `http://localhost:5173`) to view the app!
