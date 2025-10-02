import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="pr-32">
            <ul className="flex flex-row text-blue-950 gap-10 font-bold ">
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
        </div>
    );
}

export default Navbar;