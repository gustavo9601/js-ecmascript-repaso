
let vehiculos = [{
	id: 1,
	marca: "Mazda",
	modelo: 2016
}, {
	id: 2,
	marca: "Toyota",
	modelo: 2017
}, {
	id: 3,
	marca: "Hyundai",
	modelo: 2018
}]

console.log("### FILTER ###");

/*=============================================
FUNCIÓN FILTER(): Recorre cada elemento del Array y retorna un nuevo Array filtrando solo los elementos solicitados
=============================================*/

let filtrarVehiculos = vehiculos.filter( vehiculo => {
	
	return vehiculo.id > 2016

})

console.log("filtrarVehiculos", filtrarVehiculos);

console.log("### FIND ###");

/*=============================================
FUNCIÓN FIND(): Recorre cada elemento del Array y retorna el primer elemento que coincida con la búsqueda por fuera del Array 
=============================================*/

let buscarVehiculo = vehiculos.find(vehiculo => {

	return vehiculo.modelo > 2016

})

console.log("buscarVehiculo", buscarVehiculo);




