import { createContext , useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [isPlay,setIsPlay] = useState(false)
    
    return(
        <AppContext.Provider value={{isPlay,setIsPlay}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}