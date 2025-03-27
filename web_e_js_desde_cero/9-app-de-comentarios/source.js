const boton=document.getElementById("btn")
let input=document.getElementById("input")
let comments=document.getElementById("comments")
boton.addEventListener("click", function subir(e) {
    if(input.value.trim()!=""){
        let date=new Date()
        comments.innerHTML+=`<li>
                                <div class="commentdiv">
                                    <p class="comment">${input.value}</p>
                                    <span class="date">${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</span>
                                </div>
                                <div class="btndiv">
                                    <button onclick="eliminar(event)"><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></button>
                                </div>
                            </li>`
        input.value=""
    }
})

function eliminar(event) {
    event.target.closest("li").remove();
}
