import { VscPlay } from "react-icons/vsc";
import { HiPause } from "react-icons/hi2";
import { CgCoffee } from "react-icons/cg";
import { BsArrowRepeat } from "react-icons/bs";
import { useAppContext } from "../context/appContext";

const Controls = () => {
    const {isPlay,setIsPlay} = useAppContext()

    return (
        <div className="controls">
            <div className="boxControls">
                <div className="titleTime">Work</div>
                <div className="buttons">
                    <button className="btn"><CgCoffee /></button>
                    <button onClick={() =>setIsPlay(!isPlay)} className="btn playBtn">{isPlay ? <HiPause /> : <VscPlay />}</button>
                    <button className="btn"><BsArrowRepeat /></button>
                </div>
                <div className="description">description</div>
            </div>
        </div>
    )
}
export default Controls;