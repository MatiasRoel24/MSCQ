const ItemDetail = ( {producto} ) => {
    console.log(producto) 
    return(
        <div className="contenedor__itemdetail">
            <h1 className="idetail__titulo">{producto.name}</h1>
            <img src= {producto.url} alt="caca" />
            <h2 className="idetail__description">{producto.description}</h2>
        </div>
    )
}

export default ItemDetail