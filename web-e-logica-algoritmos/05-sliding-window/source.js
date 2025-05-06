const arr=[40, -1, -3, 0, 5, 12]
const k=3

function maxSuma(arr, k){
    let t=arr.slice(0,k).reduce((a, b) => a + b), s=t
    for (let i = 1; i < arr.length-k+1; i++) {
        t-=arr[i-1]
        t+=arr[i+k-1]
        if(t>s) s=t
    }
    console.log(s)
}

// maxSuma(arr,k)

const cadena="hola yo soy el papu pro quiero sexo"

function plabra(p){
    t=p.split(' ')[0]
    for (let i = 0; i < p.split(' ').length; i++) if(p.split(' ')[i].length>t.length) t=p.split(' ')[i]
    return t
}

plabra(cadena)