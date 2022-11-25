const fs = require (`fs`);

fs.promises.readFile(`info.txt`,`utf-8`)
.then(contenido => {
    console.log(`lectura exitosa de info.txt`)
    const info = JSON.parse(contenido)
    console.log(info)

    const packobj =info.contenidoObj
    packobj.author= `coderHause`

    fs.promises.writeFile(`package.json.coder`, JSON.stringify(packobj, nul, 2))
    .then(() => console.log(`escritura exitosa de package.json.coder`))
    .catch(error => console.log(error))
}).catch(error => console.log(error))