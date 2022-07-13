import { Link, NavLink } from "react-router-dom";


function NavBar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg color-header">
        <div className="container-fluid">
          <Link to="/" className="linkRoutes">
            <h2 className="navbar-brand text-white fs-4 p-4">MCSQ</h2>
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon justify-content-center"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <NavLink to="/" className="text-decoration-none fs-3 p-2">
                <li className="nav-link nav-item text-white text-center ">Inicio</li>
              </NavLink>
              <NavLink
                to="/productos"
                className="nav-item text-decoration-none fs-3 p-2"
              >
                <li className="nav-link nav-item text-white text-center">Vuelos</li>
              </NavLink>
              <NavLink
                to="/nosotros"
                className="nav-item text-decoration-none fs-3 p-2"
              >
                <li className="nav-link text-white text-center">Nosotros</li>
              </NavLink>
            </ul>
          </div>

        </div>
        
        
      </nav>    
    </header>
  );

}

export default NavBar;
