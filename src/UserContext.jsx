import React, {useState, createContext, useEffect} from "react";
export const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [matric, setMatric] = useState("");
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("jwt") || null);
    const [searchText, setSearchText] = useState("");

    
    useEffect(() => {
        if (token) {
        localStorage.setItem("jwt", token);
        } else {
        localStorage.removeItem("jwt");
        }
    }, [token]);
    return(
        <UserDataContext.Provider value={{matric, setMatric, logged, setLogged, token, setToken, searchText, setSearchText}}>
            {children}
        </UserDataContext.Provider>
    );
}