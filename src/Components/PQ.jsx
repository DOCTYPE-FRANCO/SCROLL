import React, {useState, useEffect, useContext} from "react";
import { UserDataContext } from "../UserContext";
import { useLocation } from "react-router-dom";
import Disconnect from "../assets/plug.svg"
import axios from "axios";
import { ScaleLoader } from "react-spinners";
function PQ(){
    const {token} = useContext(UserDataContext);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const BASE_URL = "https://backendforscroll-bitter-moon-1124.fly.dev";


    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");


    const questions = [
    {
        id: 1,
        title: "Introduction To Microeconomics II",
        code: "ECO 202",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759444377/ECO_202_xxb8qv.jpg"
    },
    {
        id: 2,
        title: "Accounting Laboratory",
        code: "ACC 206",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759444316/ACC_206_jsboqk.jpg"
    },
    {
        id: 3,
        title: "Philosophy, Logic and Human Existence",
        code: "GST 212",
        faculty: "GENERAL",
        year: 2020,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759578059/GST_212_om1tf3.jpg"
    },
    {
        id: 4,
        title: "Macroeconomics",
        code: "ECO 204",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600001/ECO_204.jpg"
    },
    {
        id: 5,
        title: "Financial Accounting I",
        code: "ACC 201",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600002/ACC_201.jpg"
    },
    {
        id: 6,
        title: "Cost Accounting",
        code: "ACC 208",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600003/ACC_208.jpg"
    },
    {
        id: 7,
        title: "Business Mathematics",
        code: "BUS 210",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600004/BUS_210.jpg"
    },
    {
        id: 8,
        title: "Principles of Management",
        code: "MGT 202",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600005/MGT_202.jpg"
    },
    {
        id: 9,
        title: "Introduction to Sociology",
        code: "SOC 201",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600006/SOC_201.jpg"
    },
    {
        id: 10,
        title: "Nigerian Economy",
        code: "ECO 216",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600007/ECO_216.jpg"
    },
    {
        id: 11,
        title: "Entrepreneurship Studies",
        code: "ENT 211",
        faculty: "GENERAL",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600008/ENT_211.jpg"
    },
    {
        id: 12,
        title: "Use of English II",
        code: "GST 202",
        faculty: "GENERAL",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600009/GST_202.jpg"
    },
    {
        id: 13,
        title: "Peace and Conflict Resolution",
        code: "GST 214",
        faculty: "GENERAL",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600010/GST_214.jpg"
    },
    {
        id: 14,
        title: "Introduction to Psychology",
        code: "PSY 201",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600011/PSY_201.jpg"
    },
    {
        id: 15,
        title: "Public Finance",
        code: "ECO 218",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600012/ECO_218.jpg"
    },
    {
        id: 16,
        title: "Business Communication",
        code: "BUS 214",
        faculty: "FAHUMSS",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600013/BUS_214.jpg"
    },
    {
        id: 17,
        title: "Introduction to Statistics",
        code: "STA 202",
        faculty: "GENERAL",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600014/STA_202.jpg"
    },
    {
        id: 18,
        title: "Logic and Critical Thinking",
        code: "GST 216",
        faculty: "GENERAL",
        year: 2025,
        semester: "SECOND",
        image: "https://res.cloudinary.com/de329vduw/image/upload/v1759600015/GST_216.jpg"
    }
];



    
    return(
        <div className="-mt-7" onClick={() => setLoading(false)}>
            <h1 className="font-bold text-4xl text-blue-950 text-center mb-10">PAST QUESTIONS</h1>
            <p className="text-black text-2xl mb-5">Search results for '{searchQuery}'</p>
            

            {loading && (
                <div className="fixed gap-4 inset-0 flex flex-col items-center justify-center bg-opacity-10 backdrop-blur-sm z-50">
                    <ScaleLoader height={40} width={8} color="#060848" />
                    <h1 className="text-blue-950 font-bold text-2xl">LOADING...</h1>
                </div>
            )}
            <div className="grid md:grid-cols-3 justify-center items-center grid-cols-1 gap-9">
                {questions.map((question) => (
                    <div 
                        key={question.id}
                        className="bg-white w-[300px] h-[200px] border-2 border-gray-500 shadow-2xl"
                    >
                        <div className="flex flex-col gap-2 p-2">
                            <p className="text-gray-800 text-2xl font-extrabold">{question.code}</p>
                            <p className="text-gray-600  font-bold">{question.title}</p>
                            <p className="text-gray-400  font-bold">{question.year}</p>
                        </div>

                        <div className="flex justify-end pr-2" onClick={() => setLoading(true)}>
                            <a 
                                href={question.image}
                                
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