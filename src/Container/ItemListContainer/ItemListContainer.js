import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemListContainer() {

    
        const [productos, setproductos] = useState([]) 
        const [loading, setloading] = useState(true)
        

        useEffect(() => {
            const db = getFirestore()

            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setproductos( resp.docs.map(item => ( {id: item.id, ...item.data() } ) ) ))
            .catch((err) => console.log(err))
            .finally(() => setloading(false))
        }, [])


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

