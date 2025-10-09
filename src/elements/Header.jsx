import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Header(props) {
    const navbar = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
    }

    const button = {
        padding: "5px 20px",
        backgroundColor: "rgba(59, 71, 71, 0.55)",
        boxShadow: "1px 2px 2px rgb(178, 178, 178)",
        fontSize: "18px",
        color: "white",
        border: "none",
        borderRadius: "5px",
        textDecoration: "none",
        transition: "0.3s ease",
        cursor: "pointer"}

    return (
        <header className="top-bottom-elements" >
            <h1>My Guitar Guide</h1>
            <h3>{props.page}</h3>
            <hr></hr>
            <nav style = {navbar}>
                <Link style = {button} to = "/"> Home</Link>
                <Link style = {button} to = "/GuitarPage">Guitars</Link>
                <Link style = {button} to = "/Amppage">Amplifiers</Link>
                <Link style= {button} to = "/GuidePage"> Guide</Link>
                <Link style = {button} to = "/Login">Login</Link>
            </nav>
            <hr/>
        </header>
       
    )
}

Header.propTypes = {
    page: PropTypes.string.isRequired
};
Header.defaultProps = {
    page: "Unknown ",
};

export default Header;