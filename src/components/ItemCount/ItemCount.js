import React, { useState } from 'react';

function ItemCount() {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState( Date() );
  
    const fecha = () => {
        setDate( Date() )
    }

    const sumar = () => {
        setCount(count + 1)
        setDate( Date() )
    } 

    const restar = () => {
        setCount(count - 1)
        setDate( Date() )
    }
    
    return(
    
    <>   
    <div className='contendor__count'>
        <p className='contador'>{count}</p>
        <div className='contendor__botones'>
            <button className='btn-count' onClick={ sumar }>+</button>
            <button className='btn-count' onClick={ restar }>-</button>
        </div>
        <p>Fecha: { date }</p>
    </div>
    
    </> 
    )
}

export default ItemCount