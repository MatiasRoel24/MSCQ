import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import { getFetch } from "../../helpers/getFetch";

function ItemListContainer() {

    
        const [productos, setproductos] = useState([]) // Hacer persistente los valores
        const [producto, setproducto] = useState({}) // Hacer persistente los valores
        const [loading, setloading] = useState(true)
        
        //itemDetailContainer
        /* useEffect(() => {
            const db = getFirestore()
            const dbQuery = doc(db, 'items', 'In2tOJUmxc18iEgylhbU')
            getDoc(dbQuery)
            .then(resp => setproducto( {id: resp.id, ...resp.data() } ) )
        }, []) */
        
        // itemListContainer
        useEffect(() => {
            const db = getFirestore()
            

            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setproductos( resp.docs.map(item => ( {id: item.id, ...item.data() } ) ) ))
            .catch((err) => console.log(err))
            .finally(() => setloading(false))
        }, [])

        


        /* useEffect(() => { 
            getFetch()
            .then(respuesta => setproductos(respuesta)) 
            .catch((err) => console.log(err))
            .finally(() => setloading(false)) 
             
        },[])  */

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

