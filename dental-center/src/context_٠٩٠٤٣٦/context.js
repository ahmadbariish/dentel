import { createContext } from "react";
import { useState } from 'react';
export const user=createContext({})


export default function UserProvider({children}){
    const [auth,setauth]=useState({})
    return <user.Provider value={{auth,setauth}}>{children}</user.Provider>
}