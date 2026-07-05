import PropTypes from "prop-types";
import { useState } from "react";

export function Item(props) {
    const [showMore, setShowMore] = useState(false);

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

    const ImageStyle = {
        width: "80%",
        height: "60%"};
    
    const Learnmorebox = {
        display: showMore ? "block" : "none",
        position: "fixed",
        textAlign: "center",
        zIndex: "1000",
        top: "50%",
        left: "50%",
        width: "70%",
        maxWidth: "400px",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "#f5f5f5",
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
                    {props.spec3 && <p>Colour: {props.spec3}</p>}
                    {props.spec4 && <p>Speaker Size: {props.spec4}</p>}
                    {props.spec5 && <p>Dimensions: {props.spec5}</p>}
                    {props.spec6 && <p>Channels: {props.spec6}</p>}
                    {props.spec7 && <p>Effects: {props.spec7}</p>}
                    {props.spec8 && <p>Footswitch: {props.spec8}</p>}
                    {props.spec9 && <p>Extra Info: {props.spec9}</p>}
                </>
            );}
        
        if (props.type === "Guitar") {
            return (
                <>
                    {props.spec1 && <p>Body: {props.spec1}</p>}
                    {props.spec2 && <p>Neck: {props.spec2}</p>}
                    {props.spec3 && <p>Neck Profile: {props.spec3}</p>}
                    {props.spec4 && <p>Scale: {props.spec4}</p>}
                    {props.spec5 && <p>{props.spec5} Nut</p>}
                    {props.spec6 && <p>Fingerboard: {props.spec6}</p>}
                    {props.spec7 && <p>Colour: {props.spec7}</p>}
                    {props.spec8 && <p>{props.spec8} Frets</p>}
                    {props.spec9 && <p>Pickups: {props.spec9}</p>}
                    {props.spec10 && <p>Controls: {props.spec10}</p>}
                    {props.spec11 && <p>{props.spec11} Bridge</p>}
                </>
            )}}

    return (
    <>
        <div style = {CardStyle}>
            <img style = {ImageStyle} src={props.ImageSrc} alt={props.ImageAlt}/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button className = "itemButton" onClick={handleLearnMore}>Learn More</button>
            <button className = "itemButton"><a href = {props.buyurl} target="_blank">Buy Now</a></button><br>
            </br><br></br>

            <div style={Learnmorebox}>
                <h2>{props.name}</h2>
                {specsDisplay()}
                <button className='itemButton' onClick={() => setShowMore(false)}>Close</button>
                <button className='itemButton'><a href = {props.buyurl} target="_blank">Buy Now</a></button>
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
    buyurl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};
Item.defaultProps = {
    name: "Unknown Item",
    price: "Price not available"
};
