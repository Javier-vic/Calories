const Footer = () => {
    return (
        <footer className="mb-0 text-center">
            <div className="container pt-2">
                <section className="">                   
                    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="https://www.linkedin.com/in/javier-victoriano/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-body m-1" href="https://github.com/Javier-vic">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center pb-3">
                Desarrollado por <a href="https://javiervictoriano.com" className="footer-name">Javier Victoriano</a>
            </div>
        </footer>
    );
}

export default Footer;