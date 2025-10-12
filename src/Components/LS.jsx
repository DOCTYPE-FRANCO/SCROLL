import React, {useState, useContext} from "react";
import Logo from "../assets/LOGO.jpg"
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { UserDataContext } from "../UserContext";
function LS(){
    const {matric, setMatric, logged, setLogged, token, setToken} = useContext(UserDataContext);
    const BASE_URL = "https://backendforscroll-bitter-moon-1124.fly.dev";
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        MatricNo: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })

    const [hasAccount , setHasAccount] = useState(false);
    

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData, 
            [name]: value
        }));
    }

    async function handleSignup(e){
        e.preventDefault();
        setLoading(true);
        if(formData.Password  !== formData.ConfirmPassword){
            alert("PASSWORDS DON'T MATCH");
            return;
        }
        try{
            const response = await axios.post(`${BASE_URL}/api/signup`, {
                matricNumber: formData.MatricNo,
                email : formData.Email,
                password: formData.Password
            });

            if(response.status === 200){
                setHasAccount(true)
            }else{
                alert("Somthing Went Wrong, Try again later")
            }
        }catch(error) {
            console.log(error);
        }
        setLoading(false);
        
    }

    async function handleLogin(e){
        e.preventDefault();
        setLoading(true);
        
        try{
            const response = await axios.post(`${BASE_URL}/api/login`, {
                matricNumber: formData.MatricNo,
                password: formData.Password
            });
            console.log(response);
            

            if(response.status === 200){
                const token = response.data.token;
                const MatricNo = response.data.MatricNumber;
                setLogged(true);
                setToken(token);
                setMatric(MatricNo);
                navigate("/");
                
            }

        }catch(error) {
            console.log(error);
            alert("Something went wrong. Try again later");
        }
        setLoading(false);
        setFormData({
            MatricNo: "",
            Email: "",
            Password: "",
            ConfirmPassword: ""
        })
    }

    return(
        <div className="mt-16 flex flex-col justify-center items-center">
            <div className="bg-white shadow-2xl rounded-xs md:w-[450px] w-[400px] h-[700px] flex flex-col justify-center items-center">
                <div className="flex flex-col -mt-32 mb-5">
                    <div className="w-[150px] ">
                        <img src={Logo} />
                    </div>
                    <div className="-mt-2">
                        <p className="font-bold text-2xl text-center text-blue-950 ">{hasAccount? "LOGIN" : "SIGNUP"}</p>
                    </div>
                </div>

                <form onSubmit={hasAccount ? handleLogin :  handleSignup} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-blue-950">MATRIC NUMBER:</label>
                        <input
                            type="text"
                            name="MatricNo"
                            value={formData.MatricNo}
                            className="md:w-[300px] h-[40px] border font-bold pl-4"
                            onChange={handleChange}
                        />
                    </div>

                    

                    {!hasAccount ? 
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-blue-950">EMAIL:</label>
                            <input
                                type="text"
                                name="Email"
                                value={formData.Email}
                                className="md:w-[300px] h-[40px] border font-bold pl-4"
                                onChange={handleChange}
                            />
                        </div>
                        :
                        <p></p>
                    }

                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-blue-950">PASSWORD:</label>
                        <input
                            type="password"
                            name="Password"
                            value={formData.Password}
                            className="md:w-[300px] h-[40px] border font-bold pl-4"
                            onChange={handleChange}
                        />
                    </div>

                    

                    {!hasAccount ? 
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-blue-950">CONFIRM PASSWORD:</label>
                            <input
                                type="password"
                                name="ConfirmPassword"
                                value={formData.ConfirmPassword}
                                className="md:w-[300px] h-[40px] border font-bold pl-4"
                                onChange={handleChange}
                            />
                        </div>
                        :
                        <p></p>
                    }

                    <div className="flex flex-col gap-2 items-center justify-center mt-10">
                        <p onClick={()=> setHasAccount(!hasAccount)} className="font-bold text-blue-950 hover:text-purple-950 hover:cursor-pointer">{hasAccount ? "Don't Have an Account. Sign Up" : "Already Have an Account. Sign In"}</p>
                        <button type="submit" className="text-white font-bold w-[300px] h-[30px] bg-blue-950 rounded-xs mt-6 hover:bg-gray-600 active:bg-gray-800">{hasAccount ? "LOGIN" : "SIGNUP"}</button>
                    </div>
                </form>

                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-sm z-50">
                        <div className="flex flex-col items-center space-y-4">
                        <BeatLoader  />
                        <p className="text-blue-950 text-sm font-bold">{hasAccount? "Logging in, Please Chill... :)": "Signing You Up, in a bit.. :)"}</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
export default LS;