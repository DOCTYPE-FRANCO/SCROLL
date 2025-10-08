import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [mobile, setMobile] = useState(false);
    
    return(
        <div className="">
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
                <button onClick={() => {setMobile(true)}} className="text-black font-bold text-3xl">☰</button>
            </div>

            {mobile && (
                <div className="fixed top-0 left-0 bg-gray-800 w-full h-[35vh] rounded-b-2xl flex flex-col items-center transition-all duration-700">
                    <div className="flex flex-row justify-between mt-4 w-full">
                        <p className="flex justify-center text-white font-bold text-3xl pl-4">MENU</p>
                        <button onClick={()=> {setMobile(false)}} className="text-4xl text-white mr-4">X</button>
                    </div>

                    
                    <ul className="flex flex-col text-blue-950 gap-4 font-bold  justify-center items-center mt-16">
                        <li onClick={()=>setMobile(false)} className="text-white active:text-gray-600 text-center border-2 border-gray-300 w-[250px] font-bold">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={()=>setMobile(false)} className="text-white active:text-gray-600 text-center border-2 border-gray-300 w-[250px] font-bold">
                            <Link to="/pastquestions">Past Questions</Link>
                        </li>
                        <li onClick={()=>setMobile(false)} className="text-white active:text-gray-600 text-center border-2 border-gray-300 w-[250px] font-bold">
                            <Link to="/">LOGIN/SIGNUP</Link>
                        </li>
                    </ul>
                    
                </div>
            )}
            
        </div>
    );
}

export default Navbar;