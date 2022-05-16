 import React from 'react'
 import ItemCount from '../ItemCount/ItemCount'
 import { Item } from '../Item/item'
/* import { Item } from './Item'  */  

 export const ItemList = ({ productos }) =>{
    console.log(productos)

    const onAdd = () =>{
        console.log('producto agregado al carrito')
    }
    return (
        productos.map( (productos) =>  
           <Item productos = {productos} />
     )
)
    }

