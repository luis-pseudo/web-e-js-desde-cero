let librosLeidos=[];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    for (let index = 0; index < librosLeidos.length; index++) {
        console.log(librosLeidos[index])
    }
}