import ItemCount from '../ItemCount/ItemCount'
/* import { Link } from 'react-router-dom' */

const ItemDetail = ( {producto} ) => {
    /* console.log(producto)  */

    const onAdd = (cant) => {
        console.log('La cantidad es ' + cant)
    }
    
    return(
        
        <div className="contenedor__itemdetail">
            <div className='destino__contenedor'>
                <h1 className="idetail__titulo">Destino: {producto.name}</h1>
                <i className={producto.icono}></i>
            </div>
            <img src= {producto.url} alt="" />
            <h2 className="idetail__terreno">Terreno de: {producto.terreno}</h2>
            <h2 className="idetail__descripcion">{producto.description}</h2>
            <h2 className="idetail__precio">El precio es: <span className='idetail__precio--span'>${producto.precio}</span> </h2>
            <h2 className="idetail__stock">Pasajes disponibles: {producto.stock}</h2>
            <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}/> 
            {/* <Link to = '/cart'> */}
                
            {/* </Link> */}
        </div>
    )
}

export default ItemDetail