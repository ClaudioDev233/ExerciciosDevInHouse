var lampada= true ;
function Interruptor(){
   var mudar = document.getElementById("lampada");  
setInterval(() => {
    if(lampada == true){
       mudar.innerHTML =`<img src="https://github.com/phmonte/devinhouse/blob/main/Aulas/Javascript/imagens/luz-acesa.png?raw=true">`
      lampada = false;
      
   } else{
       mudar.innerHTML =`<img src="https://github.com/phmonte/devinhouse/blob/main/Aulas/Javascript/imagens/luz-apagada.png?raw=true">` 
       lampada = true; 
   }
}, 2000);
   
}

