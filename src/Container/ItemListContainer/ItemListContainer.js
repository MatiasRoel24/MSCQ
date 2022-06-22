import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs,query,where } from 'firebase/firestore'


function ItemListContainer() {
    
        const [productos, setproductos] = useState([]) 
        const [loading, setloading] = useState(true)
        const { id } = useParams()    

        useEffect(() => {
            const db = getFirestore()    
            const queryCollection = collection(db, 'items')
            const queryCollectionFilter = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection
    
            getDocs(queryCollectionFilter)
            .then(resp => setproductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
            .catch((err)=> console.log(err))
            .finally(()=>setloading(false))                        
            
        }, [id])  
    

        return (
            <div >
                { loading ? <div className="lds-dual-ring loader__centrado"></div>  // loading true
                    :
                    <div className="contenedor__ILC">
                        <div className="contenedor__cards">
                            <ItemList productos={productos}/>
                        </div>
                    </div>
                }  
            </div>
            )
        }

    export default ItemListContainer; 

