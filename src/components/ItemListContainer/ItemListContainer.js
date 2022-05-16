import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartWidget from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

/* import { Productos } from "../Productos/Productos"; */

function ItemListContainer() {

        const productos = [
            {id: 1,name: 'matias',description: 'red',stock: 10,url:'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'},
            {id: 2,name: 'ezequiel',description: 'green',stock: 20,url:'https://picsum.photos/200'},
            {id: 3,name: 'matias',description: 'yellow',stock: 30,url:'https://picsum.photos/200'}]

        const getFech = new Promise((resolve) => {
            setTimeout(() => {
                resolve( productos )
            },2000)
        })

        const [producto, setproducto] = useState([])
        const [loading, setloading] = useState(true)

        useEffect(() => {
            getFech // fetch llamada a una api
            .then(respuesta => setproducto(respuesta))
            .catch((err) => console.log(err))
            .finally(() => setloading(false)) // al ser falso me cambia el estado de los productos
             
        },[]) /* Que se ejecute una sola ves [] */

        /* console.log(producto) */

        
            
        return (
            <div>
                <>
                { loading ? <h2>Cargando...</h2>  // loading true
                    :
                    producto.map( (prod) => /* MODULO: ItemList */
                /* MODULO: ITEM */
                <ItemList productos={producto}/>
        )
                    //loading false
                }
                </>       
            </div>
            )
        }

    export default ItemListContainer; 

