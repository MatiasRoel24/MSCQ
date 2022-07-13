import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cartlist = () => {
  const { cartList, priceTotal, removeItem, emptyCart } = useCartContext();
  return (
    <div className="cartItems__contenedor">
      {cartList.map((product) => (
        <div className="cartItems__contenedor-item" key={product.id}>
          <img className="cartItems__img" src={product.url} />
          <h5 className="cartItems__info-destino">
            <span>Destino:</span> {product.name}
          </h5>
          <h5 className="cartItems__info-precio">
            <span>Precio Unitario: </span>${product.precio}
          </h5>
          <h5 className="cartItems__info-cantidad">
            <span>Cantidad de pasajes: </span> {product.cantidad}
          </h5>
          <h5 className="cartItems__x" onClick={() => removeItem(product.id)}>
            X
          </h5>
          <div className="precioTotal">
            <button onClick={emptyCart} className="vaciarCarrito">
              Vaciar carrito
              <i className="fa-solid fa-trash icono-basura"></i>
            </button>
            <h2 className="cartItems__total">
              Total: <span>${priceTotal()}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cartlist;
