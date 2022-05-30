import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( { children } ) => {

    const [cartList, setcartList] = useState([])

    function addToCart(item) {
        setcartList([
            ...cartList,
            item
        ])
    }

   /*  const eliminarItem = (id) =>{

    }
 */
    const vaciarCarrito = () =>{
        setcartList([])
    }


    return(
        <CartContext.Provider value={ { 
            cartList,
            addToCart,
            vaciarCarrito
         }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider