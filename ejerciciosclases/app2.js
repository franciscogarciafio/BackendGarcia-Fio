//uso de callback

console.log("hola");

const operacion = (a,b,op) => op(a,b)

const suma =(a,b) => a + b
const resta =(a,b) => a - b
const multiplicacion =(a,b) => a * b
const division=(a,b) => a / b
const modulo =(a,b) => a % b

console.log(operacion(2,5,resta))

console.log(operacion(2,5,suma))

console.log(operacion(2,5,multiplicacion))

console.log(operacion(2,5,division))

console.log(operacion(10,10,modulo));
