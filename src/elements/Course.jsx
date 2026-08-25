import PropTypes from "prop-types";
import React, { useState } from "react";


export function Course(props) {
    // Variable Declaration 
    let chordButtonArray = [];
    let tipsArray = []


    const [activeChordIndex, setActiveChordIndex] = useState(null);
    const [activeDesIndex, setActiveDesIndex] = useState(null);
    // Display Variables
    const [showMore, setShowMore] = useState(false);
    const [viewContent, setviewContent] = useState(false);
    const [viewExtraContent, setExtraContent] = useState(false);

    function preventWindowStacking() {
        setShowMore(false);
        setviewContent(false);
        setExtraContent(false);
    }
    // Display Manipulation of show more box
    function openLearnMore() {
        preventWindowStacking()
        setShowMore(true)} // Opens (display: 'in-line block')
    function closeLearnMore() {
        setShowMore(false)} // Closes (diplay: 'none')

    // Display Manipulation of course content box
    function openContent() {
        preventWindowStacking()
        setviewContent(true)}
    function closeContent() {
        setviewContent(false)}

    // Display Manipulation of extra content box
    function openExtraContent() {
        preventWindowStacking()
        setExtraContent(true)} // Remembers which chord was selected
    function closeExtraContent() {
        setExtraContent(false)}

    // Styles for the cards
    const [percentageComplete, setpercentageComplete] = useState(0);

    const CardStyle = {
        backgroundColor: "white",
        width: "90%",
        boxSizing: "border-box",
        maxWidth: "600px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px",
        padding: "3%",
        textAlign: "center",
        borderRadius: "8px",
        display: "inline-block"};
    
    const LearnMoreStyle = {
        backgroundColor: "white",
        width: "90%",
        height: "40%",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        position: "fixed",
        top: "50%",
        left: "49.5%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        display: showMore ? "inline-block" : "none"};

        const CourseContentStyle = {
            backgroundColor: "white",
            width: "90%",
            height: "40%",
            boxSizing: "border-box",
            maxWidth: "500px",
            boxShadow: "5px 5px 5px lightgray",
            height: "auto",
            maxHeight: "95vh",
            overflow: "auto",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
            position: "fixed",
            top: "50%",
            left: "49.5%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
            display: viewContent ? "inline-block" : "none"};
        
        const ExtraContentStyle = {
            backgroundColor: "white",
            width: "90%",
            height: "40%",
            boxSizing: "border-box",
            maxWidth: "500px",
            maxHeight: "95vh",
            overflow: "auto",
            boxShadow: "5px 5px 5px lightgray",
            height: "auto",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px",
            position: "fixed",
            top: "50%",
            left: "49.5%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
            display: viewExtraContent ? "inline-block" : "none"};
        
        const buttonStyle = {
            padding: '2%',
            margin: '1%',
            borderRadius: '8px',
            border: 'none',
            color: 'white',
            backgroundColor: 'gray'
        }

        const imageStyle = {
            width: "90%"
        }


    if (props.courseType === 'Chords') {
        for (let i = 0; i < props.numberOfChords.length; i++) {
            chordButtonArray.push (
                <button style = {buttonStyle} 
                onClick={() => {
                    setActiveDesIndex(i);
                    setActiveChordIndex(i);
                    openExtraContent()}}>{props.chords[i]} Chord</button>
            )}}
    else if (props.courseType === 'Tips' && props.listTips.length != 0) {
        for (let i = 0; i < props.listTips.length; i++) {
            tipsArray.push (
                <li key ={`tip=${i}`}>{props.listTips[i]}</li>
            )
        }
    }

    // Declares elements for the course content box based on the course type
    const courseContentDisplay = () => {
        if (props.courseType === 'Chords') {
            return (
                <>
                    {chordButtonArray}<br/><br/>
                    <h3>How to Read Chord Diagrams</h3>
                    <ol>
                        <li>From left to right the vertical lines represent strings in the order: low E, A, D, G, B and high E</li>
                        <li>Each horizontal line represents the fret with the thickest line being fret 0 (open string) and the filrst line being fret 1, the second horizonal line being fret 2 ect</li>
                        <li>The circles on the verticle lines represent your finger position</li>
                        <li>The numbers in the circle state which finger to use with a number. E.g if 1 in the circle you would use your index finger for fretting that note</li>
                    </ol>
                </>);
        }
        else if (props.courseType === 'Tips') {
            return (
                <>
                <img style = {imageStyle} src = {props.imgURL}/>
                <p>{props.text}</p>
                <ol>{tipsArray}</ol>
                </>);
        }

    }
    
        
    return (
        <>
            <div style = {CardStyle}>
                <h2>{props.name}</h2>
                <p>{props.estimatedCompletion}</p>
                <p style={{color: "green"}}>{percentageComplete}% Completed</p>
                <button className = "itemButton" style={{width: "45%"}} onClick={openLearnMore}>Learn More</button>
                <button className = "itemButton" style={{width: "45%"}} onClick={openContent}>Start Module</button><br>
                </br><br></br></div>

                <div style = {LearnMoreStyle}>
                    <h2>{props.name}</h2>
                    <h3>Course Description</h3>
                    <p>{props.courseDescription}</p>
                    <button className = "itemButton" onClick={closeLearnMore}>Close</button>
                    <button className = "itemButton" onClick={openContent}>Start Module</button><br></br>
                </div>

                <div style = {CourseContentStyle}>
                    <h2>{props.name}</h2>
                    {courseContentDisplay()}
                    <button className = "itemButton" style={{width: "35%"}} onClick={closeContent}>Close</button>
                        <button className="itemButton" style={{width: "35%"}}>Mark as Complete</button>
                </div>

                <div style = {ExtraContentStyle}>
                    {activeChordIndex !== null &&(
                        <>
                        <h2>{props.chords[activeChordIndex]} Chord Diagram</h2><br/>
                        <img style = {{ width: "70%", height: "auto" }}src = {props.chordURL[activeChordIndex]} alt ={`${props.chords[activeChordIndex]} Chord Diagram`}/>
                        <br/><br/>
                        <button style = {buttonStyle} onClick={() => {closeExtraContent(); openContent()}}>Close</button>
                        </>)}
                </div>
        </>
    );
}

Course.propTypes = {
    name: PropTypes.string.isRequired,
    estimatedCompletion: PropTypes.string.isRequired,
    courseDescription: PropTypes.string.isRequired
};
Course.defaultProps = {
    name: "Unknown Course",
    estimatedCompletion: "Unknown",
    courseDescription: "",
    courseType: "",
    chords: [],
    chordURL: [],
    numberOfChords: 0
};