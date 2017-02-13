var objeto = new Object();

// adiciona duas propriedades
objeto.propriedade = "Legal";
objeto["outra"] = "Massa";

// lê uma propriedade
console.log(objeto.outra); // Massa

// lê dinamicamente uma propriedade
var prop = "propriedade";
// console.log(objeto[prop]); // Legal
// console.log(objeto.prop);  // undefined
// Objeto não possui propriedade prop

var object = new Object();

object.cor = 'vermelho';
object.forma = 'quadrado';
object.volume = 3;

var propriedades = ['cor', 'forma', 'volume'];

propriedades.forEach(function (prop) {
	console.log("Propriedade " + prop + " = " + object[prop]);
});