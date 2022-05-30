import { useCartContext } from "../../context/CartContext" 

const Cart = () => {

     const { cartList, vaciarCarrito } = useCartContext() 

    return(

        
         <div className='cart'>
            {cartList.map(product => <li> {product.name} - {product.precio} </li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            
        </div> 
    ) 
}

export default Cart