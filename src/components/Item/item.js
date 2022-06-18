import React from 'react'
import { Link } from 'react-router-dom'



export const Item = ( {productos} ) =>{
   
    return(
        <div className="card_contenedor" key={productos.id}>
            <img className='card__img' src= {productos.url} alt="img"/>
            <h2 className="card__titlo">{productos.name}</h2>
            <div className='terreno__contenedor'>
                <h3 className="card__terreno">Terreno de: {productos.terreno}</h3>
                <i className={productos.icono}></i>
            </div>
            <h3 className="card__stock">Pasajes disponibles: <span className='card__stock--span'>{productos.stock}</span></h3>
            
            <Link to ={`/detalle/${productos.id}`} className="linkRoutes">
                <button className="card__btn">Comprar</button>
            </Link>
    </div> 
    )
}
