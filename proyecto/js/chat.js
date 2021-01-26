window.onload = inicializar;
var formulario;
var refMensajes;
var fondoMensajes;

function inicializar() {
    formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", enviarDatosAFirebase, false)

    fondoMensajes = document.getElementById("fondo-mensajes");

    inicializarFirebase();

    mostrarMensajesDeFirebase();
}
function mostrarMensajesDeFirebase() {
    refMensajes = firebase.database().ref().child("mensajes");

    refMensajes.on("value", function (snap) {
        var todosLosMensajes = "";
        datos = snap.val();
        for (var key in datos) {
            todosLosMensajes += "<strong>" + datos[key].nombre + " : </strong> " + datos[key].mensaje + "</br>";

        }
        fondoMensajes.innerHTML = todosLosMensajes;
    })

}

function enviarDatosAFirebase(event) {
    event.preventDefault();


    refMensajes.push({ mensaje: event.target.mensaje.value, nombre: event.target.nombre.value });

    formulario.reset();
}


