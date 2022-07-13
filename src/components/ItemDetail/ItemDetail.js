import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCartContext();
  const [isItemCount, setIsItemCount] = useState(true);

  const onAdd = (cant) => {
    addToCart({ ...product, cantidad: cant });
    setIsItemCount(false);
  };

  return (
    <div key={product.id}>
      <div className="destino__container">
        <h1 className="destino__title">Destino: {product.name}</h1>
        <i className={product.icono}></i>
      </div>
      <div className="contenedor__itemdetail">
        <img className="idetail__img" src={product.url} alt="paisaje" />
        <div className="idetail__info">
          <h2 className="idetail__title">{product.name}</h2>
          <h2 className="idetail__terreno">Terreno de: {product.terreno}</h2>
          <h2 className="idetail__description">{product.description}</h2>
          <h2 className="idetail__price">
            El precio es:{" "}
            <span className="idetail__precio--span">${product.precio}</span>{" "}
          </h2>
          <h2 className="idetail__stock">
            Pasajes disponibles: {product.stock}
          </h2>
          {isItemCount ? (
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          ) : (
            <>
              <Link to="/productos" className="linkRoutes">
                <button className="btn-grad">Seguir Comprando</button>
              </Link>
              <Link to="/cart" className="linkRoutes">
                <button className="btn-grad">Ir al carrito</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
