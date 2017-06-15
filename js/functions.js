/**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// var filtrarContactos = function (e) {
// 	e.preventDefault();
// 	var criterioBusqueda = $("#search").val().toLowerCase();
// 	var contactosFiltrados = contactos.filter(function (contacto) {
// 		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
// 	});
// 	mostrarContactos(contactosFiltrados);
// };
// var mostrarContactos = function (contactos) {
// 	var plantillaFinal = "";
// 	contactos.forEach(function (contacto) {
// 		plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
// 			.replace("__numero__", contacto.numero)
// 			.replace("__foto__", contacto.foto);
// 	});
// 	$(".contacts").html(plantillaFinal);
// };