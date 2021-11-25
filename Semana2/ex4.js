const botao = document.querySelector('#btn')
const fundo = document.querySelector('#back')
botao.addEventListener('click', sorteio)

const maior = 0;
const menor = 0;
const cem = 0;
function sorteio(){
    let maior = 0;
    let menor = 0;
    let cem = 0;
    for (let i = 0; i < 1000; i++) {
           let numero = Math.floor(Math.random()*1001)
       if (numero >= 501){
           maior++
       } else{
           menor++ 
       }
       if (numero==100){
        cem++
       }
    }
    console.log(maior , menor, cem)
    if (cem == 1){
        fundo.style.background = 'orange';
    } else if (cem > 1){
        fundo.style.background = 'black';
    } else if (maior > menor){
        fundo.style.background = 'url("https://picsum.photos/200/300") no-repeat center top'
        fundo.style.backgroundSize = 'contain'
    } else{
        fundo.style.background = 'url("https://via.placeholder.com/500") no-repeat center top'
        fundo.style.backgroundSize = 'contain'
    }
}
console.log(maior , menor)
