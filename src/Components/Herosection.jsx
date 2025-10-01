import React from "react";

function Herosection(){
    return(
        <div className="">
            <h1 className="text-blue-950 font-bold text-center text-5xl mb-6">Search for Past Questions</h1>

            <div className="flex justify-center items-center mb-5">
                <input 
                    type="text"
                    className="flex font-bold justify-center items-center border shadow-2xl rounded-xl border-blue-950 md:w-[550px] md:h-[50px] text-center"
                    placeholder="Search for Past Questions by Course Code, Year, or Keyword"
                />
            </div>

            <div className="flex flex-row justify-center items-center gap-10">
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Faculty</button>
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Year</button>
                
            </div>
        </div>
    );
}

export default Herosection;