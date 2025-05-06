const cadena="hola q haciendo"

function plabra(p){
    t=p.split(' ')[0]
    for (let i = 0; i < p.split(' ').length; i++) if(p.split(' ')[i].length>t.length) t=p.split(' ')[i]
    return t
}

console.log(plabra(cadena))