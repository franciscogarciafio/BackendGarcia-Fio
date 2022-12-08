const express = require(`express`)
const app = express()
const PORT = 8080

app.use(express.static(`public`))

const server= app.listen(PORT,() => {
    console.log(`servidor http esta escuchando el puerto ${server.address().port}`);
})

server.on("error", error => console.log (`erro en servidor ${error}`))