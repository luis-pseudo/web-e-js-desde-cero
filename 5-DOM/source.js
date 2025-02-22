class Libro{
    constructor(titulo, autor, anio, estado){
        this.titulo=titulo
        this.autor=autor
        this.anio=anio
        this.estado=estado
        this.capitulos=[]
    }

    describirLibro(){
        console.log("titulo: ",this.titulo, ". autor: ", this.autor, ". año: ",this.anio, ". estado: ", this.estado)
    }
}