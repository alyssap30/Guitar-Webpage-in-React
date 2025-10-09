import PropTypes from 'prop-types';
import { useState } from 'react';

function Guitars(props) {

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

    const [body, setBody] = useState("Unknown");
    const [neck, setNeck] = useState("Unknown");
    const [fingerboard, setFingerboard] = useState("Unknown");
    const [neckprofile, setNeckprofile] = useState("Unknown");
    const [scale, setScale] = useState("Unknown");
    const [nut, setNut] = useState("Unknown");
    const [GuitarColour, setGuitarColour] = useState("Unknown");
    const [NumberOfFrets, setNumberOfFrets] = useState("Unknown");
    const [pickup, setPickup] = useState("Unknown");
    const [controls, setControls] = useState("Unknown");
    const [bridgestyle, setBridgestyle] = useState("Unknown");

    const handleLearnMore = () => {
        setShowMore(!showMore);
        if (props.name === "Gibson Les Paul") {
            setBody("Mahogany");
            setNeck("Mahogany");
            setNeckprofile("Slim Taper");
            setScale("628mm");
            setNut("43mm Graphtech");
            setFingerboard("Rosewood");
            setGuitarColour("Vintage Bourbon Burst"); 
            setNumberOfFrets("22");
            setPickup("2 60s Burstbucker Humbuckers");
            setControls("2 Volume, 2 Tone, 3-Way Toggle Switch");
            setBridgestyle("Tune-O-Matic");

        }
        if (props.name === "Gibson SG Standard") {
            setBody("Mahogany");
            setNeck("Mahogany");
            setFingerboard("Rosewood");
            setNeckprofile("Rounded");
            setScale("628mm");
            setNut("43mm Graphtech");
            setGuitarColour("Heritage Cherry");
            setNumberOfFrets("22");
            setPickup("2 Humbuckers");
            setControls("2 Volume, 2 Tone, 3-Way Toggle Switch");
            setBridgestyle("Tune-O-Matic");
        }
        if (props.name === "Gibson 80s Explorer") {
            setBody("Mahogany");
            setNeck("Mahogany");
            setFingerboard("Rosewood");
            setNeckprofile("Slim Taper");
            setScale("628mm");
            setNut("43mm Graphtech");
            setGuitarColour("Black Ebony");
            setNumberOfFrets("22");
            setPickup("2 80s Tribute Humbuckers");
            setControls("2 Volume, 1 Tone, 3-Way Toggle Switch");
            setBridgestyle("Tune-O-Matic");
        }
        if (props.name === "Fender Stratocaster") {
            setBody("Poplar");
            setNeck("Maple");
            setFingerboard("Rosewood");
            setNeckprofile("Modern C");
            setScale("648mm");
            setNut("42.86mm Micarta");
            setGuitarColour("3 Colour Sunburst");
            setNumberOfFrets("21");
            setPickup("3 Single-Coil Pickups");
            setControls("1 Master Volume, 2 Tone, 5-Way Switch");
            setBridgestyle("Vintage-Style Synchronized Tremolo");
        }
        if (props.name === "Fender Telecaster") {
            setBody("Ash");
            setNeck("Maple");
            setFingerboard("Maple");
            setNeckprofile("Modern C");
            setScale("648mm");
            setNut("42mm Synthetic Bone");
            setGuitarColour("Butterscotch Blonde");
            setNumberOfFrets("22");
            setPickup("2 Single-Coil Pickups");
            setControls("1 Master Volume, 1 Master Tone, 3-Way Switch");
            setBridgestyle("6-Saddle String-Through-Body Hardtail");
        }
        if (props.name === "Fender Mustang") {
            setBody("Alder");
            setNeck("Maple");
            setFingerboard("Rosewood");
            setNeckprofile("Modern C");
            setScale("609mm");
            setNut("42mm Synthetic Bone");
            setGuitarColour("Aquatone Blue");
            setNumberOfFrets("22");
            setPickup("2 Single-Coil Pickups");
            setControls("1 Master Volume, 1 Master Tone, 3-Way Switch");
            setBridgestyle("6-Saddle String-Through-Body Hardtail");
        }
        if (props.name === "Ibanez JEMJRL-WH") {
            setBody("Meranti");
            setNeck("Maple");
            setFingerboard("Jatoba");
            setNeckprofile("Wizard III");
            setScale("648mm");
            setNut("");
            setGuitarColour("White");
            setNumberOfFrets("24");
            setPickup("2 Quantum Humbuckers, 1 Quantum Single Coil");
            setControls("1 Master Volume, 1 Tone, 5-Way Switch");
            setBridgestyle("Standard double-locking tremolo Floyd Rose");
        }
        if (props.name === "Ibanez TOD10-MM Tim Henson") {
            setBody("Basswood");
            setNeck("Bolt-on Maple");
            setFingerboard("Ebony");
            setNeckprofile("AZ Oval C");
            setScale("648mm");
            setNut("Graph tech");
            setGuitarColour("Metallic Mauve");
            setNumberOfFrets("24");
            setPickup(" 2 Fishman Fluence Tim Henson Signature Series");
            setControls("Volume and tone control with push/pull function");
            setBridgestyle("");
        }
        if (props.name === "Ibanez ICHI10-VWM") {
            setBody("Nyatoh");
            setNeck("Bolt-on Maple");
            setFingerboard("Roasted birdseye maple");
            setNeckprofile("Wizard C");
            setScale("648mm");
            setNut("Plastic");
            setGuitarColour("Vintage White Matte");
            setNumberOfFrets("24");
            setPickup("3 S1 single coils");
            setControls("Volume and tone controls");
            setBridgestyle("Ibanez Mono-Tune");
        }
    };

    // HTML
    return (
        <div style = {CardStyle}>
            <img style = {ImageStyle} src={props.ImageSrc} alt={props.ImageAlt}></img>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button className = "GuitarButton" onClick = {handleLearnMore}>Learn More</button>
    <button className = "GuitarButton"><a href = {props.buyurl} target="_blank">Add to Cart</a></button><br>
            </br><br></br>

            <div style={Learnmorebox}>
                <h2>{props.name}</h2>
                <p>Body: {body}</p>
                <p>Neck: {neck}</p>
                <p>Neck Profile: {neckprofile}</p>
                <p>Scale: {scale}</p>
                <p>{nut} Nut</p>
                <p>Fingerboard: {fingerboard}</p>
                <p>Colour: {GuitarColour}</p>
                <p>{NumberOfFrets} Frets</p>
                <p>Pickups: {pickup}</p>
                <p>Controls: {controls}</p>
                <p>{bridgestyle} Bridge</p>
                <button className='GuitarButton' onClick = {() => setShowMore(false)}>Close</button>
                <button className='GuitarButton'><a href = {props.buyurl} target="_blank">Add to Cart</a></button>
                </div>
            </div>
    );
}

Guitars.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ImageSrc: PropTypes.string.isRequired,
    ImageAlt: PropTypes.string,
    buyurl: PropTypes.string.isRequired
};
Guitars.defaultProps = {
    name: "Unknown Guitar",
    price: "Price not available"
};
export default Guitars;