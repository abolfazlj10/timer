'use client'

import Sidebar from "./component/sidebar";
import Timer from "./component/timer";
import Controls from "./component/controls";

import { useEffect, useRef, useState } from "react";
import { VscPlay } from "react-icons/vsc";
import { HiPause } from "react-icons/hi2";
import { CgCoffee } from "react-icons/cg";
import { BsArrowRepeat } from "react-icons/bs";

export default function Home() {
  const [time,seTtime] = useState({min:30 , sec:0})
  const [isPlay,setIsPlay] = useState(false)
  const intervalContainer = useRef(null)
  const [restMood,setRestMood] = useState(false)
  
  const starter = () => {
    if(isPlay){
      clearInterval(intervalContainer.current)
      setIsPlay(false)
    }else{
      setIsPlay(true)
      intervalContainer.current = setInterval(() => {
        seTtime(prev =>{
          if(prev.min == 0 && prev.sec == 0){
            clearInterval(intervalContainer.current)
            setIsPlay(false)
            return {min:0,sec:0}
          }
          else if(prev.sec == 0) return {min:prev.min -1 , sec:59}
          else return {...prev,sec:prev.sec -1}
        })
      }, 1000);
    }
  }

  const editorTime = () => {
    let timeLocal = {}

    if(time.min.toString().length == 1 || time.min == 0)
      timeLocal.min = `0${time.min}`
    else 
      timeLocal.min = time.min

    if(time.sec.toString().length == 1 || time.sec == 0)
      timeLocal.sec = `0${time.sec}`
    else 
      timeLocal.sec = time.sec
    
    return `${timeLocal.min}:${timeLocal.sec}`
  }

  return (
    <div className="mainContainer">
      <Sidebar/>
      <Timer/>
      <Controls/>
      {/* <div className="timer">{ editorTime() }</div> */}
      {/* <div className="containerButtons">
        <button onClick={() => setRestMood(true)} className="btn"><CgCoffee /></button>
        <button onClick={starter} className="btn playBtn">{isPlay ? <HiPause /> : <VscPlay />}</button>
        <button className="btn"><BsArrowRepeat /></button>
        {restMood}   
      </div> */}
    </div>
  );
}