# Todo App with Context API & Local Storage

A fully functional React Todo application that demonstrates advanced state management using the **Context API** and data persistence using browser **Local Storage**.

## 🎯 Educational Objectives

This project was built to learn and practice:

1.  **Context API for Global State:** Avoiding "prop drilling" by creating a global `TodoContext` to provide state and functions directly to the components that need them (`TodoForm` and `TodoItem`).
2.  **Local Storage Integration:** Using `useEffect` to synchronize the React state with the browser's `localStorage`, ensuring the todos persist even after the page is refreshed.
3.  **Complex State Updates:** Handling arrays of objects in state. Methods include adding new objects, mapping to update specific properties (like toggling completion or editing text), and filtering to delete items.
4.  **Custom Hooks:** Creating a `useTodo` hook for cleaner consumption of the Context API inside components.

## 🛠️ Tech Stack

- React (with Vite)
- React Hooks (`useState`, `useEffect`, `useContext`)
- Context API
- Tailwind CSS (for styling)

## 🚀 How to Run Locally

1.  Navigate into the project directory:
    ```bash
    cd todoContext
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
