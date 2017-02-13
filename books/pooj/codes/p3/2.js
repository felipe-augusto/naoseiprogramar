// identificacao de tipos de referência
// array, object, funçao

var vetor = [1,2,3];
function seuNome(nome) {
	return "Seu nome é " + nome;
}
var objeto = {};


console.log(vetor instanceof Object);
console.log(objeto instanceof Object);
console.log(seuNome instanceof Object);

// todos true object