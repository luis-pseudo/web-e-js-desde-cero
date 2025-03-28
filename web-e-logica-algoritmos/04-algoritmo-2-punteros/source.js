function sentar(personas){
    let a=0, b=1
    while(b<personas.length) if(personas[a++].charAt(0)===personas[b++].charAt(0)) return [personas [a-1], personas[b-1]]
    return null
}

console.log(sentar(["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"]))