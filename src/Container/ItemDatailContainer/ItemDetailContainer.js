import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";


const ItemDetailContainer = () => {

    const { detalleId } = useParams()

    const [producto, setProducto] = useState([])
    useEffect(() => {
        getFetch( detalleId )
        .then(respuesta => setProducto(respuesta))
        .catch((err) => console.log(err))
    }, [])

    /* console.log( producto )
    console.log( detalleId ) */

    return(
        <div>
            <ItemDetail producto= {producto}/>
        </div>
    )
}

export default ItemDetailContainer