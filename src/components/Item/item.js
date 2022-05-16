import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ productos }) =>{

    return(
        <div className="card_contenedor" key={productos.id}>
        <h2 className="card__titlo">Socio</h2>
        <img src="{url}" alt="Socio img" />
        <h3 className="card__subtitulo" >{productos.name}</h3>
        <h3 className="card__description">Color del socio: {productos.description}</h3>
        <h3 className="card__stock">Stock disponible: {productos.stock}</h3>
        <ItemCount initial={0} stock={productos.stock}/> 
    </div> 
    )
}
