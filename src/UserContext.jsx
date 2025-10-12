import React, {useState, createContext} from "react";
export const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [matric, setMatric] = useState("");
    const [logged, setLogged] = useState(false);

    return(
        <UserDataContext.Provider value={{matric, setMatric, logged, setLogged}}>
            {children}
        </UserDataContext.Provider>
    );
}