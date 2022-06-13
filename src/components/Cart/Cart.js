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
            <div> 
              {cartList.length === 0 ? 
                  <div className="cartnot">
                      <label className="cartnot__title">Usted no tiene productos en el carrito</label>
                      <Link to='/productos'>
                          <button className='cartnot__select'>Seleccionar productos</button>
                      </Link>
                  </div>
              :
                  <>
                                                  <div className="cartItems"  >
                                                      <h2 className="cartItems__title">Sus compras:</h2>
                                                      <div className="cartItems__contenedor">
                                                      {cartList.map(product =>
                                                      <div className="aa">
                                                        <div className="cartItems__contenedor-item" key={product.id}>
                                                          <img className="cartItems__img" src={product.url}/>
                                                          <h5 className="cartItems__info-destino"><span>Destino:</span> {product.name}</h5>
                                                          <h5 className="cartItems__info-precio"><span>Precio Unitario: </span>${product.precio}</h5>
                                                          <h5 className="cartItems__info-cantidad"><span>Cantidad de pasajes: </span>  {product.cantidad}</h5>
                                                          <h5 className='cartItems__x' onClick={()=> removeItem(product.id)}> <i class="fas fa-trash-alt"></i></h5> 
                                                        </div>
                                                      </div>
                                                        )}
                                                      </div>
                                                      <h2 className="cartItems__total">El precio total es: <span>{precioTotal()}</span></h2>
                                                      <button onClick={vaciarCarrito} className='cartnot__select'>Vaciar carrito</button>
                                                      <button  className="cartnot__select"  onClick={generarOrden} >Terminar Compra</button>
                                                    </div>  
                                                  {/* </div>)} */}
                      
                    
                  </>
              }
            </div>
        </div> 
    ) 
}

export default Cart