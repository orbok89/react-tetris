import React from "react"; 

import { createStage } from "../gameHelpers";

import Stage from "./Stage";
import StartButton from "./StartButton";
import Display from "./Display";

const Tetris =()=>{
    return(
        <div>
            <Stage stage={createStage()}/>
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