import React, {useState, createContext} from "react";
export const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [matric, setMatric] = useState("");

    return(
        <UserDataContext.Provider value={{matric, setMatric}}>
            {children}
        </UserDataContext.Provider>
    );
}