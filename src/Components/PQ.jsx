import React, {useState, useEffect, useContext} from "react";
import { UserDataContext } from "../UserContext";
import { useLocation } from "react-router-dom";
import Disconnect from "../assets/plug.svg"
import axios from "axios";
import { ScaleLoader } from "react-spinners";
function PQ(){
    const {token} = useContext(UserDataContext);
    const [questions, setQuestions] = useState([]);
    const [disconnect, setDisconnect] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const BASE_URL = "https://backendforscroll-bitter-moon-1124.fly.dev";


    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    async function getQuestions(){
        try{
            let response;
            setLoading(true);
            console.log(token);
            if(searchQuery){
                response = await axios.get(`${BASE_URL}/questions/search?keyword=${searchQuery}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
            }else{
                response = await axios.get(`${BASE_URL}/questions/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
            }
            setQuestions(response.data);
            setDisconnect(false);
            setLoading(false);
            console.log(response);
        }catch (error){
            setDisconnect(true)
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(() => {
        getQuestions();
    },[searchQuery])
    return(
        <div className="-mt-7">
            <h1 className="font-bold text-4xl text-blue-950 text-center mb-10">PAST QUESTIONS</h1>
            <p className="text-black text-2xl mb-5">Search results for '{searchQuery}'</p>
            {disconnect && (
                <div className="flex flex-col justify-center items-center md:mt-32 gap-4">
                    <img src={Disconnect} className="w-[80px]"/>
                    <p className="text-blue-950 font-bold text-2xl">Unable To Connect To Database</p>
                </div>
            )}

            {loading && (
                <div className="flex justify-center items-center mt-10">
                    <ScaleLoader height={40} width={8} color="#060848" />
                </div>
            )}
            <div className="grid md:grid-cols-3 justify-center items-center grid-cols-1 gap-9">
                {questions.map((question) => (
                    <div 
                        key={question.id}
                        className="bg-white w-[300px] h-[200px] border-2 border-gray-500 shadow-2xl"
                    >
                        <div className="flex flex-col gap-2 p-2">
                            <p className="text-gray-800 text-2xl font-extrabold">{question.courseCode}</p>
                            <p className="text-gray-600  font-bold">{question.courseName}</p>
                            <p className="text-gray-400  font-bold">{question.year}</p>
                        </div>

                        <div className="flex justify-end pr-2">
                            <a 
                                href={question.imageURL}
                                className="px-4 py-2 rounded-2xl bg-gray-800 text-white font-bold hover:bg-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
                            >
                                View
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PQ;