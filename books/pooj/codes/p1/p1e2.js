var cor1 = "vermelho";
var cor2 = cor1; // cria uma cópia de cor1

// modificacoes em cor1
// nao afetam cor2 e vice-versa
cor1 = "verde";
console.log(cor1); // verde
console.log(cor2); // vermelho