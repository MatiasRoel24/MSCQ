import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {producto} ) => {

    const { addToCart } = useCartContext()
    const [isItemCount, setIsItemCount] = useState(true)
    

    const onAdd = (cant) => {
        addToCart( {...producto, cantidad: cant } )
        setIsItemCount(false)
    }
    
    return(
        <div key={producto.id}>
            <div className='destino__container'>
                    <h1 className="destino__title">Destino: {producto.name}</h1>
                    <i className={producto.icono}></i>
            </div>
            <div className="contenedor__itemdetail">
                <img className='idetail__img' src= {producto.url} alt="paisaje" />
                <div className='idetail__info'>
                    <h2 className="idetail__title">{producto.name}</h2>
                    <h2 className="idetail__terreno">Terreno de: {producto.terreno}</h2>
                    <h2 className="idetail__description">{producto.description}</h2>
                    <h2 className="idetail__price">El precio es: <span className='idetail__precio--span'>${producto.precio}</span> </h2>
                    <h2 className="idetail__stock">Pasajes disponibles: {producto.stock}</h2>
                    {isItemCount ? 
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/> 
                    :  
                    <>
                        <Link to='/productos' className="linkRoutes">
                            <button className="btn-grad">Seguir Comprando</button>
                        </Link>
                        <Link to='/cart' className="linkRoutes">
                            <button className="btn-grad">Ir al carrito</button>
                        </Link>
                    </>
                }
                </div>
        
            </div>
        </div>
    )
}

export default ItemDetail