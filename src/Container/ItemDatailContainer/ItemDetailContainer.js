import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore'



const ItemDetailContainer = () => {

    
    const [producto, setProducto] = useState({})
    const [loading, setloading] = useState(true)    
    const { detalleId } = useParams()

      useEffect(() => {
            const db = getFirestore()
            const dbQuery = doc(db, 'items', detalleId )
            getDoc(dbQuery)
            .then(resp => setProducto( {id: resp.id, ...resp.data() } ) )
            .catch((err) => console.log(err))
            .finally(() => setloading(false))
        }, [])  
   
    return(
        <div>
            { loading ? <div className="lds-dual-ring loader__centrado"></div>  // loading true
                    :
                    <div className="contenedor__ILC">
                        <ItemDetail producto= {producto}/>
                    </div>
            } 
        </div>
    )
}

export default ItemDetailContainer