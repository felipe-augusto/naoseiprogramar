# Princípios de Orientação a Objetos em JavaScript

5 estrelas

Nicholas C. Zakas

[Compre aqui!](https://www.amazon.com.br/Princípios-Orientação-Objetos-em-JavaScript/dp/8575223895/)

## Índice
  1. [Parte 1: Tipos Primitivos](#parte-1---tipos-primitivos)
  2. [Parte 2: Tipos de Referência: Objetos, Criação, Desalocação e Propriedades](#parte-2---tipos-de-referência-objetos-criação-desalocação-e-propriedades)
  3. [Parte 3: Tipos de Referência: Literais, Identificação e Wrappers Primitivos](parte-3---tipos-de-referência-literais-identificação-e-wrappers-primitivos)

## Parte 1 - Tipos Primitivos

Objetos são a parte central de JavaScript, quase tudo é um objeto ou é acessado através de um objeto. Para se ter uma noção, até mesmo funções são objetos em Javascript. Entretanto, vale a pena fazer a distinção entre dois tipos em JavaScript: primitivos e de referência.

Tipos primitivos são dados simples que são armazenados diretamente nas variáveis. Já Tipos de Referência são armazenados como objetos, ou seja, a variável na verdade guarda um ponteiro que serve como referência para um endereço de memória onde este objeto foi armazenado. Se você nunca teve experiência com ponteiros talvez isto fique mais claro mais para a frente.

Existem cinco tipos primitivos em JavaScript: `Boolean`, `Number`, String, `Null`, `Undefined `(variável não inicializada).

A característica principal de um tipo primitivo é que eles possuem representações **literais** de seus valores, ou seja, representam um valor fixo no código fonte, não de variáveis.

```javascript
// strings
var nome = "Felipe";

// numbers
var contador = 25;
var custo = 1.51;
```

Como já foi mencionado, uma variável que possui um valor primitivo, contêm diretamente o valor primitivo, ao ínves de um ponteiro. Por isso, quando atribuimos o valor de uma variável a outra, fazemos um cópia do seu valor. Considere o exemplo a seguir:

```javascript
var cor1 = "vermelho";
var cor2 = cor1; // cria uma cópia de cor1

// modificacoes em cor1 nao afetam cor2 e vice-versa
cor1 = "verde";
console.log(cor1); // verde
console.log(cor2); // vermelho
```

Para identificar tipos primitivos, podemos usar o operador `typeof`. Vale observar que no caso do tipo primitivo for `null`, o operador retorna erroneamente `object` (erro na linguagem).

```javascript
console.log(typeof "Felipe");  // "string"
console.log(typeof 10);        // "number"
console.log(typeof 5.1);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"
```

No caso de `null`, podemos então verificar seu tipo fazendo:

```javascript
console.log(value === null);
```

Além disso, os tipos primitivos possuem métodos padrões que podem ser acessados similarmente como acessamos objetos (veremos no próxima seção), entretanto, os tipos primitivos **não** são objetos e esta funcionalidade só é possível porque o JavaScript a usa internamente. Exemplos:

```javascript
var nome = "Felipe";
var nomeMinusculo = nome.toLowerCase();

var total = 10;
var totalFixo = total.toFixed(2);
```

## Parte 2 - Tipos de Referência: Objetos, Criação, Desalocação e Propriedades

Tipos de referência representam objetos em JavaScript, e é o mais próximo que encontramos de classes na linguagem (antes de ES2015/ES6). Um objeto é uma lista não ordenada de propriedades, que lembrar uma tabela de chaves e valores. Quando o valor da propriedade é uma função é chamada de método.

Para criar um objeto, usamos o construtor new (que nada mais é que uma função) e que por convenção começa com letra maiúscula:

```javascript
var objeto = new Object();
```

Para adicionar uma propriedade em um objeto você pode usar a notação com pontos ou com colchetes:

```javascript
var objeto = new Object();
objeto.propriedade = "Legal";
objeto["outra"] = "Massa";
```

Da mesma forma, para ler uma propriedade, você pode usar ambas as notações, entretanto, a notação com pontos é mais comum, com exceção de quando queremos acessar propriedades dinamicamente:

```javascript
var objeto = new Object();

// adiciona duas propriedades
objeto.propriedade = "Legal";
objeto["outra"] = "Massa";

// lê uma propriedade
console.log(objeto.outra); // Massa

// lê dinamicamente uma propriedade
var prop = "propriedade";
console.log(objeto[prop]); // Legal
console.log(objeto.prop);  // undefined - Objeto não possui propriedade prop
```

Retornando o argumento que tipos de referência não armazenam diretamente o objeto na variável, mas sim um ponteiro para a posição de memória onde o objeto se encontra. Podemos voltar ao exemplo anterior que usamos com tipos primitivos e observar a diferença.

```javascript
var objeto1 = new Object();
var objeto2 = objeto1;

objeto1.propriedade = "Orray";
console.log(objeto2.propriedade); // Orray
```

Neste caso, como tanto `objeto1` e `objeto2` apontam para o mesmo endereço de memória, todas as modificações feitas em `objeto1` (em seu endereço de memória) naturalmente são propagadas para `objeto2`.

Por fim, apesar de JavaScript possuir um coletor de lixo assim como outras linguagens de programação é sempre uma boa prática desalocar a memória usada pelo objeto quando não precisamos mais dele, algo muito importante em aplicações grandes. Fazemos isso tirando a referência da variável para que possa ser coletada pelo coletor:

```javascript
var objeto1 = new Object();

// faca o que tiver que fazer

object1 = null; // desaloca
```

## Parte 3: Tipos de Referência: Literais, Identificação e Wrappers Primitivos

Diversos tipos nativos possuem formas literais para se declarar. Através dela você pode definir um valor de referência sem criar o objeto explicitamente através do operador `new`.

```javascript
// usando operador new
var objeto = new Object();

// forma literal
var objeto = {};
```

Da mesma forma, você pode adicionar propriedades usando a forma literal, tanto depois da declaração tanto quanto durante:

```javascript
// ja inicializa a propriedade cor junto com o objeto
var objeto = {
	cor : 'vermelho'
};

// adiciona nova propriedade
objeto.forma = 'quadrado';
```

Com relação a funções e vetores é mais comum se ver a forma literal de declaração ao invés da outra forma.

```javascript
// usando keyword new
var vetor = new Array(1,2,3);
var seuNome = new Function("nome", "return 'Seu nome é ' + nome;");

// usando literais
var vetor = [1, 2, 3];
function seuNome (nome) {
	return 'Seu nome é ' + nome;
}
```

Para identificar tipos de refência usamos o operaror `instanceof`, ao contrário de tipos primitivos onde usando o operador `typeof`.

```javascript
var vetor = [];
var objeto = {};
function funcao (valor) {
	return valor;
}

console.log(vetor instanceof Array); // true
console.log(objeto instanceof Object); // true
console.log(funcao instanceof Function); // true
```

Vale notar que qualquer tipo de referência sempre vai retornar `true` para o operador `instanceof Object`, pois todos eles herdam de `Object`.

```javascript
var vetor = [];
function funcao (valor) {
	return valor;
}

console.log(vetor instanceof Object); // true
console.log(funcao instanceof Object); // true
```

Comentamos anteriormente que o JavaScript faz tipos primitivos parecerem objetos para acessarmos propriedades mais facilmente, isto é alcançado através de `tipos de wrappers primitivos`.

`Tipos de wrappers primitivos` são tipos de referência que são criados automaticamente (por baixo dos panos) sempre que uma `string`, um `number` ou um `boolean` é lido. Por exemplo, no código a seguir:

```javascript
var nome = 'FELIPE';
var minusculo = nome.toLowerCase();
console.log(minusculo);
```

A primeira vista pode parecer que `nome` está se comportando como um objeto e que não é mais um tipo primitivo, entretanto, o que a engine do JavaScript faz por baixo dos panos é isso:

```javascript
var nome = 'FELIPE';
// ENGINE START
var temp = new String(nome); // cria tipo de referência String
var minusculo = temp.toLowerCase(); // chama a propriedade de temp e não do primitivo nome (inexistente)
temp = null; // desaloca o tipo de referência temporário
// ENGINE END
console.log(minusculo);
```