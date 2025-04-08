function encontrarRegalo(regalo, idx=0, regalos){
    if(regalo===regalos[idx]) return idx
    else if(idx===regalos.length) return null
    return encontrarRegalo(regalo, idx+1, regalos)
}

function buscarRegalo(regalo){
    return encontrarRegalo(regalo, 0, regalos)
}

let regalos=["osito", "fon", "laptop", "consola", "reloj", "calcetines", "gorra", "pijama", "dulces", "mochila"]
console.log( buscarRegalo("fon") )