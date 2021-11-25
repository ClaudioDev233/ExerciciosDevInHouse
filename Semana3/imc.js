
function imc(){
var peso = parseFloat(document.getElementById("peso").value)
var altura = parseFloat(document.getElementById("altura").value)
 var calcImc =  ((peso/(altura*altura))*10000).toFixed(2);
 if(calcImc < 18.5){
    document.getElementById("resultado").innerHTML = "Abaixo do Peso"
 } else if(calcImc <= 24.9){
     document.getElementById("resultado").innerHTML = "Peso Normal"
 } else if(calcImc <= 29.9){
     document.getElementById("resultado").innerHTML = "Sobrepeso"
 } else if(calcImc <= 34.9){
     document.getElementById("resultado").innerHTML = "Ob1"
 } else if(calcImc <=39.9){
     document.getElementById("resultado").innerHTML = "Ob2"
 } else {
     document.getElementById("resultado").innerHTML = "Ob3"
 }
    document.getElementById("seuIMC").innerHTML = `Seu IMC é ${calcImc}`
   document.getElementById("peso").value = 0;
   document.getElementById("altura").value = 0;
 } 

