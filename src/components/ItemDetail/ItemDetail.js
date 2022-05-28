import InputClima from '../InputClima/InputClima'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'
import ItemCount from '../ItemCount/ItemCount'
/* import { Link } from 'react-router-dom' */

const ItemDetail = ( {producto} ) => {
    /* console.log(producto)  */

    const onAdd = (cant) => {
        console.log('La cantidad es ' + cant)
    }
    
    return(
        <div>
            <div className='destino__contenedor'>
                    <h1 className="destino__titulo">Destino: {producto.name}</h1>
                    <i className={producto.icono}></i>
            </div>
            <div className="contenedor__itemdetail">
                <img className='idetail__img' src= {producto.url} alt="paisaje" />
                <div className='idetail__info'>
                    <h2 className="idetail__titulo">{producto.name}</h2>
                    <h2 className="idetail__terreno">Terreno de: {producto.terreno}</h2>
                    {/* <h2>Clima de: </h2>
                    <InputClima /> */}
                    <h2 className="idetail__descripcion">{producto.description}</h2>
                    <h2 className="idetail__precio">El precio es: <span className='idetail__precio--span'>${producto.precio}</span> </h2>
                    <h2 className="idetail__stock">Pasajes disponibles: {producto.stock}</h2>
                    <ItemCount initial={0} stock={producto.stock} onAdd={onAdd}/> 
                    <Intercambiabilidad />
                </div>
                {/* <Link to = '/cart'> */}
                    
                {/* </Link> */}
            </div>
        </div>
    )
}

export default ItemDetail