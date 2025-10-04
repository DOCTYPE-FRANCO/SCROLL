import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Disconnect from "../assets/plug.svg"
import axios from "axios";
function PQ(){
    const [questions, setQuestions] = useState([]);
    const [disconnect, setDisconnect] = useState(false);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    async function getQuestions(){
        try{
            let response;
            if(searchQuery){
                response = await axios.get(`http://localhost:8080/questions/search?keyword=${searchQuery}`)
            }else{
                response = await axios.get("http://localhost:8080/questions/getall")
            }
            setQuestions(response.data);
            setDisconnect(false);
            console.log(response);
        }catch (error){
            setDisconnect(true)
            console.log(error);
        }
    }
    useEffect(() => {
        getQuestions();
    },[searchQuery])
    return(
        <div className="-mt-28">
            <h1 className="font-bold text-4xl text-blue-950 text-center mb-10">PAST QUESTIONS</h1>
            {disconnect && (
                <div className="flex flex-col justify-center items-center md:mt-32 gap-4">
                    <img src={Disconnect} className="w-[80px]"/>
                    <p className="text-blue-950 font-bold text-2xl">Not Connected To Database</p>
                </div>
            )}
            <div className="flex flex-col md:flex-row gap-9">
                {questions.map((question) => (
                    <div 
                        key={question.id}
                        className="bg-white w-[300px] h-[170px] border-2 border-gray-500 shadow-2xl"
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