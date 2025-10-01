import React from "react";
import LOGO from "../assets/LOGO.jpg"
import Navbar from "./Navbar";
function Header (){
    return(
        <div className="fixed top-0 z-50 flex flex-row justify-between items-center bg-white w-full drop-shadow-xl mb-20">
            <div className="pl-10">
                <img src={LOGO} className="w-[120px]" />
            </div>

            <Navbar />
        </div>
    );
}

export default Header;