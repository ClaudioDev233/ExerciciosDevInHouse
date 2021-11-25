const span = document.getElementById("resultado")
function PegaValor(){
    var valor = parseFloat(document.getElementById("valor").value);
    var desconto = parseFloat(document.getElementById("desconto").value)/100;
    var valorDesconto = CalculaDesconto(valor,desconto)
    console.log(valorDesconto)
    var novoValor = ValorComDesconto (valor, valorDesconto)
     console.log(novoValor)
   span.innerText = novoValor

}
function CalculaDesconto(x , y){
   return x * y 
}
function ValorComDesconto(x,y){
    return x - y
}