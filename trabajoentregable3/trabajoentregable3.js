const express = require(`express`)
const app = express()


class Contenedor {
    constructor(fileName) {
      this.newFile = fileName;
    }  
    saveData = async (data) => {
      try {
        await fs.promises.writeFile(this.newFile, JSON.stringify(data, null, 2));
      } catch (err) {
        console.log("error escritura en archivo!", err);
      }
    };
  
    save = async (item) => {
      // Traer todos los productos usando el método getAll.
      // Si es undefined porque no existe el archivo asigna un array vacío a través
      // del operador || para que length no de error
      const productsArray = (await this.getAll()) || [];
      try {
        let id = 0;
        productsArray.length === 0
          ? (id = 1)
          : (id = productsArray[productsArray.length - 1].id + 1);
        const newItem = { ...item, id: id };
        productsArray.push(newItem);
        await this.saveData(productsArray);
        console.log(`producto ${item.title} ingresado ok!`);
        return newItem.id;
      } catch (err) {
        console.log("error escritura en archivo!", err);
      }
    };
  
  
    getAll = async () => {
      try {
        const content = await fs.promises.readFile(this.newFile);
        const contentArray = JSON.parse(content);
        console.log("Productos: \n", contentArray);
        return contentArray;
      } catch (err) {
        console.log("Archivo vacío");
      }
    };
  
  
  }

app.get(`/productos`, (req,res) => {
    res.send(item)
})


app.get(`/productoRandom`, (req,res) => {
  function productoRandom(datos) {
    return datos[Math.floor(Math.random() * datos.length)]
  }
  let productos= [item]
    res.send(productoRandom(item))
})


const PORT = 8080
const server= app.listen(PORT,() => {
    console.log(`servidor http esta escuchando el puerto ${server.address().port}`);
})

server.on("error", error => console.log (`erro en servidor ${error}`))

const item = [
{   
    id:1,
    title: "pelota de futbol",
    price: 45.000,
    thumbnail:
    "https://i.ibb.co/xDKrXct/camp2.png",
  },
  {
    id:2,
    title: "camiseta de futbol",
    price: 32.000,
    thumbnail:
    "https://i.ibb.co/xDKrXct/camp2.png",
  },
  
   {
    id:3,
    title: "campera",
    price: 63.000,
    thumbnail:
    "https://i.ibb.co/xDKrXct/camp2.png",
  }
]
  
  const productos = new Contenedor("productos.txt");

  