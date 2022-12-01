const express = require(`express`)
const app = express()

app.get(`/`, (req,res) => {
    res.send(`<h1 style="color:blue">bienvenidos al servidor express</h1>`)
})

let visitas = 0
app.get(`/visitas`, (req,res) => {
    res.send(`la cantidad de visitas es de ${++visitas}`)
})

app.get(`/fyh`, (req,res) => {
    const fechaHora = new Date ().toLocaleDateString()
    res.send (({fyh:fechaHora}))
})


const PORT = 8080
const server= app.listen(PORT,() => {
    console.log(`servidor http esta escuchando el puerto ${server.address().port}`);
})

server.on("error", error => console.log (`erro en servidor ${error}`))
