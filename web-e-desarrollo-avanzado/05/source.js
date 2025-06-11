const form =document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault();    
    if(document.getElementById("numberinp").value.length!=10) {
        alert("el numero de telefono debe ser de 10 digitos")
        return
    }
    const data={
        "name": document.getElementById("nameinp").value,
        "email": document.getElementById("emailinp").value,
        "number": document.getElementById("numberinp").value,
        "intereses": Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(cb => cb.value),
        "horario preferido": document.querySelector('input[name="horario"]:checked').value,
        "fecha": document.getElementById("fecha").value,
        "hora": document.getElementById("hora").value,
        "doc": document.getElementById("archivo").value
    }
    console.log(data)
})