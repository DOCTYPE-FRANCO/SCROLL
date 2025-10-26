import React, {useState, useContext} from "react";
import { UserDataContext } from "../UserContext";
import { Link } from "react-router-dom";
import Herosection from "./Herosection";
import Computer from "../assets/computerB.svg"
import Cyber from "../assets/cyberB.svg"
import Economics from "../assets/economicsB.svg"
function Homepage(){
    const {searchText, setSearchText} = useContext(UserDataContext);

    
    return(
        <div className="homepage flex flex-col justify-center items-center pt-16 mb-10 mt-20">
            <Herosection/>

            <div className="mt-20 md:pl-10 flex flex-col justify-center items-center">
                <h2 className="flex text-3xl text-blue-950 font-bold mb-8">Quick Links</h2>

                <a href="#Hero">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div onClick={() => setSearchText("SEN")} className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                            <img src={Computer} className="w-[60px]"/>
                            Software Engineering
                        </div>

                        <div onClick={() => setSearchText("ECO")} className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                            <img src={Economics} className="w-[60px]"/>
                            Economics
                        </div>

                        <div onClick={() => setSearchText("CYB")} className="flex flex-col justify-center items-center font-extrabold text-2xl border-2 border-blue-950 text-blue-950 w-[300px] h-[150px] rounded-xs hover:bg-blue-950 hover:text-white transition-all duration-500 active:bg-gray-600">
                            <img src={Cyber} className="w-[60px]"/>
                            CyberSecurity
                        </div>

                    </div>
                </a>
            </div>
        </div>
    );
}

export default Homepage;