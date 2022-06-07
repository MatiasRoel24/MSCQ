import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {producto} ) => {
    /* console.log(producto)  */

    const { addToCart, cartList } = useCartContext()
    const [isItemCount, setIsItemCount] = useState(true)
    

    const onAdd = (cant) => {
        console.log(cant)
        addToCart( {...producto, cantidad: cant } )
        setIsItemCount(false)
    }
    
    return(
        <div key={producto.id}>
            <div className='destino__contenedor'>
                    <h1 className="destino__titulo">Destino: {producto.name}</h1>
                    <i className={producto.icono}></i>
            </div>
            <div className="contenedor__itemdetail">
                <img className='idetail__img' src= {producto.url} alt="paisaje" />
                <div className='idetail__info'>
                    <h2 className="idetail__titulo">{producto.name}</h2>
                    <h2 className="idetail__terreno">Terreno de: {producto.terreno}</h2>
                    <h2 className="idetail__descripcion">{producto.description}</h2>
                    <h2 className="idetail__precio">El precio es: <span className='idetail__precio--span'>${producto.precio}</span> </h2>
                    <h2 className="idetail__stock">Pasajes disponibles: {producto.stock}</h2>
                    {isItemCount ? 
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/> 
                    :  
                    <>
                        <Link to='/'>
                            <button className="">Seguir Comprando</button>
                        </Link>
                        <Link to='/cart'>
                            <button className="">Ir al carrito</button>
                        </Link>
                    </>
                }
                </div>
        
            </div>
        </div>
    )
}

export default ItemDetail