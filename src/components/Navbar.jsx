import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link mx-4 text-white active px-2' : 'nav-link mx-4 text-white px-2';
    }

    return (
        <nav className="navbar navbar-expand-md navbar-toggleable-md fixed-nav px-5 shadow-lg">
            
            <div className="container-fluid">
                <Link to="/calorias/" className="navbar-brand text-white navbar-title">Calculadora de calor&iacute;as</Link>
                <Link to="/calorias/" className="navbar-brand text-white navbar-second-title">Calor&iacute;as</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-solid fa-bars"></i>
                </button>
                <div className="navbar-collapse collapse d-md-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                        <li className="nav-item">
                            <Link className={isActive("/calorias/")} to="/calorias/">Calculadora</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/calorias/funcionamiento")} to="/calorias/funcionamiento">Como funciona</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive("/calorias/proyecto")} to="/calorias/proyecto">Sobre el proyecto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;