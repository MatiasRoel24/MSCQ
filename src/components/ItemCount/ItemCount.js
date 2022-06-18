import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext'

function ItemCount({initial,stock,onAdd}) {

     const [count, setCount] = useState(initial); 
    const { addToCart} = useCartContext()

    const handleAdd = () =>{
        if(count < stock){
            setCount (count + 1)           
        }
    }

    const handleSubstract = () =>{
        if(count > initial){
            setCount (count - 1)
        }
    } 

   
    return(
    
    <>   
    <div className='contendor__count'>
        <h2 className='title__count'>Seleccione los pasajes que desee:</h2>
        <p className='contador'>{count}</p>
        <div className='contendor__botones'>
            <button className='btn-count btn-count--red' onClick={ handleSubstract }>-</button>
            <button className='btn-count' onClick={ handleAdd }>+</button>
        </div>
            <button className='btn-agregarcarrito' onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
    
    </> 
    )
}

export default ItemCount