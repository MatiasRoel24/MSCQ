const productos = [
    {"id": "1","name": "Matias","description": "red","stock": 10,"url":"assets/paisaje1.jpg"},
    {"id": "2","name": "Ezequiel","description": "green","stock": 20,"url":"assets/paisaje2.jpg"},
    {"id": "3","name": "Rafael","description": "yellow","stock": 30,"url":"assets/paisaje3.jpg"}
]

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find(productos => productos.id === id) : productos
            resolve (query)
        }, 2000)
    })
}

