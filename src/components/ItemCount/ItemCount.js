import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount({initial,stock,onAdd}) {

    const [count, setCount] = useState(0);
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
        {/* <Link to="/cart">
        <button onClick={ () => onAdd(count) } className="btn-grad">Agregar al carrito</button>
        </Link> */}
    </div>
    
    </> 
    )
}

export default ItemCount