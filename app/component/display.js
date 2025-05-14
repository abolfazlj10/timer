'use client'
import { useEffect, useState, useRef } from "react"
import { useAppContext } from "../context/appContext"

const Display = () => {
    const {isPlay,setIsPlay} = useAppContext()

    const [time,setTime] = useState({min:30 , sec:0})
    const intervalContainer = useRef(null)
    const isinitialMounts = useRef(true)

    const starter = () => {
        if(isPlay){
            intervalContainer.current = setInterval(() => {
                setTime(prev =>{
                    if(prev.min == 0 && prev.sec == 0){
                        clearInterval(intervalContainer.current)
                        setIsPlay(false)
                        return {min:0,sec:0}
                    }
                    else if(prev.sec == 0) return {min:prev.min -1 , sec:59}
                    else return {...prev,sec:prev.sec -1}
                })
            }, 1000);
        }else
            clearInterval(intervalContainer.current)
    }

    useEffect(()=>{
        if(isinitialMounts.current){
            isinitialMounts.current = false
            return;
        }
        starter()
        return () => clearInterval(intervalContainer.current)
    },[isPlay,setIsPlay])
    
    const editorTime = () => {
        const min = time.min.toString().padStart(2,'0')
        const sec = time.sec.toString().padStart('2',0)
        return `${min}:${sec}`
    }

    return (
        <div className="display">{ editorTime() }</div>

    )
}
export default Display;