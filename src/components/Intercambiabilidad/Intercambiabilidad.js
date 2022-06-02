import { useState } from "react";
import { Link } from "react-router-dom";

/* Funcion */
const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button 
                className="btn__itemDetail" 
                onClick={()=>console.log('Ir al carrito') } 
                >Ir al Carrito <i className="fa-solid fa-cart-shopping "></i>
            </button>      
        </Link>
        <Link to='/productos' >
            <button 
                className="btn__itemDetail" 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando
            <i class="fas fa-shopping-bag icon__btn-shop"></i></button>
        </Link>
        </>
    )
}

/* Funcion */
const ButtonCount= ({handleInter})=> {
    
    return <button 
                className="btn__itemDetail" 
                onClick={handleInter()}
            >Agregar al carrito</button>

}

const Intercambiabilidad = () => {
    

    const [inputType, setInputType ] = useState('button')

    const handleInter=(item,onAdd)=>{
        setInputType('input')
    }
    
    return (
        <div>
            {
                inputType === 'button' ?
                 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
