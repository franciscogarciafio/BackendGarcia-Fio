const productos = [
    {id:1,nombre:"escuadra", precio: 323.45},
    {id:2,nombre:"calculadora", precio: 234.45},
    {id:3,nombre:"globo teraqueo", precio: 45.45},
    {id:4,nombre:"paleta pintura", precio: 456.45},
    {id:5,nombre:"reloj", precio: 67.45},
    {id:6,nombre:"agenda", precio: 78.90}
]

const getNombre = () => productos.map(producto=> producto.nombre).join(`,`)
console.log(getNombre());

const getPrecioTotal = () => {
    let total = 0
    productos.forEach(producto => {
        total += producto.precio
    })
    return total
}
console.log(getPrecioTotal());

const getPrecioPromedio = () => getPrecioTotal()/ productos.length

console.log(getPrecioPromedio());

const getMenorPrecio = () => {
    let min = productos[0].precio
    let prod = productos[0].nombre
    for(let producto of productos) {
        if (producto.precio < min) {
            min = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}

console.log(getMenorPrecio());

const getMayorPrecio = () => {
    let max = productos[0].precio
    let prod = productos[0].nombre
    for(let producto of productos) {
        if (producto.precio > max) {
            max = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}
console.log(getMayorPrecio());

let infoprod = {
    nombres : getNombre(),
    total : to2Decimales(getPrecioTotal()),
    promedio: to2Decimales(getPrecioPromedio()),
    "producto con precio minimo" : getMenorPrecio(),
    "producto con precio maximo" : getMayorPrecio(),

}

console.log(infoprod);

function to2Decimales(precio){
    return Number(precio.toFixed(2))
}