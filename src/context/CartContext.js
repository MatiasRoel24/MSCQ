import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ( { children } ) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (product)  => {  

        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart){
            setCartItems(
                cartItems.map((productosEnCarrito) =>{
                    if(productosEnCarrito.id === product.id){
                        return{...product, amount: productosEnCarrito.amount + 1}
                    }
                    else{
                        return productosEnCarrito;
                    }
                })
            )
        }
        else{
            setCartItems([...cartItems, {...product, amount:1}])
        }
    }

    /* function contadorCarrito(cartList){
        cartList.length
    } */


     const deleteItemToCart = (product) =>{
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart.amount === 1){
            setCartItems(
                cartItems.filter( productInCart => productInCart.id !== product.id)
            )
        }
        else
        {
            setCartItems((productInCart => {
                if(productInCart.id === product.id){
                    return{...inCart, amount : inCart.amount-1}
                }
                    else {
                        return productInCart
                    }
            }))
        }
    }
 
    const vaciarCarrito = () =>{
        setCartItems([])
    }


    return(
        <CartContext.Provider value={ { 
            cartItems,
            addToCart,
            deleteItemToCart,
            vaciarCarrito
         }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
