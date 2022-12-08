const express = require('express')

const app = express()

app.use(express.static('public'))

const routeProducto = express.Router()

routeProducto.use(express.json())

routeProducto.use(express.urlencoded({ extended: true }))

app.use('/productos', routeProducto)

/// productos

let producto = []

routeProducto.get('/productos', (req, res) => {
    res.json(producto)
})

routeProducto.post('/api/productos', (req, res,) => {
    producto.push(req.body)
    res.json(producto)
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
