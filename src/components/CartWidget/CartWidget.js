import { Link } from "react-router-dom"

function CartWidget() {
    return(
        <div>
            <Link to = '/cart'>
                <i className="fa-solid fa-cart-shopping icon-cart"></i>
            </Link> 
        </div>
    )
}

export default CartWidget