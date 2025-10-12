import React, { useContext } from "react";
import { UserDataContext } from "../UserContext";
import LOGO from "../assets/LOGO.jpg"
import Navbar from "./Navbar";
function Header (){
    const {matric, logged, setLogged} = useContext(UserDataContext);
    function handleLogout(){
        setLogged(false);
    }
    return(
        <div className="fixed top-0 z-50 flex flex-row justify-between items-center bg-white w-full drop-shadow-xl mb-20">
            <div className="pl-10">
                <img src={LOGO} className="w-[120px]" />
            </div>

            <Navbar />

            <div className="hidden md:block">
                
                {logged && (
                   <div className="flex flex-row pr-3">
                    <p className="font-bold text-blue-950 pr-6 cursor-auto">HELLO, {matric}</p> 
                    <button onClick={() => setLogged(false)} className="font-mono bg-blue-950 text-white w-[70px] h-[25px] cursor-pointer rounded-xs ">LOGOUT</button>
                   </div>
                )}
            </div>
        </div>
    );
}

export default Header;