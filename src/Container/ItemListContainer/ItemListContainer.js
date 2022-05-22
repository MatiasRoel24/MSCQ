import { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { ItemList } from "../../components/ItemList/ItemList";

    const productos = [
        {id: 1,name: 'Matias', description: 'red',stock: 10, url:'https://unsplash.com/es/fotos/A-NVHPka9Rk'},
        {id: 2,name: 'Ezequiel', description: 'green',stock: 20, url:'https://picsum.photos/200'},
        {id: 3,name: 'Rafael', description: 'yellow',stock: 30, url:'https://picsum.photos/200'}]  
        
    const getFech = new Promise((resolve) => {
        setTimeout(() => {
            resolve( productos )
        },2000) 
    })

function ItemListContainer() {

        const [productos, setproductos] = useState([]) // Hacer persistente los valores
        const [loading, setloading] = useState(true)

        useEffect(() => { // me ayuda a que se ejecute despues del return, no bloquea al render
            getFech/* () */ // fetch llamada a una api
            .then(respuesta => setproductos(respuesta)) // Capturo la respuesta que me devuelve la promise
            .catch((err) => console.log(err))
            .finally(() => setloading(false)) // al ser falso me cambia el estado de los productos
             
        },[]) /* Que se ejecute una sola ves [] */

        const onAdd = () =>{
            console.log('producto agregado al carrito')
        }

        return (
            <div>
                { loading ? <div className="lds-dual-ring loader__centrado"></div>  // loading true
                    :
                    <div className="contenedor__ILC">
                        <ItemList productos={productos}/>
                    </div>
                }  
            </div>
            )
        }

    export default ItemListContainer; 

