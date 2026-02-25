# Redux Toolkit Todo Application

A simple, modern Todo application built with React, Redux Toolkit, and Tailwind CSS. This project serves as a learning exercise to understand Redux Toolkit (RTK) state management patterns.

## Features

- **Add Todos**: Quickly add new tasks.
- **Edit Todos**: Modify existing tasks directly in the list.
- **Delete Todos**: Remove completed or unwanted tasks.
- **Modern UI**: Styled with Tailwind CSS, featuring a responsive, dark-themed layout.

## Technologies Used

- React (Vite)
- Redux Toolkit (`@reduxjs/toolkit`)
- React Redux (`react-redux`)
- Tailwind CSS

## State Management

This application utilizes Redux Toolkit to manage the global state of the todos.

- **Store** (`src/app/store.js`): The centralized Redux store holding the application state tree.
- **Slice** (`src/features/todo/todoSlice.js`): Defines the state shape, initial empty state, and reducers (`addTodo`, `removeTodo`, `updateTodo`) for the Todo feature.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation & Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite in the terminal).
