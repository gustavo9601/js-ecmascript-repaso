console.log("### DESTRUCTURING ###");

/*=============================================
ASIGNACIÓN POR DESTRUCTURING: Nos permite tromar los valores de las propiedades de un objeto de forma directa, utilizando el mismo nombre de la propiedad
=============================================*/

let carro = {

	marca: "Ferrari",
	modelo: 2020,
	color: "Rojo"

}

const {marca, modelo, color} = carro;

console.log("carro", color);


