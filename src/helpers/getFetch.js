const productos = [
    {"amount":0,"id": "1","name": "Bariloche","icono":"fa-solid fa-snowflake icono","terreno":"Nieve","description": "San Carlos de Bariloche (comúnmente llamada Bariloche) es una ciudad en la región de la Patagonia argentina. Limita con Nahuel Huapi, un gran lago glacial rodeado de montañas de los Andes. ","stock": 10,"url":"../assets/paisaje1.jpg","precio":"100"},
    {"amount":0,"id": "2","name": "Mendoza","icono":"fa-solid fa-mountain-sun icono","terreno":"Sierra","description": "Mendoza es una ciudad de la región de Cuyo en Argentina y es el corazón de la zona vitivinícola argentina, famosa por sus Malbecs y otros vinos tintos. Sus distintas bodegas ofrecen degustaciones y visitas guiadas","stock": 20,"url":"../assets/paisaje2.jpg","precio":"200"},
    {"amount":0,"id": "3","name": "Cordoba","icono":"fa-solid fa-mountain icono","terreno":"Montaña","description": "Córdoba, la capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba","stock": 30,"url":"../assets/paisaje3.jpg","precio":"300"}
]

export const getFetch = ( id ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find( producto => producto.id === id ) : productos
            resolve (query)
        }, 2000)
    })
}

