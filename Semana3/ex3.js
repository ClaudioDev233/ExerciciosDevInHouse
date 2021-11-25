var valor1 = 0;
var valor2 = 0;
var tipo = 0;
const span = document.getElementById("resultado")
// 1 soma / 2 sub / 3 mult / 4 divisao


function somaC(tipoOperacao){
    valor1 = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").value = "";
    tipo = parseInt(tipoOperacao);
    
}
function subC(tipoOperacao){
    valor1 = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").value = "";
    tipo = parseInt(tipoOperacao);
    
}
function multiC(tipoOperacao){
    valor1 = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").value = "";
    tipo = parseInt(tipoOperacao);
    
}
function divC(tipoOperacao){
    valor1 = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").value = "";
    tipo = parseInt(tipoOperacao);
    
}
function igual(){
    valor2 = parseInt(document.getElementById("numero").value)
    
    if(tipo == 1){
        span.innerText = `${valor1} + ${valor2} = ${(somaCalc(valor1, valor2))} ` 
        alert(somaCalc(valor1, valor2))
        
    } else if (tipo ==2){
        alert(subCalc(valor1,valor2))
    }else if (tipo ==3){
        alert(multiCalc(valor1,valor2))
    } else {
        alert(divCalc(valor1,valor2))
    }
    valor1= 0;
    valor2 = 0;
    tipo = 0;
}

function somaCalc(x,y){
    return x + y
}
function subCalc(x,y){
    return x - y
}
function multiCalc(x,y){
    return x * y
}
function divCalc(x,y){
    return x / y
}

