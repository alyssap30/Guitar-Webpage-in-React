import PropTypes from "prop-types";
import React, { use, useState } from "react";


export function Modules(props) {

    const [isCompleted, setIsCompleted] = useState(true);

    function completed() {
        setIsCompleted(false);
    }
    const Box = {
        backgroundColor: "white",
        width: "90%",
        height: "40%",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "5px 5px 5px lightgray",
        margin: "10px 10px",
        padding: "20px",
        borderRadius: "8px",
        display: isCompleted ? "inline-block" : "none"};
    
    const [isActive, setIsActive] = useState(false);
    const Box2 = {
        backgroundColor: "rgb(231, 231, 231)",
        width: "90%",
        height: "40%",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 10px",
        padding: "20px",
        textAlign: "left",
        borderRadius: "8px",
        position: "fixed",
        top: "50%",
        left: "49.5%",
        transform: "translate(-50%, -50%)",
        zindex: "1000",
        display: isActive ? "inline-block" : "none"
    }

     function start () {
        setIsActive(true);
    };
    function Close () {
        setIsActive(false);
    }

    function Complete () {
        setIsCompleted(false);
        setIsActive(false);
    }

    const Button = {
        padding: "6px 30px",
        backgroundColor: "rgba(59, 71, 71, 0.55)",
        boxShadow: "1px 2px 2px rgb(178, 178, 178)",
        border: "1px solid black",
        fontSize: "14px",
        color: "white",
        border: "none",
        margin: "0px 2px auto",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "0.3s ease",
        cursor: "pointer"}

    const [Percentage, setPercentage] = useState(0);

    const [check1, setIsCheck1] = useState(false);
    const [check2, setIsCheck2] = useState(false);
    const [check3, setIsCheck3] = useState(false);
    const [check4, setIsCheck4] = useState(false);  
    const [check5, setIsCheck5] = useState(false);

    function handleCheck1 (event) {
        setIsCheck1(event.target.checked);
        if(check1 === false) {
            setPercentage(Percentage + 20);}
        else {
            setPercentage(Percentage - 20);}}

    function handleCheck2 (event) {
        setIsCheck2(event.target.checked);
        if(check2 === false) {
            setPercentage(Percentage + 20);}
        else {
            setPercentage(Percentage - 20);}}

    function handleCheck3 (event) {
        setIsCheck3(event.target.checked);
        if(check3 === false) {
            setPercentage(Percentage + 20);}
        else {
            setPercentage(Percentage - 20);}}

    function handleCheck4 (event){
        setIsCheck4(event.target.checked);
        if(check4 === false) {
            setPercentage(Percentage + 20);}
        else {
            setPercentage(Percentage - 20);}}

    function handleCheck5 (event) {
        setIsCheck5(event.target.value);
        if(check5 === false) {
            setPercentage(Percentage + 20);}
        else {
            setPercentage(Percentage - 20);}}

    return (
        <>
            <div style = {Box}>
                <h4>{props.modname}</h4>
                <p style = {{color: "green"}}>{Percentage}% complete</p>

                <button style = {Button} onClick = {start}>Get Started</button><br/><br/>
                <label><input type = "checkbox" onChange={completed}/>Completed?</label>
            </div>

            <div style = {Box2}>
                <div style = {{textAlign: "center"}}>
                    <h4>{props.modname} Checklist</h4>
                </div>
                <ul>
                    <label><input type = "checkbox" onChange = {handleCheck1}/>{props.check1}</label><br/>
                    <label><input type = "checkbox" onChange = {handleCheck2}/>{props.check2}</label><br/>
                    <label><input type = "checkbox" onChange = {handleCheck3}/>{props.check3}</label><br/>
                    <label><input type = "checkbox" onChange = {handleCheck4}/>{props.check4}</label><br/>
                    <label><input type = "checkbox" onChange = {handleCheck5}/>{props.check5}</label><br/>
                </ul><br/>
                <p>{Percentage}% Completed</p>
                <div style = {{textAlign: "center"}}>
                    <button style = {Button} onClick = {Close}>Close</button>
                    <button style = {Button} onClick = {Complete}>Mark as Complete</button>
                </div>
            </div> 
        </>
    );
}

Modules.propTypes = {
    modname: PropTypes.string.isRequired,
    check1: PropTypes.string,
    check2: PropTypes.string,
    check3: PropTypes.string,
    check4: PropTypes.string,
    check5: PropTypes.string

};