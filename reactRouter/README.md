# React Router Exploration 🛣️

This project is a beginner-friendly hands-on implementation of client-side routing using `react-router-dom` in a React application.

## 🎯 What this project does

This application demonstrates how to navigate between different pages (Home, About, Contact, User profile, and Github profile) without reloading the browser page. It uses a common layout with a persistent header and footer.

## 🧠 Concepts Learned

- **React Router Setup**: Using `createBrowserRouter` and `RouterProvider` to initialize routing in `main.jsx`.
- **Nested Routes & Outlet**: Using a parent `<Route>` with a common `<Layout />` component that persists across pages, while swapping out the main content using the `<Outlet />` element.
- **Navigation (Link vs a-tag)**: Using `<Link>` and `<NavLink>` instead of traditional `<a href="">` tags to prevent full page reloads and instantly load components.
- **Dynamic Routing**: Creating routes that accept dynamic parameters (e.g., `path='user/:userid'`) and accessing them using the `useParams` hook.
- **Data Loaders**: Using the `loader` property on routes (like the Github route) to fetch API data _before_ the component even renders, improving performance and user experience.

## 🚀 How to run it locally

1. Make sure Node.js is installed on your machine.
2. Clone or download this project, then open your terminal in the `reactRouter` directory.
3. Install the project dependencies (including `react-router-dom`):
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open the link provided in your terminal (usually `http://localhost:5173`) to see the application!
