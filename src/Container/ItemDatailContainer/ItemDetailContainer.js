import React, {useEffect, useState} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";




const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    useEffect(() => {
        getFetch('1')
        .then(respuesta => setProducto(respuesta))
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer