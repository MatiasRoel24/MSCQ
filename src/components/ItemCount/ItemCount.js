import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setConut] = useState(initial);

  const handlerAdd = () => {
    if (count < stock) {
      setConut(count + 1);
    }
  };

  const handlerSubtract = () => {
    if (count > initial) {
      setConut(count - 1);
    }
  };

  return (
    <>
      <div className="contendor__contador">
        <h2 className="titulo__contador">Seleccione los pasajes que desee:</h2>
        <p className="contador">{count}</p>
        <div className="contendor__botones">
          <button
            className="btn-contador btn-contador--rojo"
            onClick={handlerSubtract}
          >
            -
          </button>
          <button className="btn-contador" onClick={handlerAdd}>
            +
          </button>
        </div>
        <button className="btn-agregarcarrito" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}

export default ItemCount;
