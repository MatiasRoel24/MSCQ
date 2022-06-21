import React from 'react'

const Formulario = () => {
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

        



  return (
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
  )
}

export default Formulario