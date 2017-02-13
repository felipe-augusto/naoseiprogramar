// Declaracao Literal
var objeto = {};

// Inicializacao de parametro
var objeto = {
	nome: "Felipe",
	idade: 25
};

objeto.cabelo = "castanho";

// Funcoes e Vetores Literais sao mais comuns
// Regex

var vetor = [1,2,3];
function seuNome(nome) {
	return "Seu nome é " + nome;
}

var vetor = new Array(1,2,3);
var seuNome = new Function('nome', 'return "Seu nome é " + nome');