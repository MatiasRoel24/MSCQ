import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setloading] = useState(true)    
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch( detalleId )
        .then(respuesta => setProducto(respuesta))
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