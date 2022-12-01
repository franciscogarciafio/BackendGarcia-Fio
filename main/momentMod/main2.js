const moment = require (`moment`)

let fechaActual = new Date();

fechaActual = moment(fechaActual)

const fechaCumple = moment(`1987-11-09`)

const añosResult= fechaActual.diff(fechaCumple, `years`)
const diasResult= fechaActual.diff(fechaCumple, `days`)

console.log(`hoy es ${fechaActual}`);
console.log(`neci el ${fechaCumple}`);
console.log(`desde mi nacimientos pasaron ${añosResult} años`);
console.log(`desde mi nacimiento pasaron ${diasResult} dias`);