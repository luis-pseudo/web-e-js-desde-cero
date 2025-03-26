const boton=document.getElementById("btn")
let input=document.getElementById("input")
let comments=document.getElementById("comments")
boton.addEventListener("click", function subir() {
    comments.innerHTML+=`<li>${input.value} <button onclick="eliminar(event)">eliminar</button></li> `
    input.value=""
})

function eliminar(event) {
    event.target.closest("li").remove();
}
