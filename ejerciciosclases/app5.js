function hacerTarea(num,cb) {
    console.log(`haciendo tarea` + num)
    setTimeout (cb,500)
}
console.log(`inicio de tarea`);
hacerTarea (1,() => {
    hacerTarea(2, () => {
        hacerTarea (3, () => {
            hacerTarea (4, () => {
                console.log(`fin de tareas`);
            })
        })
    })
})