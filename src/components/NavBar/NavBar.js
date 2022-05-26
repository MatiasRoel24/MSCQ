import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return(
        <header className="header">
            <div className="menu">

                <div>
                    <Link to='/'>
                        <h2 className="brand__link">MCSQ</h2>
                    </Link>
                </div>

                <nav className="nav">
                    <ul className="nav__ul">                        
                        <li className="nav__li"><a className="nav__link" href="/">Inicio</a></li>
                        <li className="nav__li"><a className="nav__link" href="/">Productos</a></li>
                        <li className="nav__li"><a className="nav__link" href="/">Nosotros</a></li>
                    </ul>
                </nav>

               <CartWidget />
            </div>
        </header>
    )
}

export default NavBar; 