const fs = require("fs");

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

  getById = async (id) => {
    const productsArray = (await this.getAll()) || [];
    try {
      const productById = productsArray.find((product) => product.id === id);
      console.log("Producto encontrado: \n", productById || "No existe id");
      return productById || null;
    } catch (err) {
      console.log("Error, ", err);
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

  deleteById = async (id) => {
    const productsArray = (await this.getAll()) || [];
    try {
      const filteredProducts = productsArray.filter(
        (product) => product.id !== id
      );
      this.saveData(filteredProducts);
    } catch (err) {
      console.log("Error, ", err);
    }
  };

  deleteAll = async () => {
    try {
      this.saveData([]);
      console.log("Productos eliminados!");
    } catch (err) {
      console.log("Error, productos no eliminados!", err);
    }
  };
}

const item =[
 {
  title: "pelota de futbol",
  price: 45.000,
  thumbnail:"https://i.ibb.co/xDKrXct/camp2.png",
},
 {
  title: "camiseta de futbol",
  price: 32.000,
  thumbnail:
  "https://i.ibb.co/xDKrXct/camp2.png",
},
 {
  title: "campera",
  price: 63.000,
  thumbnail:"https://i.ibb.co/xDKrXct/camp2.png",
}
]
const productos = new Contenedor("productos.txt");

productos.save(item)

//productos.getAll()

//productos.deleteAll()

//productos.getById(2)

//productos.deleteById(2)
