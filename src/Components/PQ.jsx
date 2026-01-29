import React, { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../UserContext";
import { useLocation } from "react-router-dom";
import Disconnect from "../assets/plug.svg"
import axios from "axios";
import { ScaleLoader } from "react-spinners";

function PQ() {
    const { token } = useContext(UserDataContext);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [disconnect, setDisconnect] = useState(false);
    const location = useLocation();

    const BASE_URL = "http://localhost:8080";

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    async function getQuestions(){
        try{
            let response;
            setLoading(true);
            if(searchQuery){
                response = await axios.get(`${BASE_URL}/questions/search?keyword=${searchQuery}`)
                
            }else{
                response = await axios.get(`${BASE_URL}/questions/getall`)
                
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
    }, [searchQuery]);

    return (
        <div className="-mt-7">
            <h1 className="font-bold text-4xl text-blue-950 text-center mb-10">
                PAST QUESTIONS
            </h1>

            <p className="text-black text-2xl mb-5">
                Search results for '{searchQuery}'
            </p>

            {loading && (
                <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-black/10 backdrop-blur-sm z-50">
                    <ScaleLoader height={40} width={8} color="#060848" />
                    <h1 className="text-blue-950 font-bold text-2xl">
                        LOADING...
                    </h1>
                </div>
            )}

            {disconnect && (
                <div className="fixed inset-0 flex flex-col justify-center items-center md:mt-32 gap-4 bg-black/10 backdrop-blur-sm z-50">
                    <img src={Disconnect} className="w-[100px] h-[100px]" />
                    <p className="text-blue-950 font-bold  text-2xl text-center">Unable To Connect To Database</p>
                </div>
            )}

            <div className="grid md:grid-cols-3 grid-cols-1 gap-9 justify-center">
                {questions.length === 0 && !loading && (
                    <p className="text-gray-500 text-xl">
                        No results found.
                    </p>
                )}

                {questions.map((question) => (
                    <div
                        key={question._id}
                        className="bg-white w-[300px] h-[200px] border-2 border-gray-300 shadow-xl"
                    >
                        <div className="flex flex-col gap-2 p-3">
                            <p className="text-gray-800 text-2xl font-extrabold">
                                {question.courseCode}
                            </p>
                            <p className="text-gray-600 font-bold">
                                {question.courseName}
                            </p>
                            <p className="text-gray-400 font-bold">
                                {question.year}
                            </p>
                        </div>

                        <div className="flex justify-end pr-3">
                            <a
                                href={question.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-2xl bg-gray-800 text-white font-bold hover:bg-gray-600 hover:text-black transition"
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
