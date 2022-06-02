import React,{ useContext, useEffect, useState } from "react"
import { useCartContext } from "../../context/CartContext" 

const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    const { cartItems, vaciarCarrito } = useCartContext() 

    useEffect(() =>{
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount,0)
        );   
    }, [cartItems]);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.precio,0)

    console.log(productsLength)

    return(
        <div> 
            <div>
                <div><h1 className="productosss">{productsLength}</h1></div>
            </div>


            <div className='cart'> 
                {cartItems.map(product => <li> {product.name} - ${product.precio} - {product.amount} </li>)}
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div> 
    ) 
}

export default Cart