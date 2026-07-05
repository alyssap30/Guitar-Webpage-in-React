import PropTypes from "prop-types";
import React, { use, useState } from "react";


export function Course(props) {
    // Styles for the amps cards
    const [showMore, setShowMore] = useState(false)

    function openLearnMore() {
        setShowMore(true)}

    function closeLearnMore() {
        setShowMore(false)}

    const CardStyle = {
        backgroundColor: "white",
        width: "80%",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 10px",
        padding: "20px",
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
        textAlign: "centre",
        borderRadius: "8px",
        position: "fixed",
        top: "50%",
        left: "49.5%",
        transform: "translate(-50%, -50%)",
        zindex: "1000",
        display: showMore ? "inline-block" : "none"};
    
    const [percentageComplete, setpercentageComplete] = useState(0);

    return (
        <>
            <div style = {CardStyle}>
                <h2>{props.name}</h2>
                <p>{props.estimatedCompletion}</p>
                <p style={{color: "green"}}>{percentageComplete}% Completed</p>
                <button className = "itemButton" onClick={openLearnMore}>Learn More</button>
                <button className = "itemButton">Start Course</button><br>
                </br><br></br></div>

                <div style = {LearnMoreStyle}>
                    <h2>{props.name}</h2>
                    <h3>Course Description</h3>
                    <p>{props.courseDescription}</p>
                    <button className = "itemButton" onClick={closeLearnMore}>Close</button>
                    <button className = "itemButton">Start Course</button><br></br>
                </div>
        </>
    )
}

Course.propTypes = {
    name: PropTypes.string.isRequired,
    estimatedCompletion: PropTypes.string.isRequired,
    courseDescription: PropTypes.string.isRequired
};
Course.defaultProps = {
    name: "Unknown Course",
    estimatedCompletion: "Unknown",
    courseDescription: "Unknown"
};