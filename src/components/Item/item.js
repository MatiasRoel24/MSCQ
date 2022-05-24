import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ productos }) =>{
    return(
        <div className="card_contenedor" key={productos.id}>
        <h2 className="card__titlo">{productos.name}</h2>
        <img className='card__img' src= {productos.url} alt="img"/>
        <h3 className="card__subtitulo" >Destino: {productos.name}</h3>
        <h3 className="card__description">{productos.description}</h3>
        <h3 className="card__stock">Stock pasajes: {productos.stock}</h3>
        <ItemCount initial={0} stock={productos.stock}/> 
        <Link to ={`/detalle/${productos.id}`}>
            <button className="card__btn">Detalle del producto</button>
        </Link>
        <Link to = '/cart'>
            <button className="card__btn">Comprar</button>
        </Link>
    </div> 
    )
}
