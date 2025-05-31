let libros=JSON.stringify([
    {
        "titulo": "el principito",
        "autor": "Antoine de Saint-Exupéry",
        "genero": "Literatura infantil",
        "disponible": true
    },
    {
        "titulo": "Crónica de una muerte anunciada",
        "autor": "Gabriel García Márquez",
        "genero": "Novela corta",
        "disponible": true
    },
    {
        "titulo": "El nombre del viento",
        "autor": "Patrick Rothfuss",
        "genero": "Fantasía épica",
        "disponible": true
    },
    {
        "titulo": "Tokio Blues (Norwegian Wood)",
        "autor": "Haruki Murakami",
        "genero": "Novela contemporánea japonesa",
        "disponible": true
    },
])

function leerdatos(json, callback){
    setTimeout(() => {
        callback(JSON.parse(json))
        console.log("datos leidos")
    }, 3000)
}

function guardardatos(datos){
    const promesa=new Promise((resolve, reject) => {
        setTimeout(()=>{
            libros=JSON.stringify(datos)
            console.log("datos guardados")
        }, 3000)
    })
    
}



function agregar(libro){
    leerdatos(libros, (datos)=> {
        datos.push(libro)
        guardardatos(datos)
    })
}

function actualizar(libro){
    leerdatos(libros, datos => {
        datos.find(obj => obj.titulo===libro).disponible=!datos.find(obj => obj.titulo===libro).disponible
        guardardatos(datos)
    })
}

function consultar(){
    leerdatos(libros, datos => {
        datos.forEach(element => {
            console.log(element.titulo, "disponible:", element.disponible)
        });
    })
}