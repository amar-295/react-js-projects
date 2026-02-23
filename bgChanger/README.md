# React Background Changer 🎨

A simple, interactive background color changer built with **React**, **Vite**, and **Tailwind CSS**.

![License](https://img.shields.io/github/license/amar-295/react-bg-changer)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)

## ✨ Features & Implementation

### 1. 🌈 Dynamic State Management

Uses React's `useState` hook to manage the background color in real-time. The UI updates instantly as state changes.

```javascript
/* State Initialization */
const [colour, setColour] = useState("magenta");

/* Applying State to UI */
<div
  className="w-full h-screen duration-200"
  style={{ backgroundColor: colour }}
>
  {/* Content */}
</div>;
```

### 2. ⚡ Event Handling

Buttons trigger state updates via `onClick` handlers, passing specific color values to the state setter.

```javascript
<button
  onClick={() => setColour("red")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{ backgroundColor: "red" }}
>
  Red
</button>
```

### 3. 🎨 Responsive Design

Built with Tailwind CSS for a fully responsive layout that works on mobile and desktop.

- `fixed`: Keeps the control bar at the bottom.
- `flex-wrap`: Ensures buttons wrap gracefully on smaller screens.
- `duration-200`: Adds smooth transitions for background color changes.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Configured for [Netlify](https://www.netlify.com/)

## 🚀 Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/amar-295/react-bg-changer.git
    cd bgChanger
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## 📦 Building for Production

```bash
npm run build
```

## ☁️ Deployment

Includes `netlify.toml` for easy deployment on Netlify.

## 📄 License

Open source under the [MIT License](LICENSE).
