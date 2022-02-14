// CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE


//Tratativa de data
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


// Estrutura de repetição FOR
/*
var count;

for (count=0; count <= 5; count++){
    alert(count);
}
*/
// Estrutura de repetição while
/*
var count = 0;
while (count <= 5) {
    console.log (count);
    alert(count);
    ///count = count + 1;
    count++;
};
*/

// Estrutura de decisão
/* 
var idade = prompt ("Qual sua idade");

if (idade >= 18) {
    alert("Maior de idade!");
}else {
    alert("Menor de idade!");
};
*/ 

// DICIONARIO

/*Conseguimos adicionar dentro da Dicionario, outra variávels. Exemplos:
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert (fruta.nome);
*/

/* DICIONARIO LISTA

var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert (frutas[1].nome); // Sinalizando variável, posição q está armazenada e oq quero trazer.
*/

/* ARRAY
var lista = ["maça", "pera", "laranja"];
lista.push("uva"); // Comando para adicionar mais um item a variável 
lista.pop() // comando para remover o ultimo registro da variável

console.log (lista.length); // Comando usado para verificar quantos registro tem dentro da variável
console.log (lista.toString()); //Comando usado para transformar o conteudo da Array em Texto.
console.log (lista.join(" | ")); //COmando usado para adicionar traço de separação de conteudo.
*/

/* EXEMPLOS DE STRING E CONCATENAÇÃO, REPLACE E CONSOLE.LOG 
var nome = "Igor Natan";
var idade = 22;
var frase = "Japão é melhor que o Brasil"
alert (nome + " Tem " + idade + " anos"); /* Alert é usado para dar uma mensagem na tela forçada. 


console.log (nome);
console.log (idade);
console.log(frase.toUpperCase()); // Exemplo de como alterar todo o texto contido para tudo Maisculo de uma sé vez, Lower é usado para passar tudo para minusculo
console.log (frase.replace("Japão","Brasil")); Exemplo trocando frase forçada no usando Replace.
alert (frase.replace("Jãpão","Brasil"));
*/