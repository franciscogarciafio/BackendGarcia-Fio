class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[libros];
        this.mascotas=[mascotas];
    }


        getFullName() {
            return `${this.nombre}` + " " + `${this.apellido}`;
                   
        }

        addMascota() {
            return (this.mascotas + " " + "elefante")
        }
    
        CountMascotas() {
            return (this.mascotas.length);
        }
        getbooknames() {
            return (this.libros)
        }

}

const Usuario1 = new Usuario("francisco","Garcia","harry Potter,narnia","perro,gato")
const Usuario2= new Usuario("maria","lopez","pricipito,metamorfosis","gato,perro,raton")
//console.log(Usuario1);

console.log(Usuario1.getFullName());
console.log(Usuario1.addMascota());
console.log(Usuario1.CountMascotas());
console.log(Usuario1.getbooknames());

console.log(Usuario2.getFullName());
console.log(Usuario2.addMascota());
console.log(Usuario2.CountMascotas());
console.log(Usuario2.getbooknames());

