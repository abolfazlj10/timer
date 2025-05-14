import { createContext , useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [time,setTime] = useState(new Date)
    const updateTime = () => {
        setTime(new Date)
    }
    return(
        <AppContext.Provider value={{time,updateTime}}>
            {children}
        </AppContext.Provider>
    )
}