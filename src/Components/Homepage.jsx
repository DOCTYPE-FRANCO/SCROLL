import React from "react";
import { Link } from "react-router-dom";
import Herosection from "./Herosection";
import Computer from "../assets/computerB.svg"
import Cyber from "../assets/cyberB.svg"
import Economics from "../assets/economicsB.svg"
function Homepage(){
    return(
        <div className="pt-16 mb-10 mt-20">
            <Herosection/>

            <div className="mt-20 pl-10 flex flex-col justify-center items-center">
                <h2 className="flex text-3xl text-blue-950 font-bold mb-8">Quick Links</h2>

                <div className="flex md:flex-row gap-3">
                    <div className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                        <img src={Computer} className="w-[60px]"/>
                        Software Engineering
                    </div>

                    -<div className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                        <img src={Economics} className="w-[60px]"/>
                        Economics
                    </div>

                    <div className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                        <img src={Cyber} className="w-[60px]"/>
                        CyberSecurity
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Homepage;