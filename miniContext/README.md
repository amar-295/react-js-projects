# Mini Context API Example 📦

A lightweight React application designed specifically to learn and demonstrate the fundamentals of the **React Context API**.

## 🎯 What this project does

This project is a very simple "Login & Profile" flow. It allows a user to type a username and password into a `Login` component, and then displays that username in a separate `Profile` component. The components do not pass props to each other directly; instead, they share data globally through React Context.

## 🧠 Concepts Learned

- **React Context API Basics (`createContext`, `Provider`)**:
  - Creating a basic context (`Context.js`).
  - Creating a dedicated Provider component (`UserContextProvider.jsx`) that holds the state (`user`, `setUser`) and wraps children.
- **`useContext` Hook**:
  - Using `useContext` inside the `Login` component to set the global user state.
  - Using `useContext` inside the `Profile` component to read the global user state and display the welcome message.
- **Avoiding Prop Drilling**: Demonstrating how sibling or deeply nested components can share data without passing props through intermediate components (like `App.jsx`).

## 🚀 How to run it locally

1. Ensure Node.js is installed.
2. Clone this repository and open your terminal in the `miniContext` directory.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Follow the local link (e.g., `http://localhost:5173`) to view the app!
