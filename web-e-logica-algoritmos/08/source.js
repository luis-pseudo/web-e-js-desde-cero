const fs = require("fs");

// Ruta del archivo de notas
const filePath = "./notas.json";

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    if (fs.existsSync(filePath)) console.log("El archivo existe.");
    else {
        console.log("El archivo no existe.");
        return
    }

    let notas=[]
    notas=JSON.parse(fs.readFileSync(filePath, 'utf8', (err, data) => {
                if (err) {
                console.error('Error al leer el archivo:', err);
                return;
                }
                console.log('Contenido del archivo:', data);
            }))
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas), (err, data) => {
    if (err) { // manejo de errores
      console.error('Error al escribir en el archivo:', err);
      return;
    }
  
    console.log('Archivo escrito con éxito.');
  })
  console.log("Nota agregada con éxito.");
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    let notas=[]
  if (fs.existsSync(filePath)) {
    // PISTA: Debes leer y parsear el contenido del archivo.
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    notas=JSON.parse(fs.readFileSync(filePath, 'utf-8', (err)=>{
        if(err){
            console.log("error al leer el documento ", error)
            return
        }
    }))
  } else {
    console.log("No hay notas guardadas.");
    return
  }
  notas.forEach(element => {
    console.log(element)
  });
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    let notas=[]
    notas=JSON.parse(fs.readFileSync(filePath, 'utf8', (err)=>{
        if(err){
            console.log("error al leer archivo ", err)
            return
        }
    }))
    notas=notas.filter(elem => elem.titulo!=titulo)
    fs.writeFileSync(filePath, JSON.stringify(notas), (err) => {
        if (err) { // manejo de errores
          console.error('Error al escribir en el archivo:', err);
          return;
        }
    })
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log("No hay notas para eliminar.");
  }
}

// Ejecución de ejemplo
agregarNota("Compras", "Comprar leche y pan.");
listarNotas();
eliminarNota("Compras");
listarNotas();