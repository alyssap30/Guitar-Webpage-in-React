import PropTypes from "prop-types";
import React, { use, useState } from "react";

export function Course(props) {
// Styles for the amps cards
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
        
        percentangeComplete = 0

    return (
        <>
            <div style = {CardStyle}>
                <h2>{props.name}</h2>
                <p>{props.estimatedCompletion}</p>
                <p style={{color: "green"}}>{percentangeComplete}% Completed</p>
                <button className = "AmpButton">Learn More</button>
                <button className = "AmpButton">Start Course</button><br>
                </br><br></br>
            </div>
        </>
    )
}

Course.propTypes = {
    name: PropTypes.string.isRequired,
    estimatedCompletion: PropTypes.string.isRequired,
};
Course.defaultProps = {
    name: "Unknown Course",
    estimatedCompletion: "Unknown"
};