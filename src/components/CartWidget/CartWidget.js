import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

function CartWidget() {
    /* const { contadorCarrito } = useCartContext()

    const cantidad = () =>
        contadorCarrito()
    } */

   /*  console.log(cantidad) */
    return(
        <div>
            <Link to = '/cart'>
                <i className="fa-solid fa-cart-shopping icon-cart"></i>
            </Link> 
        </div>
    )
}

export default CartWidget