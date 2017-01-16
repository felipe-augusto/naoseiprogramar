# Princípios de Orientação a Objetos em JavaScript

5 estrelas

Nicholas C. Zakas

[Compre aqui!](https://www.amazon.com.br/Princípios-Orientação-Objetos-em-JavaScript/dp/8575223895/)

## Índice
  1. [Parte 1: Tipos Primitivos](#Parte_1__Tipos_Primitivos_13)
  2. [Parte 2: Tipos de Referência: Objetos, Criação, Desalocação e Propriedades](#Parte_2__Tipos_de_Referncia_Objetos_Criao_Desalocao_e_Propriedades_71)
  3. [Parte 3: Tipos de Referência: Literais, Identificação e Wrappers Primitivos](#variáveis)

## Parte 1 - Tipos Primitivos

Objetos são a parte central de JavaScript, quase tudo é um objeto ou é acessado através de um objeto. Para se ter uma noção, até mesmo funções são objetos em Javascript. Entretanto, vale a pena fazer a distinção entre dois tipos em JavaScript: primitivos e de referência.

Tipos primitivos são dados simples que são armazenados diretamente nas variáveis. Já Tipos de Referência são armazenados como objetos, ou seja, a variável na verdade guarda um ponteiro que serve como referência para um endereço de memória onde este objeto foi armazenado. Se você nunca teve experiência com ponteiros talvez isto fique mais claro mais para a frente.

Existem cinco tipos primitivos em JavaScript: Boolean, Number, String, Null, Undefined (variável não inicializada).

A característica principal de um tipo primitivo é que eles possuem representações **literais** de seus valores, ou seja, representam um valor fixo no código fonte.

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

Por fim, apesar de JavaScript possuir um coletor de lixo assim como outras linguagens de programação é sempre uma boa prática desalocar a memória usada pelo objeto quando não precisamos mais dele, algo muito importante em aplicações grande. Fazemos isso tirando a referência da variável para que possa ser coletada pelo coletor:

```javascript
var objeto1 = new Object();

// faca o que tiver que fazer

object1 = null; // desaloca
```