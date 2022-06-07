import { useCartContext } from "../../context/CartContext" 
import React,{ useEffect, useState } from "react"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList,removeItem,precioTotal,vaciarCarrito} = useCartContext()
    const [productsLength, setProductsLength] = useState(0);
  


     async function generarOrden (){
    let orden = {}

      orden.buyer = {name: 'Matias', email: 'matias.24@live.com', phone: '1164022141'}
      orden.total = precioTotal()
      
      orden.items = cartList.map(cartItem => {
          const id = cartItem.id
          const nombre = cartItem.name
          const precio = cartItem.precio * cartItem.cantidad

          return {id,nombre,precio}
      }) 
      // CREAR

    const db = getFirestore()
      const queryCollection = collection(db, 'orders')
      addDoc(queryCollection, orden)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito()) 
    }

      // UPDATE
      
     /*  const queryItem = doc(db,'items', Busco el id del item que quiero cambiar) 

       updateDoc( queryItem, {
          stock: 99
      })
      .then(() => console.log('tarea termi')) */

      /* Actualizar stock 1:30 */

  /* } */
    /* useEffect(() => {
        setProductsLength(
          cartItems?.reduce((previous, current) => previous + current.amount, 0)
        );
      }, [cartItems]);
    
      const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.precio,
        0
      ); */
    

    /* console.log(cartItems) */

    return(
        <div>
            <div className='cart'> 
            {cartList.length === 0 ? 
                <div className="container mt-5">
                    <label className="alert alert-warning">NO HAY PRODUCTOS EN EL CARRITO</label><br />
                    <Link to='/productos'>
                        <button className='btn btn-outline-primary'>Seleccionar productos</button>
                    </Link>
                </div>
            :
                <>
                    {cartList.map(product =>    <div key={product.id} >
                                                    <li >
                                                        <img src={product.foto} style={{width: 60}} />
                                                        {product.name} - price: {product.price} - cantidad: {product.cantidad}
                                                        {' '}
                                                        <button className='btn btn-outline-primary' onClick={()=> removeItem(product.id)}> X </button> 
                                                    </li>
                                                </div>)}
                    <h2>El precio total es: {precioTotal()}</h2>
                    <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar carrito</button>
                    <button  className="btn btn-outline-primary"  onClick={generarOrden} >Terminar Compra</button>
                    
                   
                </>
            }
            </div>
        </div> 
    ) 
}

export default Cart