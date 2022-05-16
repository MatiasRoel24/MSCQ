import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return(
        <header>
            <div className="menu">

                <div>
                    <h2 className="brand"><a className="brand__link" href="#">MCSQ</a></h2>
                </div>

                <nav className="nav">
                    <ul className="nav__ul">
                        <li className="nav__li"><a>Inicio</a></li>
                        <li className="nav__li"><a>Productos</a></li>
                        <li className="nav__li"><a>Nosotros</a></li>
                    </ul>
                </nav>

               <CartWidget />
            </div>
        </header>
    )
}

export default NavBar; 