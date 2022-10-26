class pizza {
    constructor(id, nombre, ingredientes, precio) {

        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}
const muzzarella = new pizza(301, "muzzarella", ['queso', 'aceitunas'], 900)
const cuatroQueso = new pizza(501, "cuatroQueso", ['queso', 'roquefort', 'tybo', 'pategrass'], 1200)
const especial = new pizza(6023, "especial", ['queso', 'paleta', 'huevo', 'morron'], 1050)
const rustica = new pizza(800, "rustica", ['queso', 'jamon', 'rucula', 'pategrass'], 1301)
const caprese = new pizza(900, "caprese", ['queso', 'tomate', 'olivas', 'albahaca'], 1005)
const fugazzeta = new pizza(200, "fugazzeta", ['queso', 'cebolla'], 980)

const menu = []
menu.push(muzzarella, cuatroQueso, especial, rustica, caprese, fugazzeta)


/*Las pizzas que tengan un id impar*/
for (let i = 0; i < menu.length; i++) {
    if (menu[i].id % 2 !== 0) {
        console.log('El id de ' + menu[i].nombre + ' es ' + menu[i].id)
    }
}
/*Hay alguna pizza que vaga menos de 600*/

const precio = menu.some(menu => menu.precio > 600)
console.log("Mas de una pizza tiene un valor mayor a $600")
/*Nombre de la pizza con su respectivo precio*/
let precioSolo = []
for (let i = 0; i < menu.length; i++) {
    precioSolo.push({
        nombre: menu[i].nombre, precio: menu[i].precio
    })

    console.log('La pizza ' + menu[i].nombre + ' vale ' + menu[i].precio)
}
console.log('')
// Todos los ingredientes de cada pizza
for (let i = 0; i < menu.length; i++) {
    console.log(menu[i].nombre + ' tiene los siguientes ingredientes')

    for (let j = 0; j < menu[i].ingredientes.length; j++) {
        console.log('' + menu[i].ingredientes[j])
    }
    console.log('')
    console.log('')
}
