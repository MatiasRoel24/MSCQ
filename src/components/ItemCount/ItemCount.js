import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext'

function ItemCount({initial,stock,item,onAdd}) {

    const [count, setCount] = useState(0);
    const { addToCart} = useCartContext()
    /* const [date, setDate] = useState( Date() ); */
    
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
        <p className='contador'>{count}</p>
        <div className='contendor__botones'>
            <button className='btn-count' onClick={ handleAdd }>+</button>
            <button className='btn-count btn-count--red' onClick={ handleSubstract }>-</button>
        </div>
            <button className='btn-agregarcarrito' onClick={() => addToCart(item)}>Agregar al carrito</button>
    </div>
    
    </> 
    )
}

export default ItemCount