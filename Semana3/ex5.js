var lampada= true ;
function Interruptor(){
   var mudar = document.getElementById("lampada");
   var botao = document.getElementById("botao");
   console.log(lampada)
   if(lampada == true){
       mudar.innerHTML =`<img src="https://github.com/phmonte/devinhouse/blob/main/Aulas/Javascript/imagens/luz-acesa.png?raw=true">`
      lampada = false;
      botao.innerText = "Apagar a luz"
      console.log(lampada)
   } else{
       mudar.innerHTML =`<img src="https://github.com/phmonte/devinhouse/blob/main/Aulas/Javascript/imagens/luz-apagada.png?raw=true">` 
       lampada = true; 
       botao.innerText = "Acender a luz"
       
   }


}