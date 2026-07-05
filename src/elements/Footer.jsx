function Footer(){
    const button = {
        width: "10%",
        height: "10%",
        margin: "0 5px",
        border: 'none'
    };
    const icon = {
        width: "100%",
        height: "100%"};

    const CurrentYear = new Date().getFullYear();

    return (
        <footer className="top-bottom-elements">
            <p>{CurrentYear} My Website</p><br/>
            <button style={button}><a href = "https://www.linkedin.com/in/alyssa-p-2a0479358/" target="_blank"><img style = {icon} src = "https://img.icons8.com/color/1200/linkedin.jpg"/></a></button>
            <button style={button}><a href = "https://github.com/alyssap30" target="_blank"><img style = {icon} src = "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-svg-download-png-8630395.png?f=webp"/></a></button>

        </footer>
    )
}

export default Footer;