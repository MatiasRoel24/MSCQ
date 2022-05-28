import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";

function ItemListContainer() {
        const [productos, setproductos] = useState([]) // Hacer persistente los valores
        const [loading, setloading] = useState(true)

        useEffect(() => { // me ayuda a que se ejecute despues del return, no bloquea al render
            getFetch()/* () */ // fetch llamada a una api
            .then(respuesta => setproductos(respuesta)) // Capturo la respuesta que me devuelve la promise
            .catch((err) => console.log(err))
            .finally(() => setloading(false)) // al ser falso me cambia el estado de los productos
             
        },[]) /* Que se ejecute una sola ves [] */

        const onAdd = () =>{
            console.log('producto agregado al carrito')
        }

        return (
            <div >
                { loading ? <div className="lds-dual-ring loader__centrado"></div>  // loading true
                    :
                    <div id="Productos" className="contenedor__ILC">
                        <ItemList productos={productos}/>
                    </div>
                }  
            </div>
            )
        }

    export default ItemListContainer; 

