import React from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Homepage from "./Components/Homepage";
import PQ from "./Components/PQ";
import LS from "./Components/LS";
import Footer from "./Components/Footer";
import Maintenance from "./Components/Maintenance";

function App() {
  return (
    <div className="flex flex-col justify-center  min-h-screen w-full bg-white relative">
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
      
      <div className="z-10">
        <Header />
        <div className="relative z-10 p-10">
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/pastquestions" element={<PQ />}/>
            <Route path="/ls" element={<LS />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App
