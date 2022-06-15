import { useCartContext } from "../../context/CartContext" 
import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CartWidget() {

    const { cantidadTotal } = useCartContext() 


    return(
        <div>
            <Link to = '/cart' className="linkRoutes">
                <div className="container__cartwidget">
                    <i className="fa-solid fa-cart-shopping icon-cart"></i>
                    <h1 className="productNumber">{cantidadTotal() !== 0 && cantidadTotal()}</h1>
                </div>
            </Link> 
        </div>
    )
}

export default CartWidget