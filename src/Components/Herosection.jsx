import React from "react";
import Search from "../assets/Search.svg"

function Herosection(){
    return(
        <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="flex justify-center items-center text-blue-500 font-bold text-center text-4xl md:text-5xl mb-6 max-w-[300px]">Search for Past Questions</h1>

            <div className="flex justify-center items-center mb-5 gap-2" >
                <input 
                    type="text"
                    className="flex font-bold justify-center items-center border shadow-2xl rounded-xl border-blue-950 md:w-[550px] md:h-[50px] text-center"
                    placeholder="Search for Past Questions by Course Code, Year, or Keyword"
                />
                <button className="border border-blue-950  rounded-xl p-2">
                    <img src={Search} className="w-[30px]" />
                </button>
            </div>

            <div className="flex flex-row justify-center items-center gap-10">
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Faculty</button>
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Year</button>
                
            </div>
        </div>
    );
}

export default Herosection;