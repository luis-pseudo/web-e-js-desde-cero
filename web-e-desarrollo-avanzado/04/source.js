const mesas=[
    {"mesa": "m1", "reservas": []},
    {"mesa": "m2", "reservas": []},
    {"mesa": "m3", "reservas": []},
    {"mesa": "m4", "reservas": []},
    {"mesa": "m5", "reservas": []},
    {"mesa": "m6", "reservas": []},
    {"mesa": "m7", "reservas": []},
    {"mesa": "m8", "reservas": []},
    {"mesa": "m9", "reservas": []},
    {"mesa": "m10", "reservas": []}
]

function mesaDisponible(mesa, dia, hora){
    let disp=true
    mesa.reservas.forEach(element => {
        if(element.dia==dia&&element.hora==hora) disp=false;
    });
    return disp
}

function disponibilidad(dia, hora){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            for (let i = 0; i < mesas.length; i++) {
                if(mesaDisponible(mesas[i], dia, hora)) {
                    mesas[i].reservas.push({"dia": dia, "hora": hora})
                    resolve(mesas[i].mesa)
                    return
                }
            }
            reject(null)
        }, 1500);
    })
}

async function solicitarReserva(dia, hora) {
    try {
        const response= await disponibilidad(dia, hora);
        console.log("correo de confirmación enviado para mesa "+response)
    } catch (error) {
        console.log("correo de rechazo enviado a falta de disponibilidad de mesas")
    }
}

await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "14:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
await solicitarReserva("04/05", "12:00")
