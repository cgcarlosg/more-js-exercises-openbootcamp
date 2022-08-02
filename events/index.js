const boton=document.getElementById("boton");

boton.onclick = function () {
    alert("click en el botón");
}

$(document).ready(() => {

    $("#boton").click(() => {
        console.log('Hola, estoy utilizando JQuery');
    })

})