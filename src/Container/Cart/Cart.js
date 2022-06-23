import React from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext" 
import Formulario from "../../components/Formulario/Formulario";
import Carlist from "../../components/CartList/CartList";

const Cart = () => {

    const { cartList } = useCartContext()
    
    return(
        <div>
            <div> 
          
              {cartList.length === 0 ? 
                  <div className="cartnot">
                      <label className="cartnot__title">Usted no tiene productos en el carrito</label>
                      <Link to='/productos' className="linkRoutes">
                          <button className='cartnot__select'>Seleccionar productos</button>
                      </Link>
                  </div>
              :
                  <>
                  
                    <div className="cartItems" >
                        <div>
                            <h2 className="cartItems__title">Carrito <i className="fas fa-shopping-cart icono-carrito"></i></h2>
                            <Carlist/>
                        </div>
                        <Formulario />
                    </div>  
                  </>
              }
            </div>
        </div> 
    ) 
}

export default Cart