import React, { useState } from 'react';

function ItemCount({initial,stock,onAdd}) {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState( Date() );
    
    const handleAdd = () =>{
        if(count > initial){
            setCount (count + 1)
            setDate( Date() )
        }
    }
    const handleSubstract = () =>{
        if(count > initial){
            setCount (count - 1)
            setDate( Date() )
        }
    }


    return(
    
    <>   
    <div className='contendor__count'>
        <p className='contador'>{count}</p>
        <div className='contendor__botones'>
            <button className='btn-count' onClick={ handleAdd }>+</button>
            <button className='btn-count' onClick={ handleSubstract }>-</button>
        </div>
        <p>Fecha: { date }</p>
    </div>
    
    </> 
    )
}

export default ItemCount