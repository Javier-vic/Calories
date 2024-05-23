import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link mx-4 text-white active' : 'nav-link mx-4 text-white';
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm fixed-nav px-5 shadow-lg">
            
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">Calculadora de calor&iacute;as</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-solid fa-bars"></i>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                        <li className="nav-item">
                            <Link className={isActive("/")} to="/">Calculadora</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/funcionamiento")} to="/funcionamiento">Como funciona</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/proyecto")} to="/proyecto">Sobre el proyecto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;