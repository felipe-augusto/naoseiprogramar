var objeto1 = new Object();
var objeto2 = objeto1;

objeto1.propriedade = "Orray";
console.log(objeto2.propriedade); // Orray

var vetor = [1,2,3];
var copia_vetor = vetor;

vetor.push(4);
console.log(copia_vetor);