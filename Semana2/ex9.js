/* Em um laço de repetição peça para o usuário digitar uma palavra (prompt) enquanto ele não digitar a palavra “parar”.
cada nova palavra será acrescentada em um array;

Quando o usuário escrever parar deve ser mostrado pra ele em sections os elementos digitados em ordem alfabética decrescente */

const arrayPalavras = [];
let palavra ='';
while(palavra != 'parar'){
    const palavras = prompt("digite algo")
    palavra = palavras
    arrayPalavras.push(palavra)
}

const textosEmOrdem = arrayPalavras.sort((b,a) => a.length - b.length);

for (const textos of textosEmOrdem) {
    const $body = document.getElementsByTagName('body')[0]
    var section = document.createElement('section')
    section.innerText = textos
    $body.appendChild(section)
}

