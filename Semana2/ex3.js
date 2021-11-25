const corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];
const corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];
const corDoTexto = ["white","black"];

const botao = document.querySelector('#btn')
const fundo = document.querySelector('#main-container')
const elemento = document.querySelector('#container')
const texto = document.querySelector('article')

botao.addEventListener('click', (mudarcor));


function mudarcor(){
     const numero1 = Math.floor(Math.random()*3)
     console.log(numero1)
     fundo.style.backgroundColor = corDeFundo[numero1];

     const numero2 = Math.floor(Math.random()*3)
     console.log(numero2)
     elemento.style.backgroundColor = corDosElementosSobrepostos[numero2];

     const numero3 = Math.floor(Math.random()*2)
     console.log(numero3)
    texto.style.color = corDoTexto[numero3]
}