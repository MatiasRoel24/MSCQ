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

        const onAdd = () =>{
            console.log('producto agregado al carrito')
        }
            
        return (
            <div>

                <>
                {/* [ <li>1</li>,<li>2</li>],<li>3</li>,<li>4</li> ] */}
                { loading ? <h2>Cargando...</h2>  // loading true
                    :
                    producto.map( (prod) => /* MODULO: ItemList */
                /* MODULO: ITEM */
                <div className="card_contenedor" key={prod.id}>
                        <h2 className="card__titlo">Socio</h2>
                        <img src="{url}" alt="Socio img" />
                        <h3 className="card__subtitulo" >{prod.name}</h3>
                        <h3 className="card__description">Color del socio: {prod.description}</h3>
                        <h3 className="card__stock">Stock disponible: {prod.stock}</h3>
                        <ItemCount initial={0} stock={prod.stock} onAdd={onAdd}/> {/* Como hago para que no supere el stock? */}
                </div>
        )
                    //loading false
                }
                </>       
            </div>
            )
        }

    export default ItemListContainer; 

