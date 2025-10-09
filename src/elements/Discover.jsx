import PropTypes from "prop-types";

export default function Discover(props) {

    const box = {
        backgroundColor: "white",
        width: "80%",
        height: "200px",
        boxSizing: "border-box",
        maxWidth: "500px",
        boxShadow: "5px 5px 5px lightgray",
        height: "auto",
        margin: "10px 10px",
        padding: "10px",
        textAlign: "center",
        borderRadius: "8px",
        display: "inline-block"
    };
    const Image = {
        width: "80%",
        height: "40%",
        objectFit: "cover",
        borderRadius: "8px",
    }

    return (
        <>
            <div style = {box}>
                <img style = {Image} src= {props.ImageSrc} alt = {props.ImageAlt}></img>
                <p>{props.text}</p>
            </div>
        </>
    );
}
Discover.propTypes = {
    ImageSrc: PropTypes.string,
    ImageAlt: PropTypes.string,

};
