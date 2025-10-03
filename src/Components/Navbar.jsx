import React, {useState} from "react";
import { Link } from "react-router-dom";
function Navbar(){

    const [nav, setNav] = useState(true);
    return(
        <div className=" ">
            <ul className="hidden md:flex md:flex-row text-blue-950 gap-10 font-bold pr-32">
                <li className="hover:text-gray-400 active:text-gray-200">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-gray-400 active:text-gray-200">
                    <Link to="/pastquestions">Past Questions</Link>
                </li>
                <li className="hover:text-gray-400 active:text-gray-200">
                    <Link to="#">LOGIN/SIGNUP</Link>
                </li>
            </ul>

            <div className="md:hidden w-[70px] h-[40px]">
                <button className="text-black font-bold text-3xl">☰</button>
            </div>
            
        </div>
    );
}

export default Navbar;