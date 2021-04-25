window.onload = inicializar;
var formstock;
var refdatos;
var tbodystockproductos;

function inicializar(){
    formstock = document.getElementById("form-stock");
    formstock.addEventListener("submit", sendfirebase, false);

    tbodystockproductos = document.getElementById("tbody-stock-productos");
 
    refdatos = firebase.database().ref("datos");


    showdata();
}

function sendfirebase(event) {
    event.preventDefault();
    refdatos.push({
        juego: event.target.juego.value,
        stock: event.target.stock.value,
        pedidos: event.target.pedidos.value,
        reservas: event.target.reservas.value
    });
    formstock.reset();

}

function refdatos(){


}
 
function showdata(){
    datos.on("value", function(snap){
    var registros = snap.val();
    var rowstoshow ="";
    for (var key in registros){
        rowstoshow += "<tr>" +
            "<td>" + registros[key].juegos + "</td>"
            "<td>" + registros[key].stock + "</td>"
            "<td>" + registros[key].pedidos + "</td>"
            "<td>" + registros[key].reservas + "</td>"
            "<td></td>"
            "<td></td>"
        "</tr>";

        tbodystockproductos.innerHTML = rowstoshow;
    }
});
}