import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../UserContext";
import { Home, Book, Lock, XIcon, SmileIcon } from "lucide-react";

function Navbar(){
    const [mobile, setMobile] = useState(false);
    const {logged} = useContext(UserDataContext);

    function handleLogged(){
        if(!logged){
            alert("PLEASE LOGIN SKI :)")
        }
        return;
    }
    
    return(
        <div className="">
            <ul className="hidden md:flex md:flex-row text-blue-950 gap-10 font-bold ">
                <li className="hover:text-gray-400 active:text-gray-200">
                    <Link to="/">Home</Link>
                </li>
                <li onClick={handleLogged} className="hover:text-gray-400 active:text-gray-200">
                    <Link to={logged ? "/pastquestions" : ""}>Past Questions</Link>
                </li>
                {!logged && (
                    <li className="hover:text-gray-400 active:text-gray-200">
                        <Link to="/ls">LOGIN</Link>
                    </li>
                )}
            </ul>

            <div className="md:hidden w-[70px] h-[40px]">
                <button onClick={() => {setMobile(true)}} className="text-black font-bold text-3xl">☰</button>
            </div>

            {mobile && (
                <div className="fixed top-0 left-0 bg-gray-800/95 backdrop-blur-sm w-full h-[30vh] flex flex-col transition-all duration-700">
                    <div className="flex flex-row justify-between mt-4 w-full">
                        <p className="flex justify-center text-white font-thin text-2xl pl-10">MENU</p>
                        <button onClick={()=> {setMobile(false)}} className="text-4xl text-white mr-4"><XIcon color="#FFFFFF"/></button>
                    </div>

                    
                    <div className="flex flex-row">
                        <ul className="flex flex-col justify-start text-blue-950 gap-4 font-bold pl-10  mt-16">
                            <Link to="/">
                                <li onClick={()=>setMobile(false)} className="flex flex-row justify-start gap-10 items-center text-white active:text-gray-600 text-center w-[150px] font-semibold">
                                    <Home color="#FFFFFF" strokeWidth={1}/>
                                    Home
                                </li>
                            </Link>

                            <Link to={logged ? "/pastquestions": ""}>
                                <li onClick={()=> {
                                    if (!logged) {
                                        alert("PLEASE LOGIN SKI :)");
                                        } else {
                                        setMobile(false);
                                    
                                        }
                                    }}
                                    className="flex flex-row gap-10 justify-start items-center text-white active:text-gray-600 text-center w-[350px] font-semibold">
                                    <Book color="#FFFFFF" strokeWidth={1}/>
                                    Past Questions
                                </li>
                            </Link>

                            <Link to="/ls">
                                <li onClick={()=>setMobile(false)} className="flex flex-row gap-10 justify-start items-center text-white active:text-gray-600 text-center  w-[150px] font-semibold">
                                    <Lock color="#FFFFFF" strokeWidth={1} />
                                    LOGIN
                                </li>
                            </Link>
                            
                        </ul>
                        <div className="flex justify-center items-center font-light">
                            <SmileIcon color="#FFFFFF" className="-ml-20" size={64} strokeWidth={1}/>
                        </div>
                    </div>
                    
                </div>
            )}
            
        </div>
    );
}

export default Navbar;