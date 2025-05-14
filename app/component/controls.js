import { VscPlay } from "react-icons/vsc";
import { HiPause } from "react-icons/hi2";
import { CgCoffee } from "react-icons/cg";
import { BsArrowRepeat } from "react-icons/bs";
import { useAppContext } from "../context/appContext";

const Controls = () => {
    const {isPlay,setIsPlay} = useAppContext()

    return (
        <div>
            <div className="containerButtons">
                <button className="btn"><CgCoffee /></button>
                <button onClick={() =>setIsPlay(!isPlay)} className="btn playBtn">{isPlay ? <HiPause /> : <VscPlay />}</button>
                <button className="btn"><BsArrowRepeat /></button>
            </div>
        </div>
    )
}
export default Controls;