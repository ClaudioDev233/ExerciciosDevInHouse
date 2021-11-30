const arrayPalavras = [];
let palavra ='';
while(palavra != 'parar'){
    const palavras = prompt("digite algo")
    palavra = palavras
    arrayPalavras.push(palavra)
}

const textosEmOrdem = arrayPalavras.sort((a, b) => a.localeCompare(b))

for (const textos of textosEmOrdem) {
    const $body = document.getElementsByTagName('body')[0]
    var section = document.createElement('section')
    section.innerText = textos
    $body.appendChild(section)
}
