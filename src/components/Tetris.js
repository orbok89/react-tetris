import React from "react"; 
import Stage from "./Stage";
import StartButton from "./StartButton";
import Display from "./Display";

const Tetris =()=>{
    return(
        <div>
            <Stage/>
            <aside>
                <Display text= "Score" />
                <Display text= "rows" />
                <Display text= "Level" />
            </aside>
            <StartButton/>
        </div>
    )
}


export default Tetris;