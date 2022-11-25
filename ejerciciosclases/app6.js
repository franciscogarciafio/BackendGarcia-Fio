const fin = () => console.log (`termine`)

const mostrarLetra= (palabra,calback) => {
    let i = 0
    const interval =setInterval(() =>{
        const letra =palabra[i];
        i++;
        if (letra){
            console.log(letra)

        } else {
            clearInterval (interval);
            calback();
        }
    }, 1000)
}

setTimeout (() => {
    mostrarLetra(`hola`, fin)
}, 0
) 
setTimeout (() => {
    mostrarLetra(`hola`, fin)
}, 250
) 
setTimeout (() => {
    mostrarLetra(`hola`, fin)
}, 500
) 

