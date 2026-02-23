import { useState } from "react"

function App() {

  const [colour, setColour] = useState("magenta")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: colour}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex felx-wrap justify-center gap-7 shadow-xl bg-white px-3 py-2 rounded-3xl"> 
        <button
        onClick={() => setColour("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >Red</button>

        <button
        onClick={() => setColour("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}
        >Orange</button>

        <button
        onClick={() => setColour("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}
        >Blue</button>

        <button
        onClick={() => setColour("gray")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "gray"}}
        >Gray</button>

        <button
        onClick={() => setColour("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "yellow"}}
        >Yellow</button>

        <button
        onClick={() => setColour("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "pink"}}
        >Pink</button>

      </div>
    </div>
   </div>
  )
}

export default App
