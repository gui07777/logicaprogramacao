//para fazer os testes descomente o que quer testar e comente os demais

const frutas = ["maçã", "banana", "uva"];
// console.log(frutas)


//adiciona no final
// frutas.push("laranja");
// console.log(frutas)


//adiciona no inicio
// frutas.unshift("morango");
// console.log(frutas)


//remove ultimo elemento do array
// frutas.pop()
// console.log(frutas)


//remove primeiro elemento do array
// frutas.shift();
// console.log(frutas)


//acessar elemento da lista
// console.log(frutas[0])


//alterar elemento da lista
// frutas[2] = "laranja";
// console.log(frutas);




//tamanho do array (quantos elementos possuem o array)
// console.log(frutas.length);


//índice de um valor
// console.log(frutas.indexOf("banana"));
// console.log(frutas.indexOf("abacaxi"));
// console.log(frutas.indexOf("mamao"));
// console.log(frutas.indexOf("pessego"));
// (nao tem abacaxi, mamao ou pessego, retorna -1 pra eles)


// verifica se existe
// console.log(frutas.includes("banana")); //true
// console.log(frutas.includes("abacaxi")) //false


//pegar partes de um array sem alterá-lo
// const algumasFrutas = frutas.slice(1, 3); //indice do 1 ate antes do 3 (2)
// console.log(algumasFrutas); //retorna esses indices
// console.log(frutas); //nao altera o original


//remove ou substitui mas é alterando ao array original
// remove
// frutas.splice(1,1); //remove um item apartir do indice 1
// console.log(frutas);
// substitui
// frutas.splice(1, 1, "laranja"); //remove 1 e adiciona laranja
// console.log(frutas);