const productos = [
    {"id": 1,"name": "Matias","description": "red","stock": 10,"url":"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"},
    {"id": 2,"name": "Ezequiel","description": "green","stock": 20,"url":"https://picsum.photos/200"},
    {"id": 3,"name": "Rafael","description": "yellow","stock": 30,"url":"https://picsum.photos/200"}
]

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find(productos.id === id) : productos
            resolve (query)
        }, 2000)
    })
}

