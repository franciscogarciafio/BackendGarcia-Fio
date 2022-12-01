const obtenerNumAleatorio = () => parseInt(Math.random() * 20 ) +1 
let numeros = {}
for (let index = 0; index < 10000; index++) {
    let numero = obtenerNumAleatorio()
    if (!numeros[numero]) numeros[numero] = 0
    numeros[numero] ++
}
console.log(numeros);
