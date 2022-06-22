import React, { useEffect, useState } from 'react'
import { useCartContext } from "../../context/CartContext" 
import Swal from 'sweetalert2'
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";

const Formulario = () => {

    const { cartList,precioTotal,vaciarCarrito } = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })
      
  
     async function generarOrden (e){

      let orden = {}

      orden.buyer = dataForm
      orden.total = precioTotal()

      
      orden.items = cartList.map(cartItem => {
          const id = cartItem.id
          const nombre = cartItem.name
          const precio = cartItem.precio * cartItem.cantidad

          return {id,nombre,precio}
      }) 
      
      

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
        .finally(()=> Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su compra se realizo con exito',
            showConfirmButton: false,
            timer: 2000
          }))

        batch.commit()
    }

    const handlerChange = (e) => {
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
  }

  return (
        <div className='form'>
                        <form 
                            
                            onSubmit={generarOrden}         
                        >
                            <div className="contenedor__form">
                            <h5 className="titulo__formulario">Ingrese sus datos: </h5>                
                            <input 
                                 className='form-control' 
                                type='text' 
                                name='name' 
                                placeholder='Ingrese el nombre' 
                                value={dataForm.name}
                                onChange={handlerChange}
                                
                            />
                            <input 
                                className='form-control'
                                type='text' 
                                name='phone'
                                placeholder='Ingrese el telefono' 
                                value={dataForm.phone}
                                onChange={handlerChange}
                            />
                            <input 
                                className='form-control'
                                type='email' 
                                name='email'
                                placeholder='Ingrese el email' 
                                value={dataForm.email}
                                onChange={handlerChange}
                            />
                            <input 
                                className='form-control'
                                type='email' 
                                name='email1'
                                placeholder='repita email' 
                                value={dataForm.email}
                                onChange={handlerChange}
                            />
                            </div>
                        </form>
                            <button className="cartnot__select cartnot__select--finalizar"  onClick={generarOrden} >Terminar Compra
                                <i className="fa-solid fa-bag-shopping icono-bolso" onClick={generarOrden}></i>
                            </button>
            </div>          
        )
    }

export default Formulario