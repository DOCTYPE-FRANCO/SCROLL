import React, {useState, useEffect, useContext} from "react";
import { UserDataContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "../assets/search.svg"

function Herosection(){
    const {token, logged, searchText, setSearchText} = useContext(UserDataContext);
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const BASE_URL = "https://backendforscroll-bitter-moon-1124.fly.dev";
    

    const navigate = useNavigate();

    async function getSearchResult(){
        try{
            const response = await axios.get(`${BASE_URL}/questions/search?keyword=${searchText}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setSearchResults(response.data);
            setShowSearchResult(true);
        } catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        if (searchText.trim() === "") {
            setSearchResults([]);
            setShowSearchResult(false);
            return;
        }

        const timeoutId = setTimeout(() => {
            getSearchResult();
        }, 500); 

        return () => clearTimeout(timeoutId);
    },[searchText])

    function handleSearch(e){
        e.preventDefault();
        if(logged || token){
            if(searchText.trim() !== ""){
                navigate(`/pastquestions?query=${searchText}`);
            }else{
                navigate('/pastquestions');
            }
        }else{
            alert("PLEASE LOGIN SKI :)");
        }
    }

    function handleChange(e){
        setSearchText(e.target.value);
    }
    return(
        <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="flex justify-center items-center text-blue-950 font-bold text-center text-4xl md:text-5xl mb-6 md:max-w-[600px] max-w-[400px]">Search for Past Questions</h1>

            <div className="flex justify-center items-center mb-5 gap-2" >
                <input 
                    value={searchText}
                    type="text"
                    className="flex font-bold justify-center items-center border shadow-2xl rounded-xl border-blue-950 md:w-[550px] md:h-[50px] w-[330px] h-[40px] text-center"
                    placeholder="Search for Past Questions by Course Code, Year, or Keyword"
                    onChange={handleChange}
                />
                <button onClick={handleSearch} className="border border-blue-950  rounded-xl p-2 hover:bg-gray-800 active:bg-gray-950 transition-all duration-300">
                    <img src={Search} className="md:w-[30px] w-[20px] " />
                </button>
            </div>

            {showSearchResult && searchResults.length > 0 && (
                <ul className="bg-white border border-gray-300 rounded-lg shadow-lg max-h-[300px] overflow-y-auto w-[330px] md:w-[550px] -mt-4 z-10">
                    {searchResults.map((result) => (
                        <li
                            key={result.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                            onClick={() => {
                                setSearchText(result.courseCode);
                                setShowSearchResult(false);
                            }}
                        >
                            {result.courseCode}
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex flex-row justify-center items-center gap-5 md:gap-10">
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[150px] md:w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Faculty</button>
                <button className="font-bold  text-green-800 border-2 border-green-800 w-[150px] md:w-[200px] h-[50px] rounded-xl hover:bg-gray-400 transition-all duration-500">Browse by Year</button>
                
            </div>
        </div>
    );
}

export default Herosection;