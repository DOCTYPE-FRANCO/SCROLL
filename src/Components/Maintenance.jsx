import React from "react";

function Maintenance() {
    return(
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex flex-col justify-center gap-10 items-center">
            <p className="font-extrabold text-2xl text-center md:text-3xl text-blue-950 md:max-w-[800px]">
                SCROLL IS CURRENTLY UNDER MAINTENANCE :(
            </p>

            <p className="font-extrabold text-blue-950 text-sm">
                BEG FRANCO TO FIX ;)
            </p>
        </div>
    );
}

export default Maintenance;