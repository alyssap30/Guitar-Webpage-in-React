import PropTypes from "prop-types";
import React, { useState } from "react";


export function Metronome(props) {
    const cardStyle = {
        backgroundColor: "white",
        width: "90%",
        boxSizing: "border-box",
        maxWidth: "800px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 15px",
        padding: "2% 0 ",
        textAlign: "center",
        borderRadius: "8px",
        display: "inline-block"
    }
    const BPMText = {
        fontSize: "30px"
    }
    const bpmButton = {
        backgroundColor: "#a6c6c6",
        margin: "0 0.5%",
        borderRadius: "50%",
        border: "none",
        padding: "2% 3%"
    }
    const playBtn = {
        ...bpmButton,
        borderRadius: "4%",
        width: "60%"
    }
    const slider = {
        backgroundColor: "transparent",
        width: "40%",
    }
    

    const[bpm, setBPM] = useState(80);

    function handleBPMChange () {
        setBPM(event.target.value)
    }

    function increaseBPM(){
        if (bpm < 280) {setBPM(bpm + 1)}
    }
    function decreaseBPM(){
        if (bpm > 20) {setBPM(bpm - 1)}
    
    }
    return (
        <>
        <div style = {cardStyle}>
            <h2>METRONOME</h2>
            <div>
                <span style = {BPMText}>{bpm}</span>
                <span>BPM</span>
            </div>
            <button style = {bpmButton} onClick={decreaseBPM}>-</button>
            <input style = {slider} type = "range" min = "20" max = "280" step = "1" value={bpm} onChange={handleBPMChange}/>
            <button style = {bpmButton} onClick={increaseBPM}>+</button><br/><br/>
            <button style = {playBtn}>PLAY</button>
        </div>
        </>
    )
}