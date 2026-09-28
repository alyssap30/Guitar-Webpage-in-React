function Footer(){
    const button = {
        backgroundColor: "rgb(59, 71, 71, 0.45)",
        boxShadow: "1px 2px 2px rgb(178, 178, 178)",
        width: "20%",
        color: 'white',
        fontSize: 'medium',
        height: "10%",
        margin: "0 5px",
        border: 'none',
        maxWidth: '90px',
    };
    const text = {
        textDecoration: 'none'
    }

    const CurrentYear = new Date().getFullYear();

    return (
        <footer className="top-bottom-elements">
            <p>Alyssa Phelps {CurrentYear} ©</p><br/>
            <a style = {text} href = "https://www.linkedin.com/in/alyssa-p-2a0479358/" target="_blank"><button style={button}>LinkedIn</button></a>
            <a href = "https://github.com/alyssap30" target="_blank"><button style={button}>GitHub</button></a>

        </footer>
    )
}

export default Footer;