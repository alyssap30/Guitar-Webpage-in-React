function Footer(){
    const CurrentYear = new Date().getFullYear();
    return (
        <footer className="top-bottom-elements">
            <p>{CurrentYear} My Website</p>
        </footer>
    )
}

export default Footer;