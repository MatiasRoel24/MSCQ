import { useCartContext } from "../../context/CartContext" 
import React, { useState } from "react"
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList,removeItem,precioTotal,vaciarCarrito } = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })
  
     async function generarOrden (){

      let orden = {}

      orden.buyer = dataForm
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

        const queryCollectionStock = collection(db, 'items')

        
        const queryActulizarStock = await query(
            queryCollectionStock,   
            where( documentId() , 'in', cartList.map(it => it.id) )            
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> console.log('actualizado'))

        batch.commit()
    }

    const handlerChange = (e) => {
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
  }



    return(
        <div>
            <div> 
              {cartList.length === 0 ? 
                  <div className="cartnot">
                      <label className="cartnot__title">Usted no tiene productos en el carrito</label>
                      <Link to='/productos' className="linkRoutes">
                          <button className='cartnot__select'>Seleccionar productos</button>
                      </Link>
                  </div>
              :
                  <>
                                                  <div className="cartItems"  >
                                                      <h2 className="cartItems__title">Sus compras:</h2>
                                                      <div className="cartItems__contenedor">
                                                      {cartList.map(product =>
                                                      
                                                        <div className="cartItems__contenedor-item" key={product.id}>
                                                          <img className="cartItems__img" src={product.url}/>
                                                          <h5 className="cartItems__info-destino"><span>Destino:</span> {product.name}</h5>
                                                          <h5 className="cartItems__info-precio"><span>Precio Unitario: </span>${product.precio}</h5>
                                                          <h5 className="cartItems__info-cantidad"><span>Cantidad de pasajes: </span>  {product.cantidad}</h5>
                                                          {/* <button className="btn-count btn-count--red" onClick={removeItem}>-</button>
                                                          <button className="btn-count" onClick={addToCart}>+</button> */}
                                                          <h5 className='cartItems__x' onClick={()=> removeItem(product.id)}>X</h5> 
                                                          <div className="precioTotal">
                                                            <h2 className="cartItems__total">Total: <span>${precioTotal()}</span></h2> 
                                                          </div>
                                                        </div>
                                                      
                                                        )}
                                                      </div>
                                                      <div className="container__btnCart">
                                                        <button onClick={vaciarCarrito} className='cartnot__select'>Vaciar carrito</button>
                                                        <button  className="cartnot__select"  onClick={generarOrden} >Terminar Compra</button>
                                                      </div>
                                                    </div>  
                                                  
                      
                    
                  </>
              }

{ cartList.length !== 0 &&
                <center>
                    <form 
                        className='form'
                        onSubmit={generarOrden}         
                        >
                        <h5 className="titulo__formulario">Formulario: </h5>                
                        <input 
                            className='form-control'
                            type='text' 
                            name='name' 
                            placeholder='Ingrese el nombre' 
                            value={dataForm.name}
                            onChange={handlerChange}
                        /><br />
                        <input 
                            className='form-control'
                            type='text' 
                            name='phone'
                            placeholder='Ingrese el telefono' 
                            value={dataForm.phone}
                            onChange={handlerChange}
                        /><br/>
                        <input 
                            className='form-control'
                            type='email' 
                            name='email'
                            placeholder='Ingrese el email' 
                            value={dataForm.email}
                            onChange={handlerChange}
                        /><br/>
                        <input 
                            className='form-control'
                            type='email' 
                            name='email1'
                            placeholder='repita email' 
                            value={dataForm.email}
                            onChange={handlerChange}
                        /><br/>
                    </form>
                </center>

            }

            </div>
        </div> 
    ) 
}

export default Cart