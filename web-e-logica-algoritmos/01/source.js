`viajes.js`
// viajes.js

class Destino{
    constructor(destino, fecha, transporte){
        this.destino=destino
        this.fecha=fecha
        this.transporte=transporte
        this.costo=this.calcularCosto(destino, transporte)
    }

    calcularCosto(destino, transporte) {
        let costoBase
    
        // Costo base por destino
        if (destino === "Paris") costoBase = 500
        else if (destino === "Londres") costoBase = 400
        else if (destino === "New York") costoBase = 600;
    
        // Costo adicional por tipo de transporte
        if (transporte === "Avión") costoBase += 200 
        else if (transporte === "Tren") costoBase += 100;
    
        return costoBase;
    }
}

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino) {
    // TODO: Crear un objeto con los datos del destino
    destinos.push(destino);
}

// Función para calcular el costo del viaje


// Función para mostrar el itinerario de los viajes registrados
const  mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        console.log("Destino: " + destinos[i].destino);
        console.log("Fecha: " + destinos[i].fecha);
        console.log("Transporte: " + destinos[i].transporte);
        console.log("Costo: $" + destinos[i].costo);
        console.log("---------------------------");
    }
}

// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino(new Destino("Paris", "2024-06-15", "Avión"));
    registrarDestino(new Destino("Londres", "2024-07-01", "Tren"));

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();