import React, { useContext } from "react";
import { UserDataContext } from "../UserContext";
import LOGO from "../assets/LOGO.jpg"
import Navbar from "./Navbar";
function Header (){
    const {matric} = useContext(UserDataContext);
    return(
        <div className="fixed top-0 z-50 flex flex-row justify-between items-center bg-white w-full drop-shadow-xl mb-20">
            <div className="pl-10">
                <img src={LOGO} className="w-[120px]" />
            </div>

            <Navbar />

            <div className="hidden md:block">
                {matric === "" ? "" :`HELLO, ${matric}`}
            </div>
        </div>
    );
}

export default Header;