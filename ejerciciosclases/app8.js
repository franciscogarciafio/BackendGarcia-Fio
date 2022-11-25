const fs = require (`fs`)

fs.readFile(`package.json`,`utf-8`, (error,contenido)=>{
    if(error){
        console.log(error);
    } else {
        const info= {
            contenidoStr: contenido,
            contenidoObj:JSON.parse(contenido),
            size:contenido.length
        }
        fs.writeFile(`info.txt`,JSON.stringify(info,null,2),error =>{
            if (error) {
                console.log(error)
            }else {
                console.log(`esvritura exitosa`);
            }
        })
    }
})