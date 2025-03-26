const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

console.log(productos.filter((prod)=>prod.precio<100))
console.log(productos.sort((a, b) => a.nombre.localeCompare(b.nombre)))
console.log(productos.map((productos)=>productos.nombre))