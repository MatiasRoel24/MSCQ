import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return(
        <header className="header">
            <div className="menu">

                <div>
                    <Link to='/' className="linkRoutes">
                        <h2 className="brand__link">MCSQ</h2>
                    </Link>
                </div>

                <nav className="nav">
                    <ul className="nav__ul">   
                    <Link to='/' className="linkRoutes">                    
                        <li className="nav__li nav__link">Inicio</li>
                    </Link> 
                    <Link to='/productos' className="linkRoutes">                    
                        <li className="nav__li nav__link">Productos</li>
                    </Link> 
                    <Link to='/nosotros' className="linkRoutes">                    
                        <li className="nav__li nav__link">Nosotros</li>
                    </Link> 
                    </ul>
                </nav>

               <CartWidget />
            </div>
        </header>
    )
}

export default NavBar; 