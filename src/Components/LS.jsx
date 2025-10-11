import React, {useState} from "react";
import Logo from "../assets/LOGO.jpg"
function LS(){
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

    function handleSubmit(){
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

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-blue-950">MATRIC NUMBER:</label>
                        <input
                            type="text"
                            name="MaricNo"
                            value={FormData.MatricNo}
                            className="md:w-[300px] h-[40px] border font-bold pl-4"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-blue-950">EMAIL:</label>
                        <input
                            type="text"
                            name="MaricNo"
                            value={FormData.Email}
                            className="md:w-[300px] h-[40px] border font-bold pl-4"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-blue-950">PASSWORD:</label>
                        <input
                            type="text"
                            name="MaricNo"
                            value={FormData.Password}
                            className="md:w-[300px] h-[40px] border font-bold pl-4"
                            onChange={handleChange}
                        />
                    </div>

                    {!hasAccount ? 
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-blue-950">CONFIRM PASSWORD:</label>
                            <input
                                type="text"
                                name="MaricNo"
                                value={FormData.ConfirmPassword}
                                className="md:w-[300px] h-[40px] border font-bold pl-4"
                                onChange={handleChange}
                            />
                        </div>
                        :
                        <p></p>
                    }

                    <div className="flex flex-col gap-2 items-center justify-center mt-10">
                        <p onClick={()=> setHasAccount(!hasAccount)} className="font-bold text-blue-950 hover:text-purple-950 hover:cursor-pointer">{hasAccount ? "Don't Have an Account, Sign Up" : "Already Have an Account, Sign In"}</p>
                        <button className="text-white font-bold w-[300px] h-[30px] bg-blue-950 rounded-xs mt-6 hover:bg-gray-600 active:bg-gray-800">{hasAccount ? "LOGIN" : "SIGNUP"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LS;