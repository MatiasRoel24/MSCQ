import React from "react";
import { useCartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Formulario = () => {
  const { cartList, priceTotal, emptyCart } = useCartContext();

  async function generateOrder(valores) {
    let order = {};

    order.buyer = valores;
    order.total = priceTotal();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, nombre, precio };
    });

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Su compra se realizo con exito.
            Su numero de pedido es: ${resp.id}`,
          showConfirmButton: true,
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__bounceOut",
          },
        })
      )
      .catch((err) => console.log(err))
      .finally(() => emptyCart());

    const queryCollectionStock = collection(db, "items");

    const queryActulizarStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActulizarStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock -
            cartList.find((item) => item.id === res.id).cantidad,
        })
      )
    );

    batch.commit();
  }

  return (
    <Formik
      initialValues={{
        email: "",
        emailval: "",
        phone: "",
        name: "",
      }}
      validate={(valores) => {
        let errores = {};

        /* VALIDATION NAME */
        if (!valores.name) {
          errores.name = "Por favor ingresa un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
          errores.name = "El nombre solo puede contener letras y espacios";
        }

        /* VALIDATION NUMBER */

        if (!valores.phone) {
          errores.phone = "Por favor ingresa su numero";
        }

        /* VALIDATION EMAIL */

        if (!valores.email) {
          errores.email = "Por favor ingresa un correo";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
        }

        /* VALIDATION CONFIRMATION EMAIL */

        if (!valores.emailval) {
          errores.emailval = "Por favor ingresa un correo";
        } else if (valores.emailval != valores.email) {
          errores.emailval = "El correo NO coincide";
        }

        return errores;
      }}
      onSubmit={(valores) => {
        generateOrder(valores);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="contenedor__form">
            <h5 className="title__formulario">Ingrese sus datos: </h5>
            <div className="form-control">
              <label htmlFor="email">Correo:</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="correo@correo.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="emailval">Correo validacion:</label>
              <input
                className="input"
                type="email"
                id="emailval"
                name="emailval"
                placeholder="correo@correo.com"
                value={values.emailval}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.emailval && errors.emailval && (
                <div className="error">{errors.emailval}</div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="phone">Numero:</label>
              <input
                className="input"
                type="number"
                id="phone"
                name="phone"
                placeholder="Ingrese su numero"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && (
                <div className="error">{errors.phone}</div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="name">Nombre:</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
              
            </div>
            
            <button
              className="cartnot__select cartnot__select--finalizar"
              type="submit"
            >
              Comprar
              <i className="fa-solid fa-bag-shopping icono-bolso"></i>
            </button>
            
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Formulario;
