let frutas=[
    {
        nombre: "platano",
        tipo: "dulce"
    },
    {
        nombre: "mango",
        tipo: "semidulce"
    },
    {
        nombre: "fresa",
        tipo: "acida"
    },
    {
        nombre: "sandia",
        tipo: "dulce"
    },
    {
        nombre: "pera",
        tipo: "semidulce"
    },
    {
        nombre: "manzana",
        tipo: "dulce"
    },
    {
        nombre: "uva",
        tipo: "semidulce"
    },
    {
        nombre: "piña",
        tipo: "acida"
    },
    {
        nombre: "mandarina",
        tipo: "semiacida"
    },
    {
        nombre: "limon",
        tipo: "acida"
    },
    {
        nombre: "durazno",
        tipo: "semiacida"
    }
]
let du=0, sdu=0, ac=0, sac=0;

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i].nombre)
    if(frutas[i].tipo==="dulce") du++;
    else if (frutas[i].tipo==="semidulce") sdu++;
    else if (frutas[i].tipo==="acida") ac++;
    else if (frutas[i].tipo==="semiacida")sac++;
}
console.log("cantidad de frutas: ", i)
console.log("frutas dulces: ", du, " semidulces: ", sdu, " acidas: ", ac, " semiacidas: ",sac);