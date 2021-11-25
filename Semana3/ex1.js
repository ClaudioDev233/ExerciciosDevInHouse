/*var numero = parseInt(window.prompt("Digite um numero pra saber se é primo!"))
var divisao1 = numero/numero
var divisao2 = numero%2;
var teste3 = numero/2;
var teste3Int = Number.isInteger(teste3)

console.log(divisao2);
console.log(teste3)
console.log(teste3Int);*/
var divisores = 0;
    var numero = parseInt(window.prompt("Digite um numero pra saber se é primo!"))
for (var i = 2; i <=numero; i++) {
    if(numero % i == 0){
        divisores++
        console.log(divisores)
    } 
} if(divisores > 1){
        console.log("O numero não é primo")
    } else{
        console.log("O numero é primo")
    }
