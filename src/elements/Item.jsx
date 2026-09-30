import PropTypes from "prop-types";
import { useState } from "react";

export function Item(props) {
    const [showMore, setShowMore] = useState(false);

    // Styles for the amps cards
    const CardStyle = {
        backgroundColor: "white",
        width: "90%",
        boxSizing: "border-box",
        maxWidth: "400px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 15px",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        display: "inline-block"};

    const ImageStyle = {
        width: "80%",
        height: "60%",
        maxHeight: "300px"
    };
    
    const Learnmorebox = {
        display: showMore ? "block" : "none",
        position: "fixed",
        textAlign: "center",
        zIndex: "1000",
        top: "50%",
        left: "50%",
        width: "70%",
        maxWidth: "500px",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "lightgray",
        borderRadius: "6px"};

    // Learn More buttons
    const handleLearnMore = () => {
        setShowMore(!showMore)};
    // HTML  
    const specsDisplay = () => {
        if (props.type === "Amp") {
            return (
                <>
                    {props.spec1 && <p>Power: {props.spec1}</p>}
                    {props.spec2 && <p>Weight: {props.spec2}</p>}
                    {props.spec3 && <p>Dimensions: {props.spec3}</p>}
                    {props.spec4 && <p>Channels: {props.spec4}, {props.spec6} Footswitch</p>}
                    {props.spec5 && <p>Effects: {props.spec5}</p>}
                    {props.spec7 && <p>Extra Info: {props.spec7}</p>}
                </>
            );}
        
        if (props.type === "Guitar") {
            return (
                <>
                    {props.spec1 && <p>Body + Neck: {props.spec1} + {props.spec2}</p>}
                    {props.spec3 && <p>Fingerboard: {props.spec3}, {props.spec4} frets</p>}
                    {props.spec4 && <p>Body Colour: {props.spec5}</p>}
                    {props.spec6 && <p>Pickups: {props.spec6}</p>}
                    {props.spec7 && <p>Controls: {props.spec7}</p>}
                    {props.spec8 && <p>{props.spec8} Bridge</p>}
                </>
            )}}

    return (
    <>
        <div style = {CardStyle}>
            <img style = {ImageStyle} src={props.ImageSrc} alt={props.ImageAlt}/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button className = "itemButton" style = {{width: "80%"}} onClick={handleLearnMore}>Learn More</button>

            <div style={Learnmorebox}>
                <h2>{props.name}</h2>
                {specsDisplay()}
                <button className='itemButton' style = {{width: "80%"}} onClick={() => setShowMore(false)}>Close</button>
            </div>
        </div>
    </>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ImageSrc: PropTypes.string.isRequired,
    ImageAlt: PropTypes.string,
    type: PropTypes.string.isRequired
};
Item.defaultProps = {
    name: "Unknown Item",
    price: "Price not available"
};
