const botao = document.querySelector('#btn');
const partic = document.querySelector('#numeroP');
const idadeM = document.querySelector('#idadeM');
const satisf = document.querySelector('#numeroS');

var numP = 0;
var numS = 0;
var idade_M = [];

botao.addEventListener('click', perguntas);
 function media(x){
     let soma = 0;
     for (i = 0; i < x.length; i++) {
         soma += x[i];
     }
     return soma/x.length ;
 }   
 function perguntas() {
     const nome = window.prompt("Digite Seu Nome");
     numP +=1;
     partic.innerHTML = numP;
     console.log(numP);

     const idade = parseInt(window.prompt("Digite sua idade (apenas numeros"));
     idade_M.push(idade);
     idadeM.innerHTML = media(idade_M);
     console.log(idade_M);

     const sat = window.prompt("Digite um número de 1 a 10 para expressar sua satisfação");

     const lista_S = window.confirm('Podemos incluir você na lista de satisfeitos?')
     if (lista_S == true){
         numS += 1
         satisf.innerHTML = numS
         window.alert('Salvo com sucesso')
     } else {
         window.alert('Salvo com sucesso')
     }
     console.log(numS)
 }
 