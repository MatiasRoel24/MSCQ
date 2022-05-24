import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";

    const productos = [
        {id: 1,name: 'Bariloche', description: '$100',stock: 10, url:'assets/paisaje1.jpg'},
        {id: 2,name: 'Cordoba', description: '$200',stock: 20, url:'assets/paisaje2.jpg'},
        {id: 3,name: 'Tierra del fuego', description: '$300',stock: 30, url:'assets/paisaje3.jpg'}]  
        
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

