var lampada= true ;

function Interruptor2 (){
    var mudar = document.getElementById("lampada");
    setTimeout(() => {
       mudar.innerHTML =`<img src="https://github.com/phmonte/devinhouse/blob/main/Aulas/Javascript/imagens/luz-acesa.png?raw=true">`
       lampada = false;
      
    }, 5000);
}