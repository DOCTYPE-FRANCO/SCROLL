import React, {useState} from "react";
import Logo from "../assets/LOGO.jpg"
import axios from "axios";
function LS(){
    const [formData, setFormData] = useState({
        MatricNo: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })

    const [hasAccount , setHasAccount] = useState(false);
    const [logged, setLogged] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData, 
            [name]: value
        }));
    }

    async function handleSignup(e){
        e.preventDefault();
        if(formData.Password  !== formData.ConfirmPassword){
            alert("PASSWORDS DON'T MATCH");
        }
        try{
            const response = await axios.post("//not set yet", {
                MatricNo: formData.MatricNo,
                Email : formData.Email,
                Password: formData.Password
            });

            if(response.data === 'DATA RECEIVED, TRY LOGGING IN'){
                setHasAccount(true)
            }else{
                alert("Somthing Went Wrong, Try again later")
            }
        }catch(error) {
            console.log(error);
        }
        setFormData({
            MatricNo: "",
            Email: "",
            Password: "",
            ConfirmPassword: ""
        })
    }

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await axios.post("//not set yet", {
                MatricNo: formData.MatricNo,
                Password: formData.Password
            });

            if(response.status === 200){
                setLogged(true);
            }

        }catch(error) {
            console.log(error);
        }
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
            </div>
        </div>
    );
}
export default LS;