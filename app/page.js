'use client'
import { useEffect, useState } from "react";
import { VscPlay } from "react-icons/vsc";

export default function Home() {
  const [time,seTtime] = useState({min:30 , sec:0})

  var timerInterval;
  const starter = () => {
    timerInterval = setInterval(() => {
      seTtime(prev =>{
        if(prev.min == 0 && prev.sec == 0){
          clearInterval(timerInterval)
          return {min:0,sec:0}
        }
        else if(prev.sec == 0) return {min:prev.min -1 , sec:59}
        else return {...prev,sec:prev.sec -1}
      })
    }, 100);
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
      <div className="timer">{ editorTime() }</div>
      <button onClick={starter} className="playBtn"><VscPlay /></button>
    </div>
  );
}