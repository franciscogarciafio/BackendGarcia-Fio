const http = require(`http`)
const server = http.createServer((req, res) =>
{
    res.end(getMensaje())
})

const PORT = 8080

const connectServer = server.listen(PORT,() =>
console.log(`servidor HTTP esta escuchando el puerto ${connectServer.address().port}`)
)

const getMensaje = () => {
    const hora = new Date ().getHours()
    if (hora >= 6 && hora <= 12){
        return `buen dia`
    }else if ( hora >= 13 && hora <= 19) {
        return `buenas tardes`
    }else if (hora>= 20 && hora <= 5){
        return `buenas noches`
    }
}
