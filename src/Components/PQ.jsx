import React, {useState, useEffect} from "react";
import axios from "axios";
function PQ(){
    const [questions, setQuestions] = useState([]);

    async function getQuestions(){
        try{
            const response = await axios.get("http://localhost:8080/questions/getall")
            setQuestions(response.data);
            console.log(response);
        }catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        getQuestions();
    },[])
    return(
        <div className="-mt-28">
            <h1 className="font-bold text-4xl text-blue-950 text-center mb-10">PAST QUESTIONS</h1>

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