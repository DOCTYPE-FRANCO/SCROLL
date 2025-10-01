import React from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/*  Diagonal Cross Grid Bottom Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
                "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
              maskImage:
                "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
        }}
      />
      {/* Your Content/Components */}

      <div>
        <Header />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App
