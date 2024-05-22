import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm fixed-nav px-5">
            
            <div className="container-fluid">
                <a className="navbar-brand">Calculadora de calor&iacute;as</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-solid fa-bars"></i>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link mx-4" to="/">Calculadora</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-4" to="/funcionamiento">Como funciona</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-4" to="/proyecto">Sobre el proyecto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;