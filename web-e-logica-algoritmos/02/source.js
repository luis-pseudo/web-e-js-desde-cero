class Producto{
    constructor(id, nombre, precio){
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}

const productosDisponibles=[new Producto(1001, "peluche", 120), new Producto(1002, "sticker", 5), new Producto(1003, "camisa", 150), new Producto(1004, "gorra", 200)], listaDeCompras=[]

function agregarProducto(producto){
    if(!listaDeCompras.includes(producto)) listaDeCompras.push(producto)
    else return false
}

function eliminarProducto(idx){
    listaDeCompras.splice(idx, 1)
}

const mostrarLista= ()=> listaDeCompras.forEach(element => console.log(element));

agregarProducto(productosDisponibles[0])
agregarProducto(productosDisponibles[2])
mostrarLista()
eliminarProducto(0)
console.log("producto eliminado")
mostrarLista()
agregarProducto(productosDisponibles[2])
console.log("intenta agregar 3er producto")
mostrarLista()