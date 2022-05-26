const productos = [
    {"id": "1","name": "Bariloche","description": "Nieve","stock": 10,"url":"assets/paisaje1.jpg"},
    {"id": "2","name": "Mendoza","description": "Sierra","stock": 20,"url":"assets/paisaje2.jpg"},
    {"id": "3","name": "Cordoba","description": "Montaña","stock": 30,"url":"assets/paisaje3.jpg"}
]

export const getFetch = ( id ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find( producto => producto.id === id ) : productos
            resolve (query)
        }, 2000)
    })
}

