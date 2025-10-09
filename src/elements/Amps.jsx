import PropTypes from "prop-types";
import { useState } from "react";

export function Amps(props) {
        const [showMore, setShowMore] = useState(false)

        // Styles for the guitar cards
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

        const ImageStyle= {
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
            borderRadius: "6px"
        };

        // Learn More and Buy Now buttons

        const [power, setPower] = useState("Unknown");
        const [channels, setChannels] = useState("Unknown");
        const [speakersize, setSpeakersize] = useState("Unknown");
        const [effects, setEffects] = useState("Unknown");
        const [weight, setWeight] = useState("Unknown");
        const [colour, setColour] = useState("Unknown");
        const [dimensions, setDimensions] = useState("Unknown");
        const [extrainfo, setExtra] = useState("Unknown");
        const [footswitch, setFootswitch] = useState("Unknown");

        const handleLearnMore = () => {
            setShowMore(!showMore);
            if (props.name === "Marshall MG50GFX") {
                setPower("50W");
                setChannels("4 Analog Channels");
                setSpeakersize("12 inch");
                setEffects("Reverb, Chorus, Flanger, Phaser, Octaver, Vibrate and Delay");
                setWeight("16.6kg");
                setColour("Black/Gold"); 
                setDimensions("518 x 494 x 278 mm");
                setExtra("");
                setFootswitch("Yes");}
            
            if (props.name === "Marshall Code 50") {
                setPower("50W");
                setChannels("4 Digital Channels");
                setSpeakersize("12 inch");
                setEffects("24 Professional Effects including Reverb, Delay, Chorus, Flanger, Phaser, Tremolo and Vibrato");
                setWeight("13kg");
                setColour("Black"); 
                setDimensions("530 x 440 x 280 mm");
                setExtra("100 Presets and Bluetooth connectivity");
                setFootswitch("Yes");}
            
            if (props.name === "Marshall JVM410H") {
                setPower("100W");
                setChannels("4 Channels");
                setSpeakersize("N/A - Head Unit");
                setEffects("Digital Reverb and Delay");
                setWeight("22g");
                setColour("Black"); 
                setDimensions("740 x 310 x 215 mm");
                setExtra("Must be used with a speaker cabinet");
                setFootswitch("Yes");}
    
            if (props.name === "Fender 65 Twin Reverb") {
                setPower("85W");
                setChannels("2 Channels");
                setSpeakersize("2x 12 inch");
                setEffects("Spring reverb and tremolo");
                setWeight("29 kg");
                setColour("Black"); 
                setDimensions("673 x 267 x 5050 mm");
                setExtra("Includes tilt-back stand");
                setFootswitch("Yes ");}

            if (props.name === "Fender Champion II 100") {
                setPower("100W");
                setChannels("2 Channels");
                setSpeakersize("2x 12 inch");
                setEffects("Reverb, Delay, Chorus, Vibratone, Tremolo and Phaser");
                setWeight("18kg");
                setColour("Black"); 
                setDimensions("260 x 483 x 660 mm");
                setExtra("Built-in recorder and aux input");
                setFootswitch("Yes");}
            
            if (props.name === "Fender Mustang LT50") {
                setPower("50W");
                setChannels("1 Channel");
                setSpeakersize("12 inch");
                setEffects("20 Amp Models and 25 Effects");
                setWeight("9kg");
                setColour("Black"); 
                setDimensions("432 x 216 x 419 mm");
                setExtra("60 Memory slots for saving presets");
                setFootswitch("Yes");}
            
        };
        // HTML
        return (
        <>
            <div style = {CardStyle}>
                <img style = {ImageStyle} src={props.ImageSrc} alt={props.ImageAlt}></img>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <button className = "AmpButton" onClick={handleLearnMore}>Learn More</button>
                <button className = "AmpButton"><a href = {props.buyurl} target="_blank">Buy Now</a></button><br>
                </br><br></br>

                <div style={Learnmorebox}>
                    <h2>{props.name}</h2>
                    <p>Power: {power}</p>
                    <p>Weight: {weight}</p>
                    <p>Speaker Size: {speakersize}</p>
                    <p>Colour: {colour}</p>
                    <p>Dimensions: {dimensions}</p>
                    <p>Channels: {channels}</p>
                    <p>Effects: {effects}</p>
                    <p>Footswitch: {footswitch}</p>
                    <p>Extra Info: {extrainfo}</p>
                    <button className='AmpButton' onClick={() => setShowMore(false)}>Close</button>
                    <button className='AmpButton'><a href = {props.buyurl} target="_blank">Buy Now</a></button>
                    </div>
                </div>
        </>
    );
}

Amps.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ImageSrc: PropTypes.string.isRequired,
    ImageAlt: PropTypes.string,
    buyurl: PropTypes.string.isRequired
};
Amps.defaultProps = {
    name: "Unknown Guitar",
    price: "Price not available"
};
