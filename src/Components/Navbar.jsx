import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="pr-32">
            <ul className="flex flex-row text-blue-950 gap-10 font-bold ">
                <Link to="/">
                     <li className="hover:text-gray-400 active:text-gray-200">Home</li>
                </Link>

                <Link>
                     <li className="hover:text-gray-400 active:text-gray-200">Past Questions</li>
                </Link>

                <Link>
                     <li className="hover:text-gray-400 active:text-gray-200">LOGIN/SIGNUP</li>
                </Link>
                
            </ul>
        </div>
    );
}

export default Navbar;