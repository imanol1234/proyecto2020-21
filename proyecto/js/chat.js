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
            todosLosMensajes += "</br><strong>" + datos[key].nombre + " : </strong> " + datos[key].mensaje;

        }
        fondoMensajes.innerHTML = todosLosMensajes;
    })

}

function enviarDatosAFirebase(event) {
    event.preventDefault();


    refMensajes.push({ mensaje: event.target.mensaje.value, nombre: event.target.nombre.value });

    formulario.reset();
}

function inicializarFirebase() {

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAThC3zzY945dOZTF1WnlUVmNl8lh1Qif0",
    authDomain: "proyecto-65e57.firebaseapp.com",
    databaseURL: "https://proyecto-65e57-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "proyecto-65e57",
    storageBucket: "proyecto-65e57.appspot.com",
    messagingSenderId: "98857744193",
    appId: "1:98857744193:web:29cff7d8e9d696da1253c0",
    measurementId: "G-1S4VZV6G5D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

}